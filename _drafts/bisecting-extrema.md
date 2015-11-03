---
layout: post
title: Losing and Keeping Precision in Numerical Optimization
---

In my last post, I discussed [how to implement bisection](/2014/02/22/bisecting-floats/) to narrow in on a root of a function once you've found an interval where the function switches sign. Bisection can be used for narrowing in on the answer to all kinds of questions, not just root finding, and today I'd like to discuss bisection as a method for finding local maxima (or minima).

In order to apply bisection in general, you need to be able to easily determine whether the answer you're looking for lies inside some region. Then you split the region and ask the same question about each piece. For root finding, observing that a function takes on opposite signs on the endpoints of an interval is enough to tell you that the interval contains a root (if the function is continuous). Similarly, the key to finding a local maximum is the observation that

  1. if a continuous function takes on a larger value on an interior point in some interval than on either of the endpoints, then the interval contains a local maximum.

Once you have an interval that satisfies this condition, pick two new points in the interval that lie on either side of the interior point you already have, and evaluate the function on these points. Now you have 5 total points: the two interval endpoints and the 3 interior points. Consider the interior point from these 3 with the largest function value: its neighbors on either side are the endpoints of a new smaller interval that satisfies condition 1 above. To bisect to a function maximum, repeat this process on the new smaller interval, recursively.

<aside>
  If you're reading very carefully, you might wonder what happens if the function takes on the same value on two of the interior points, in such a way that there is not a unique maximum among them. Much more on this later.
</aside>

The following Julia code implements the above algorithm:

{%highlight julia%}
function bisect_maximum(fn, x1, x3, x5)
  x2 = _middle(x1, x3)
  x4 = _middle(x3, x5)
  f1 = fn(x1)
  f3 = fn(x3)
  f5 = fn(x5)

  while x1 < x2 < x3 < x4 < x5
    f2 = fn(x2)
    f4 = fn(x4)

    # Find the largest interior point, and
    # re-index to continue the algorithm
    # on it and its neighbors.
    if f2 > f3 && f2 > f4
      # Point 2 is largest
      x1, x3, x5 = x1, x2, x3
      f1, f3, f5 = f1, f2, f3
    elseif f3 > f2 && f3 > f4
      # Point 3 is largest
      x1, x3, x5 = x2, x3, x4
      f1, f3, f5 = f2, f3, f4
    else
      x1, x3, x5 = x3, x4, x5
      f1, f3, f5 = f3, f4, f5
    end

    x2 = _middle(x1, x3)
    x4 = _middle(x3, x5)
  end

  return x1, x3, x5
end
{% endhighlight %}

<aside>
  Conceptualy, you can replace <code>_middle(x, y) = (x + y)/2</code>, or actually, any other value between x and y, but <code>_middle</code> as defined in the last post will converge to adjacent floating point numbers in fewer subdivisions, as explained in the last post. Go ahead and define <code>_middle(x, y) = (x + y)/2</code> in your session if you just want to get the examples here running with a minimum of fuss--it will only hurt efficiency, not correctness.
</aside>

It uses `_middle` from the [last post](/2014/02/22/bisecting-floats/) to select new interior points, and continues until it has reached adjacent floating point numbers, like a polite algorithm should.

Let's try it out:

{%highlight julia%}
julia> julia> bisect_maximum(cos, 5.0, 6.0, 7.0)
(6.283185318112372,6.2831853181123725,6.283185318112373)

julia> 2*pi
6.283185307179586
{% endhighlight %}

Not bad. But if you're sweating the digits, this answer actually isn't that great, either. The interval returned by `bisect_maximum` doesn't actually contain the mathematically correct answer, <span class='mathquill-embedded-latex'>2\pi</span>. It's off by

{%highlight julia%}
julia> 6.283185318112372 - 2*pi
1.0932785343698015e-8
{% endhighlight %}

or in other words, half the digits are right, and half of them are wrong. The same thing happens at the maximum near 0:

julia> bisect_maximum(cos, -1.0, 0.0, 1.0)
(1.0593794286251065e-8,1.0593794286251066e-8,1.0593794286251068e-8)

