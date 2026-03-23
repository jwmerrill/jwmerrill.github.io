---
layout: post
title: Matrix squaring can also rapidly sum the geometric series
---

The geometric series,

<div class="display-latex">
  S_{n}(x) = \sum_{k=0}^{n} x^k,
</div>

satisfies a linear recurrence

<div class="display-latex">
  S_{n+1}(x) = x \, S_n(x) + 1
</div>

with constant (in <span class="mathquill-embedded-latex">n</span>) coefficients. This means it can also be written as a matrix power,

<div class="display-latex">
  S_{n}(x) = \begin{pmatrix} 1 & 0 \end{pmatrix} M^{n} \begin{pmatrix} 1 \\ 1 \end{pmatrix},
</div>

with

<div class="display-latex">
  M = \begin{pmatrix} x & 1 \\ 0 & 1 \end{pmatrix}.
</div>

Repeatedly squaring <span class="mathquill-embedded-latex">M</span> can rapidly generate high matrix powers and thus sum large finite geometric series.

<!--more-->

The first few iterations of repeated squaring give

<div class="display-latex">
  \begin{aligned}
  M^2 &= \begin{pmatrix} x^2 & 1+x \\ 0 & 1 \end{pmatrix}, \\
  M^4 &= \begin{pmatrix} x^4 & 1+x+x^2+x^3 \\ 0 & 1 \end{pmatrix}, \\
  M^8 &= \begin{pmatrix} x^8 & 1+x+x^2+\ldots+x^7 \\ 0 & 1 \end{pmatrix},
  \end{aligned}
</div>

and in general,

<div class="display-latex">
  \begin{aligned}
  M^{2^n} &= \begin{pmatrix} x^{2^n} & S_{2^{n}-1}(x) \\ 0 & 1 \end{pmatrix}.
  \end{aligned}
</div>

Let <span class="mathquill-embedded-latex">a_n</span> and <span class="mathquill-embedded-latex">b_n</span> denote the upper-left and upper-right entries of <span class="mathquill-embedded-latex">M^{2^n}</span>. Writing the result of squaring the matrix shows that they satisfy the recurrence

<div class="display-latex">
  \begin{aligned}
  a_{n+1} &= a_n^2, \\
  b_{n+1} &= b_n (1+a_n), \\
  a_0 &= x, \\
  b_0 &= 1.
  \end{aligned}
</div>

Since <span class="mathquill-embedded-latex">b_n = S_{2^{n}-1}(x)</span>, this recurrence allows computing <span class="mathquill-embedded-latex">S_{2^{n}-1}(x)</span> with <span class="mathquill-embedded-latex">2n</span> multiplications and <span class="mathquill-embedded-latex">n</span> additions: exactly the same operation count as the Newton iteration discussed in [yesterday's post]({% post_url 2026-03-21-newtons-method-geometric-series %}).

The matrix squaring iteration is connected to the Newton iteration by the identity

<div class="display-latex">
  a_{n} = 1 - (1-x)b_n = x^{2^n}.
</div>

This allows writing a recurrence for <span class="mathquill-embedded-latex">b_n</span> alone,

<div class="display-latex">
  b_{n+1} = b_n(2 - (1-x)b_n),
</div>

which is exactly the Newton iteration from yesterday (where it was written using the variable <span class="mathquill-embedded-latex">y_n</span>).

The two iterations—matrix squaring, and the Newton iteration—compute identical results (in exact arithmetic) with identical operation counts, but they are not quite identical computationally. They operate on different state spaces: the Newton iteration operates on a single number, and the matrix squaring iteration operates on a pair of numbers.

They also arrange their multiplications and additions differently, so that in floating point arithmetic, they have different numerical stability. I claim that the Newton iteration is more numerically stable in the region where the series converges, <span class="mathquill-embedded-latex">-1\lt x\lt 1</span>, but I won't go into further detail today.