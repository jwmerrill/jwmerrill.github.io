---
layout: post
title: A seemingly exact result in extreme value theory
---

My co-worker, Andrey Federov, posed an interesting probability puzzle to me:

    Suppose you have a segment of length 1, and you cut it at $n$ points drawn randomly from a uniform distribution. What is the distribution of the longest uncut segment?

If we make $n$ cuts, there will be $n + 1$ uncut segments. If all the uncut segments are the same length, they will each be $1/(n+1)$ units long. The longest segment must always be at least this long, because if its length were decreased further, some other segment would necessarily become longer than it. If all the cuts happened at 0 or 1, the longest segment would be 1 unit long. So we know with certainty that

$$1/(n+1) \leq l_\mathrm{max} \leq 1$$

Now let's collect some numerical evidence:


```
        PDF       CDF
n=1
n=2
n=3
n=10
```

For $n=1$, the PDF is flat between 1/2 and 1. For $n=2$, the PDF rises linearly between 1/3 and 1/2, and then decreases linearly between 1/2 and 1. As n increases, the peak of the PDF moves to the left and becomes narrower, but the PDF remains skewed to the right.

The first two entries in this table remind me of the distribution of the sum of $n$ samples from a uniform distribution. The distribution of the sum of $n$ samples from a distribution is an n-fold convolution of the underlying distribution with itself. For a uniformly distributed variable, the distribution of the sum of $n$ samples is apparently called the [Irwin Hall Distribution](http://en.wikipedia.org/wiki/Irwin%E2%80%93Hall_distribution). Let's call it $C_n(s)$. It's a piecewise polynomial of order $n-1$, which is nonzero for $0 < s < n$. For $n=1$, it is of course equal to the uniform distribution, and for $n=2$, it's a triangle distribution that rises linearly between $s=0$ and $s=1$, and then falls linearly between $s=1$ and $s=2$.

We can map the support of the uniform sum distribution, $0 < s < n$ onto the support of the maximum length distribution, $1/(n+1) < l_\mathrm{max} < 1$ by the transformation

$$s = 1/l_\mathrm{max} - 1$$.

<aside>
  For any polynomial $P(x)$ of order $n$, $x^n P(1/x)$ is a polynomial with the same coefficients as $P(x)$, but in reverse order. This fact had never occurred to me before.
</aside>

For the $n=2$ case, this transformation also maps the peak from $s=1$ to $l_\mathrm{max}=1/2$, which is promising. However, $C_n(1/l_\mathrm{max} - 1)$ is no longer a piecewise polynomial, but rather a piecewise rational function. We can turn it back into a polynomial by multiplying by $l_\mathrm{max}^(n-1)$, and normalize it to integrate to 1 by multiplying by a factor of $(n+1)!$. Remarkably, the resulting distribution appears to be *exact*

$$
p(l_\mathrm{max}|n) = (n+1)! l_\mathrm{max}^(n-1) C_n(1/l_max - 1)
$$

```
        PDF       CDF
n=1
n=2
n=3
n=10
```

Is this just a peculiar coincidence, or is it the result of some deeper connection? I'm not sure yet.