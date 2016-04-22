---
layout: post
title: Beware log-transformed least-squares
---

I would like to take a crack at this. I guess it's a bit of a hobby horse. I don't know enough economics to criticize the economics scenario, but I have seen a lot of questionable log-transformed least-squares in the hard sciences.

The typical scenario that justifies standard least squares is a model that looks like this:

(1) y_i = f(x_i; a) + σ ϵ_i

where f is some deterministic model function, x_i and y_i are the independent and dependent data variables, a is a free parameter or a whole collection of free parameters, σ is the standard deviation of the error (which is typically unknown or uncertain), and the ϵ_i are independent samples from a standard normal distribution.

The known (standard normal) joint distribution of the ϵ_i justifies taking the likelihood in terms of y_i - f(x_i; a) to be multivariate normal, which in turn justifies least squares as maximum likelihood. This story is told in various notations at the beginning of essentially every treatment of maximum likelihood.

If your error is multiplicative and log-normally distributed instead of additive and normally distributed, then the model instead looks like

(2) y_i = f(x_i; a)exp(σ ϵ_i)

where all the symbols have exactly the same meaning as in (1) (note that exponentiating a normally distributed variable gets you a log-normally distributed variable). Then, taking logs gets you back to something that looks like (1) in terms of transformed variables

log(y_i) = log(f(x_i; a)) + σ ϵ_i

which justifies log-transformed least squares as maximum likelihood in the same way as before.

This is fine in theory, but there are a couple problems in practice:

1. People very frequently decide to do log-transformed least-squares based on the algebraic form of f: if f is exponential or a power law, the log transformation turns a non-linear least-squares problem into linear least squares. Linear least squares is easier to execute, so that's what people frequently do. But the algebraic form of f is a totally independent issue from the question of whether the errors are additive or multiplicative (or enters in some even more complicated way). Therefore, the algebraic form of f is totally independent from the statistical justification for log-transformed least-squares, contrary to folk lore and popular practice.

2. Additive noise of some kind almost always exists in real measurements, even if there is *also* multiplicative noise. If you put something through an electronic circuit, you'll end up with at least some additive Johnson noise. Additionally, there is very commonly an uncertain additive background of some kind. So even if multiplicative noise is the dominant effect, more realistic models look like

(3) y_i = f(x_i; a)exp(σ ϵ_i) + b + ω δ_i

where b is an uncertain additive background,  ω is the standard deviation of the additive noise, and δ_i represents independent samples from a standard normal distribution, just like ϵ_i.

If you ignore the additive noise, and try to account for the additive background by subtracting off an uncertain estimate of it, and then perform log-transformed least-squares, you end up with big problems if you have any data where y_i is small compared to the uncertainty in b (the background), or compared to ω (the size of the additive noise). Poorly accounted-for additive effects might make some of your data negative (maybe only after background subtraction), which makes the log-transformed procedure totally blow up. You sometimes see people try to fix this up by clamping the data to be above some very small positive value. Even when nothing ends up negative, very small y_i often end up with very large relative error. Because log-transformed least-squares essentially assumes constant relative error, your whole fit may end up being dominated by very small data values and their anomalously large relative error.

Doing standard least-squares when the error is actually multiplicative is often less bad than doing log-transformed least squares when the error is actually additive, because it's often preferable to have your fit dominated by large values and their (possibly) anomalously large absolute error than it is to have your fit dominated by small values and their (possibly) anomalously large relative error. You usually want to err on the side of accurately modeling the part of your data that is not very close to zero.

But it's also possible to turn the maximum-likelihood crank on the full model (3), and with the help of software, I don't think this actually has to be so much more onerous than any other regression procedure.

I'm not sure this sketch is enough to convince anyone who doesn't already know about all of this, and I also think that various aspects of it don't apply directly to the economics scenario. But I wanted to mention it since log-transformed least-squares does run into big problems even in the variable-response scenario, albeit somewhat different problems from the ones covered by Shalizi and Newman for the distribution-fitting scenario.

Refs:

Problems with estimating (power-law) distributions from data:

Shalizi "So You Think You Have a Power Law — Well Isn't That Special?" http://bactra.org/weblog/491.html

Aaron Clauset, CRS and M. E. J. Newman "Power Law Distributions in empirical data" http://arxiv.org/abs/0706.1062

---
