---
layout: post
title: Some additional comments on the "leg difference equation"
---

In yesterdays the algebraic analysis of isosceles triangles, we arrived at an equation that is true for all triangles:

<div class="display-latex">
  \left(a^2 - b^2\right) + (ac - cb) = 0
</div>

This equation is hard to formulate without geometric algebra because the second term involves a geometric product, so it doesn't have a traditional name, and I am not aware of it having been written down anywhere else{%marginnote 'originality' """I don't want to claim that this equation is original. Frankly, I haven't searched that hard, and I'm holding myself to a lower standard on this blog than I would in an academic paper. If you have any leads on references, please e-mail me and I will update this post."""%}. The best name I've been able to think of for it so far is the *leg difference equation*.

Using the general expansion for the geometric product of two vectors as the sum of the dot product and the wedge product,

<div class="display-latex">
  uv = u\cdot v + u \wedge v
</div>

we can rewrite this equation as a sum of a scalar part and a bivector part

<div class="display-latex">
  \left(a^2 - b^2 + a \cdot c - c \cdot b \right) + (a \wedge c - c \wedge b) = 0
</div>

and the scalar part and bivector part must separately be <span class="mathquill-embedded-latex">0</span>
. The bivector part,

<div class="display-latex">
  a \wedge c = c \wedge b
</div>

is equivalent to the law of sines, and the scalar part

<div class="display-latex">
\left(a^2 - b^2 + a \cdot c - c \cdot b \right) = 0
</div>

can also be arrived at by subtracting expressions for the law of cosines at two different vertices.

We saw above that when <span class="mathquill-embedded-latex">a^2 = b^2</span> (equal leg lengths), this equation implies <span class="mathquill-embedded-latex">\hat{a}\hat{c} = \hat{c}\hat{b}</span> (equal base angles). But an interesting feature of this equation is that when the leg lengths aren't equal, the equation is no longer directly "about angles" at all.

We can transform the equation into a statement that is generically about scaled rotations ("amplitwists" in [Needham's terminology](https://www.amazon.com/Visual-Complex-Analysis-Tristan-Needham/dp/0198534469)) by dividing through by <span class="mathquill-embedded-latex">c^2</span>

<div class="display-latex">
\frac{a^2 - b^2}{c^2} + ac^{-1} - c^{-1}b = 0
</div>

(so long as <span class="mathquill-embedded-latex">c^2</span> is not  <span class="mathquill-embedded-latex">0</span>) and this relation can be visualized by applying it to any other vector <span class="mathquill-embedded-latex">v</span> in the plane,

<div class="display-latex">
v\frac{a^2 - b^2}{c^2} + vac^{-1} - vc^{-1}b = 0
</div>

but I haven't found this visualization to be all that illuminating, so I won't draw it here.

The leg difference equation makes it easy to show that equal legs implies equal base angles, but what about the converse? Do equal base angles imply equal legs?

It is sufficient to consider only the bivector part of the leg difference equation, which is equivalent to the law of sines

<div class="display-latex">
0 = a \wedge c - c \wedge b
</div>

In terms of lengths and unit vectors, this is

<div class="display-latex">
\begin{aligned}
  0 &= |a||c| \hat{a} \wedge \hat{c} - |c||b| \hat{c} \wedge \hat{b} \\
  &= |c| \left(|a| \hat{a} \wedge \hat{c} - |b| \hat{c} \wedge \hat{b}\right)
\end{aligned}
</div>

If the base is <span class="mathquill-embedded-latex">0</span>
, then the other two sides certainly have the same length (the triangle equation implies they are negatives of one another), so it suffices to continue assuming <span class="mathquill-embedded-latex">|c|</span> is non-zero, so that

<div class="display-latex">
0 = |a| \hat{a} \wedge \hat{c} - |b| \hat{c} \wedge \hat{b}
</div>

Adding and subtracting <span class="mathquill-embedded-latex">|b| \hat{a} \wedge \hat{c}</span> gives

<div class="display-latex">
\begin{aligned}
  0 &= |a| \hat{a} \wedge \hat{c} - |b| \hat{a} \wedge \hat{c} + |b| \hat{a} \wedge \hat{c}  - |b| \hat{c} \wedge \hat{b} \\
  &= \left(|a| - |b|\right) \hat{a} \wedge \hat{c} + |b|\left(\hat{a} \wedge \hat{c} - \hat{c} \wedge \hat{b}\right)
\end{aligned}
</div>

which shows that if the base angles are equal, <span class="mathquill-embedded-latex">\hat{a} \wedge \hat{c} = \hat{c} \wedge \hat{b}</span>, so that the second term is <span class="mathquill-embedded-latex">0</span>, the first term must also be <span class="mathquill-embedded-latex">0</span>,

<div class="display-latex">
\left(|a| - |b|\right) \hat{a} \wedge \hat{c} = 0
</div>

In words, this says that if the base angles are equal, *either* the length of the legs must be equal, <span class="mathquill-embedded-latex">|a| = |b|</span> , *or* the sides of the triangle must be collinear, <span class="mathquill-embedded-latex">\hat{a}\wedge\hat{c}=0</span>. And in fact, this is all we will be able to prove, since a degenerate triangle where all sides are collinear always has two equal base angles (both equal to a half turn), but need not have any two sides equal.

I find that the algebraic way of working is pretty good at showing exactly how degenerate cases like this must be handled, whereas working pictorially can make it easy to forget about degenerate cases where a theorem may not hold.