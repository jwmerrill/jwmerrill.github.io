---
layout: post
title: Counting operations instead of degree in polynomial approximation
---

A famous problem in approximation theory is to approximate the function <span class="mathquill-embedded-latex">\left|x\right|</span> as accurately as possible on the interval <span class="mathquill-embedded-latex">-1 \le x \le 1</span>, measured by maximum absolute error, using either polynomials or rational functions of fixed degree.

Perhaps it seems silly to approximate a function as simple as this, but it serves as a useful test problem for probing how well non-smooth functions can be approximated by polynomial or rational functions.

I first read about this problem in Trefethen's book [Approximation Theory and Approximation Practice](https://people.maths.ox.ac.uk/trefethen/ATAP/), which points out the significant gap in convergence behavior between polynomials and rationals{%marginnote 'clustering paper' 'See also *Trefethen, Nakatsukasa, and Weideman, <a href="https://arxiv.org/abs/2007.11828">"Exponential node clustering at singularities for rational approximation, quadrature, and PDEs,"</a> 2020* for some more recent discussion of rational approximation problems like this.'%}:

<blockquote>
<b>Theorem 25.1. Approximation of |x| on [&minus;1, 1].</b> <i>The errors in best polynomial and rational approximation of |x| on [&minus;1, 1] satisfy as n &rarr; &infin;</i>
<div class="display-latex">E_{n0}(|x|) \sim \beta/n, \quad \beta = 0.2801\ldots</div>
<i>and</i>
<div class="display-latex">E_{nn}(|x|) \sim 8e^{-\pi\sqrt{n}}</div>
</blockquote>

Polynomials can converge only linearly in their degree here, which we will call the "Bernstein bound," and rationals can converge root-exponentially in their degree, which we will call the "Newman bound." (The notation <span class="mathquill-embedded-latex">E</span> refers to the *minimax* error — the smallest achievable maximum absolute error over the interval.)

The previous [two]({% post_url 2026-03-21-newtons-method-geometric-series %}) [posts]({% post_url 2026-03-22-matrix-squaring-geometric-series %}) explored repeated composition of low-degree polynomials, which can generate polynomials of exponentially high degree in the number of operations. What happens when we apply this to the problem above?

<!--more-->

In particular, consider Newton's iteration for the inverse square root,

<div class="display-latex">
  y_{n+1} = y_n\left(\frac{3}{2}-\frac{x}{2}y_n^2\right),
</div>

