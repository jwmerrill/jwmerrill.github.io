---
layout: post
title: Newton's method can rapidly sum the geometric series
---

Newton's iteration for computing the reciprocal of <span class="mathquill-embedded-latex">a</span>,

<div class="display-latex">
  y_{n+1} = y_n(2-ay_n),
</div>

can be derived by applying Newton's method to the function <span class="mathquill-embedded-latex">f(y)=1/y-a</span>.

Substituting <span class="mathquill-embedded-latex">a=1-x</span> gives

<div class="display-latex">
  y_{n+1} = y_n(2-(1-x)y_n),
</div>

an iteration for computing <span class="mathquill-embedded-latex">1/(1-x)</span>. Starting from <span class="mathquill-embedded-latex">y_0=1</span>, the first few iterates are

<div class="display-latex">
  \begin{aligned}
  y_1 &= 1 \cdot (1+x) = 1+x, \\
  y_2 &= (1+x)(1+x^2) = 1+x+x^2+x^3, \\
  y_3 &= (1+x+x^2+x^3)(1+x^4) = 1+x+x^2+\cdots+x^7.
  \end{aligned}
</div>

This certainly looks like the geometric series, and after <span class="mathquill-embedded-latex">n</span> iterations the result is a polynomial of degree <span class="mathquill-embedded-latex">2^n-1</span>.

<!--more-->

To verify, substitute

<div class="display-latex">
  y_n = \sum_{k=0}^{2^n-1} x^k.
</div>

into the Newton iteration. The second factor [telescopes](https://en.wikipedia.org/wiki/Telescoping_series) to <span class="mathquill-embedded-latex">1+x^{2^n}</span>. This is an instruction to take the first factor and add a copy of it multiplied by <span class="mathquill-embedded-latex">x^{2^n}</span>. The result is

<div class="display-latex">
  y_{n+1} = \sum_{k=0}^{2^{n+1}-1} x^k,
</div>

as required.

The sum of a finite geometric series can of course be computed by the formula,

<div class="display-latex">
  \sum_{k=0}^{n} x^k = \frac{1-x^{n+1}}{1-x},
</div>

but this involves division. Newton's iteration uses only addition and multiplication. It just uses them much more economically than the direct series definition, producing a polynomial of degree <span class="mathquill-embedded-latex">2^n-1</span> with only <span class="mathquill-embedded-latex">2n</span> multiplications and <span class="mathquill-embedded-latex">n</span> additions.

When we discuss factoring a polynomial, we mean factoring it into a _product_ of linear polynomials.

Newton's iteration instead factors the finite geometric series into a _composition_ of quadratic polynomials{%marginnote 'horner' """[Horner's method](https://en.wikipedia.org/wiki/Horner%27s_method) factors a polynomial into a composition of _linear_ polynomials. This is handy for evaluation, but kind of a trivial re-arrangement since it has exactly the same coefficients as standard form."""%}.

What other polynomials can be factored this way? Counting free parameters suggests certainly not all of them. Beyond that, I don't really know, but I think [arithmetic circuit complexity](https://en.wikipedia.org/wiki/Arithmetic_circuit_complexity) considers questions like this.