<aside>In most plotting software, it's easier to zoom very far in near <span class='mathquill-embedded-latex'>(0, 0)</span> than near other points. I made these plots in <a href="https://www.desmos.com/calculator">Desmos</a> because it's awesome (full disclosure: I'm an engineer at Desmos, but this is my personal blog). Here's another view of the <a href="https://www.desmos.com/calculator/qentnxzzxd">"zooming in" process</a>, controlled by an interactive slider.</aside>

Let's zoom in on <span class='mathquill-embedded-latex'>\cos(x) - 1</span> near its maximum at <span class='mathquill-embedded-latex'>(0, 0)</span>:

<img src="/img/cos-zoom-1.png" />
<img src="/img/cos-zoom-4.png" />
<img src="/img/cos-zoom-8.png" />

<aside>
  The flat region is "large" in the sense that <span class='mathquill-embedded-latex'>\cos(x)</span> returns the same value for <span class='mathquill-embedded-latex'>~10^8</span> consecutive floating point inputs near <span class='mathquill-embedded-latex'>2\pi</span>.
</aside>

In floating point arithmetic, `cos` is flat near its maximum over a "large" region! The algorithm above isn't careful about these flat regions. If you analyze it carefully, you will see that it actually finds the upper bound of the flat region.

It isn't just `cos` that behaves like this. Practically everything behaves like this:

<aside>You should play with the <a href="https://www.desmos.com/calculator/hmxlje01zy">interactive versions of these plots</a>.</aside>

<div style="position: relative;">
  <img src="/img/gaussian-zoom-8.png" />
  <span class='mathquill-embedded-latex' style="position: absolute; left: 1em; top: 1em; background: white; padding: 0.5em">e^{-x^2}-1</span>
</div>

<div style="position: relative;">
  <img src="/img/lorentzian-zoom-8.png" />
  <span class='mathquill-embedded-latex' style="position: absolute; left: 1em; top: 1em; background: white; padding: 0.5em">\frac{1}{1+x^2} - 1</span>
</div>

<div style="position: relative;">
  <img src="/img/quadratic-zoom-8.png" />
  <span class='mathquill-embedded-latex' style="position: absolute; left: 1em; top: 1em; background: white; padding: 0.5em">\left(1+x^2\right) - 1</span>
</div>

To be specific, smooth functions with non-zero local maxima behave like this in floating point arithmetic. The reason is that for small displacements from a local maximum, the change in <span class='mathquill-embedded-latex'>f(x)</span> is approximately

<span class='mathquill-embedded-latex'>f(x + \Delta x) \approx f(x) + \frac{1}{2} f^{\prime\prime}(x) (\Delta x)^2</span>.

Using this result, we can predict the half-width of the plateau of `cos` as

{%highlight julia%}
julia> sqrt(2*(1.0 - prevfloat(1.0)))
1.4901161193847656e-8
{% endhighlight %}

which is right in the middle of the first plateau where cos(x) is less than 1.0. The right endpoints of these plateaus are:

{%highlight julia%}
julia> sqrt(1*(1.0 - prevfloat(1.0)))
1.0536712127723509e-8
julia> sqrt(3*(1.0 - prevfloat(1.0)))
1.8250120749944284e-8
julia> sqrt(5*(1.0 - prevfloat(1.0)))
2.356080457693621e-8
{% endhighlight %}

This phenomenon places a fairly fundamental limit on the precision you can achieve in trying to locate the maximum of a function by evaluating near its maximum in floating point arithmetic.

One idea is to try to find both edges of the plateau, and then take the middle as your guess for the location of the function maximum. This actually works for some functions, but fails in general. For example, some functions have a "fuzzy plateau" that defeats this technique:

<div style="position: relative;">
  <img src="/img/xexpx-zoom-8.png" />
  <span class='mathquill-embedded-latex' style="position: absolute; left: 1em; top: 1em; background: white; padding: 0.5em">\left(x+1\right)e^{-x} - 1</span>
</div>

The plot looks "blocky" because this function rapidly oscillates back and forth between neighboring floating point values.

<aside><span class="mathquill-embedded-latex">(x-1)^3</span> is a counter-example that is flat near it's zero. Acurately locating the zeros of functions with one or more derivatives equal to 0 at their root (that is, roots of high multiplicity) requires special techniques. Thanks to Hans Borchers for mentioning this[[ref]] in response to the last post.</aside>

The zero-locating problem usually doesn't suffer from this loss of precision, because most functions are not flat near their zeros. As we saw in the last post, it is often possible to bisect a root of a function down to every last floating point bit.

<div style="position: relative;">
  <img src="/img/sincos-zoom-8.png" />
  <div style="position: absolute; left: 1em; top: 1em; background: white; padding: 0.5em">
    <div><span class='mathquill-embedded-latex'>\cos(x)-1</span></div>
    <div><span class='mathquill-embedded-latex'>10^{-8}\sin(x)</span></div>
  </div>
</div>

This suggests a way out of the plateau problem: instead of bisecting function values to find a maximum directly, bisect a root of the function's derivative.

This is an excellent technique if you happen to be using algebraically simple functions that you can differentiate by hand. But trying to apply this procedure to more complicated programs will leave you wishing there were a more automated way to differentiate programs…

<!--

My purpose was to show a few of the elements of working effectively with floating point arithmetic in the context of a simple example, and especially how it can be useful to switch back and forth between thinking of floating point numbers as an approximate model of the continuous real numbers, or as a finite set in their own right.

{%highlight julia%}
julia> using Winston
julia> plot(linspace(2pi - 5e-8, 2pi + 5e-8, 1000), cos(linspace(2pi - 5e-8, 2pi + 5e-8, 1000)))
{% endhighlight %}

Floating point numbers are designed to model the mathematical reals, but they are finite set, albeit a large one. When implementing floating point algorithms, it can be helpful to translate your goal into finite set terms at the outset.

[[mention golden section search]]

Previously, I considered [bisection for isolating real roots](/2014/02/22/bisecting-floats/) of a continuous function. On the way from simple to practical, the goal was translated in 3 stages:

0. Given a continuous function <span class="mathquill-embedded-latex">f(x)</span>, find a value <span class="mathquill-embedded-latex">x_0</span> s.t. <span class="mathquill-embedded-latex">f(x_0)=0</span>.
1. Given a real interval that contains a root of <span class="mathquill-embedded-latex">f(x)</span>, generate successively shorter subintervals that still contain a root.
2. Find a pair of neighboring floating point numbers that <span class="mathquill-embedded-latex">f(x)</span> maps to values with differing sign.

The first restatement translates from real points to real intervals, and the second restatement translates from real intervals to elements of the floating point set.

Today I'd like to discuss using bisection for optimization to compare with root finding. A similar sequence of restatements is useful:

0. Given a continuous function <span class="mathquill-embedded-latex">f(x)</span>, find a value <span class="mathquill-embedded-latex">x_0</span> s.t. <span class="mathquill-embedded-latex">f(x_0)</span> is a local maximum.
1. Given a real interval that contains a local maximum of <span class="mathquill-embedded-latex">f(x)</span>, generate successively shorter subintervals that still contain a local maximum.
2. Find a sequence of 3 adjacent floating point numbers s.t. <span class="mathquill-embedded-latex">f(x)</span> maps the middle number to a larger value than the upper or lower numbers.

The second and third conditions suggest a reasonable algorithm, but we will see that the condition is actually often difficult to satisfy for smooth functions because smooth functions are *flat* near their extrema.

Bisecting a function to find a maximum is pretty similar to bisecting a function to find a root, except the condition that tells us wether an interval contains a local maximum involves three points instead of two:

1. Start with an inteval such that the function takes on a larger value on the midpoint than on either of the endpoints.
2. Evaluate the function at two new points: the midpoints of the interval endpoints and its midpoint.
3. Recurse on an interval formed by the neighbors of the point for which the function takes on the largest value.

The new interval is half the size, and satisfies the precondition unless the function takes on the same value on one of the new endpoints as on the new midpoint. We'll come back to the caveat shortly-it's most of the motivation for the post.

In [Julia](http://julialang.org/) code, we can implement a step of this bisection algorithm as follows:

```julia
function bisect_maximum_step(fn, x1, x3, x5)
  x2 = (x1 + x3)/2
  x4 = (x3 + x5)/2

  f1 = fn(x1)
  f2 = fn(x2)
  f3 = fn(x3)
  f4 = fn(x4)
  f5 = fn(x5)

  if f2 > f3 && f2 > f4
    return x1, x2, x3
  elseif f4 > f2 && f4 > f3
    return x3, x4, x5
  else
    return x2, x3, x4
  end
end
```

For example:

```julia
julia> x1, x2, x3 = 0.0, 1.0, 2.0
(0.0,1.0,2.0)

julia> x1, x2, x3 = bisect_maximum_step(sin, x1, x2, x3)
(1.0,1.5,2.0)

julia> x1, x2, x3 = bisect_maximum_step(sin, x1, x2, x3)
(1.25,1.5,1.75)

julia> x1, x2, x3 = bisect_maximum_step(sin, x1, x2, x3)
(1.5,1.625,1.75)

julia> x1, x2, x3 = bisect_maximum_step(sin, x1, x2, x3)
(1.5,1.5625,1.625)

julia> x1, x2, x3 = bisect_maximum_step(sin, x1, x2, x3)
(1.53125,1.5625,1.59375)
```

As expected, the interval is narrowing around a local maximum of <span class="mathquill-embedded-latex">\sin</span>: <span class="mathquill-embedded-latex">\pi/2 \approx 1.570796</span>.

Let's try running this routine until we reach a sequence of three neighboring floats:

```julia
julia> x1, x2, x3 = 0.0, 1.0, 2.0
(0.0,1.0,2.0)

julia> while x1 < (x1 + x2)/2 < x2 < (x2 + x3)/2 < x3
    x1, x2, x3 = bisect_maximum_step(sin, x1, x2, x3)
end

julia> x1, x2, x3
(1.5707963258028028,1.570796325802803,1.5707963258028033)

julia> pi/2 - x2
9.920935184482005e-10
```

That's not too bad, but we ended up with an interval that doesn't actually contain the continuous function's maximum. Floating point doubles have enough resolution to distinguish 16 digits, but we only got 10 right.

What went wrong? Well, let's zoom in

-->