which can be derived by applying Newton's method to the function <span class="mathquill-embedded-latex">f(y)=1/y^2-x</span>. This iteration evaluates a polynomial of degree <span class="mathquill-embedded-latex">\left(3^n-1\right)/2</span> in <span class="mathquill-embedded-latex">x</span> using <span class="mathquill-embedded-latex">3n</span> multiplications and <span class="mathquill-embedded-latex">n</span> additions. To simplify a bit, we'll consider a multiply followed by an addition as a [single operation](https://en.wikipedia.org/wiki/Multiply%E2%80%93accumulate_operation) and say each iteration requires 3 "operations." The absolute value follows from the inverse square root through <span class="mathquill-embedded-latex">|x|=x^2\cdot(1/\sqrt{x^2})</span>.

Here is a plot showing the absolute error in this approximation, starting from <span class="mathquill-embedded-latex">y_0 = 1</span>, for 10, 20, 30, 40, and 50 iterations:

<figure class="mainfig" style="margin-bottom: 2em;">
  <div style="position: relative; display: inline-block; padding-left: 1.5em;">
    <!-- Live version: https://www.desmos.com/calculator/ma31bhxl25 -->
    <a href="https://www.desmos.com/calculator/rbzutr9zxv"><img src="/img/polynomial-approximation-operation-count/newton-iteration-abs-error.png" style="width: 600px; max-width: 100%;" alt="Graph of absolute error when using Newton's inverse square root iteration to approximate |x| for 10, 20, 30, 40, and 50 iterations."/></a>
    <div style="position: absolute; bottom: -1.5em; left: 50%; transform: translateX(-50%);"><span class="mathquill-embedded-latex">x</span></div>
    <div style="position: absolute; left: 0; top: 50%; transform-origin: left center; transform: rotate(-90deg) translateX(-50%);">abs. err.</div>
  </div>
</figure>

The steady march of these curves on a log-log scale shows that as the number of iterations increases, the maximum error occurs at exponentially decreasing values of <span class="mathquill-embedded-latex">x</span> and _decreases exponentially with iterations_.

The following table gives the maximum absolute error read from each of these curves.

<style>
th { padding-left: 0.5em; padding-right: 0.5em; }
</style>

| iterations | operations |    max. abs. error     |
| :--------: | :--------: | :--------------------: |
|     10     |     30     | 4.7 × 10<sup>-3</sup>  |
|     20     |     60     | 8.1 × 10<sup>-5</sup>  |
|     30     |     90     | 1.4 × 10<sup>-6</sup>  |
|     40     |    120     | 2.5 × 10<sup>-8</sup>  |
|     50     |    150     | 4.3 × 10<sup>-10</sup> |

<!-- Live version: https://www.desmos.com/calculator/yegk19s54g -->

[Fitting this data to an exponential](https://www.desmos.com/calculator/vkbu4jfbln) gives a very good fit with about 0.18 decimal digits of accuracy added per iteration (0.059 digits per operation).

This is exponential convergence in operation count — a qualitatively different rate than either the Bernstein or Newman bounds.

The rate constant, however, is somewhat low for practical purposes. The crossover points when comparing this Newton iteration against minimax polynomials and rationals of fixed degree on a per-operation basis are, respectively, 23 operations (max. abs. err. ≈ 1.2 × 10<sup>-2</sup>) and 217 operations (max. abs. err. ≈ 5 × 10<sup>-14</sup>). Newton iteration is a clear win over minimax polynomials of fixed degree, but only a win over minimax rationals of fixed degree if you need relatively high precision.

But this isn't yet a fair comparison. The Newton iteration is not specifically optimized for this problem (i.e. for this approximation interval and error metric) at all, whereas the minimax polynomials and rationals have many optimized coefficients. What might be possible with optimized coefficients at each iteration?

The Bernstein bound still sets a limit here. After <span class="mathquill-embedded-latex">n</span> iterations (<span class="mathquill-embedded-latex">3n</span> operations), a Newton-like method with optimized coefficients would still evaluate a polynomial of degree <span class="mathquill-embedded-latex">\left(3^n-1\right)/2</span>. Using this degree in the Bernstein bound implies exponential convergence with a maximum rate constant of log<sub>10</sub>(3) ≈ 0.48 digits per iteration (0.16 digits per operation). Perhaps surprisingly, the unoptimized Newton iteration is already within a factor of about 2.7 of this hypothetical optimum rate. If this rate were achievable, it would move the crossover points with minimax polynomials and rationals of fixed degree down to 8 operations (max. abs. err. ≈ 4 × 10<sup>-2</sup>) and 71 operations (max. abs. err. ≈ 3 × 10<sup>-12</sup>) respectively.

Further improvement may be possible by considering iterated _rational_ maps, which can also evaluate rationals of exponentially high degree in the number of operations. Combining that observation with the Newman bound suggests that super-exponential convergence in operation count could be possible.

After some early experiments, I have not yet observed such super-exponential convergence, and I have doubts that it will in fact be possible. Consider, for example, Heron's method for approximating square roots,

<div class="display-latex">
  y_{n+1} = \frac{1}{2}\left(y_n+\frac{x}{y_n}\right),
</div>

which can be derived by applying Newton's method to the function <span class="mathquill-embedded-latex">f(y)=y^2-x</span>. This iteration evaluates a rational function of degree <span class="mathquill-embedded-latex">2^n-1</span> (in both numerator and denominator) after <span class="mathquill-embedded-latex">n</span> iterations, using 3 operations per iteration (counting division as one operation). Using this iteration to approximate the absolute value through <span class="mathquill-embedded-latex">|x|=\sqrt{x^2}</span>, starting with <span class="mathquill-embedded-latex">y_0 = 1</span>, the maximum absolute error always [appears](https://www.desmos.com/calculator/krvncwb8mf) to occur at x=0. This makes the error particularly easy to analyze: it is <span class="mathquill-embedded-latex">2^{-n}</span> after <span class="mathquill-embedded-latex">n</span> iterations. Exponential convergence, with rate constant 0.30 decimal digits per iteration (0.10 digits per operation). This is faster than the polynomial inverse square root iteration above, but not super-exponential.

How might this be improved with optimized coefficients per iteration? The Newman bound on degree, suggesting that super-exponential convergence in operation count may be possible, seems unlikely to be realizable to me, but I don't yet know a lower bound than that.

I have suggested optimizing coefficients in polynomial and rational iterations. This is likely to be a challenging optimization problem because the maximum absolute error is a highly nonlinear function of these coefficients. However, I see some reason for optimism. Polynomial and rational iterations of the type I am describing are very similar to the layers of neural networks, and in fact, there has already been substantial research on polynomial neural networks. When compared to the neural networks that are being trained successfully for machine learning and artificial intelligence, the iterations I am describing are very small networks.

The central observation of this post is simple: the classical convergence rates for polynomial and rational approximation are stated in terms of degree, but degree is not the same as computational cost. When measured by operation count, iterated polynomial maps can achieve exponential convergence for problems where fixed-degree polynomials converge only linearly and fixed-degree rationals converge only root-exponentially. Whether the full potential of this approach can be realized is an open question.

At this stage, I have many more questions than answers, and I will close with a list of them:
1. We have seen that Newton's iteration for the inverse square root achieves full exponential convergence in operation count for the problem of approximating <span class="mathquill-embedded-latex">\left|x\right|</span> on the interval <span class="mathquill-embedded-latex">-1 \le x \le 1</span> by a polynomial. There is a factor of 2.7 gap between the rate constant realized by this technique and the maximum possible rate constant set by applying the Bernstein bound to the degree. Is it possible to achieve the full Bernstein bound? This would be surprising, in a way, since these iteratively generated polynomials have exponentially fewer coefficients than a polynomial in standard form of the same degree. But if the limit is lower, what is it?
2. Is super-exponential convergence in operation count possible for iterated rationals in this problem? If not, what is the maximum possible exponential convergence rate?
3. How generically can iterated polynomials and rationals approximate non-smooth functions with exponential (or super-exponential) convergence in operation count? The iterations we have examined are specific to approximating the square root and inverse square root, but similar iterations with optimized coefficients should be applicable more generally in principle. What performance can they achieve, say for the problem of approximating <span class="mathquill-embedded-latex">|x|^{\alpha}</span> on <span class="mathquill-embedded-latex">-1 \le x \le 1</span> for other positive <span class="mathquill-embedded-latex">\alpha</span>?
4. Minimax [polynomial](https://github.com/search?q=repo%3AJuliaMath%2Fopenlibm+polynomial&type=code) and [rational](https://github.com/search?q=repo%3AJuliaMath%2Fopenlibm%20rational&type=code) approximations are widely used in standard library implementations of mathematical functions, but almost always over intervals where the functions they approximate are smooth. Could iterated polynomials or rationals with optimized coefficients offer practical advantages in these settings?
