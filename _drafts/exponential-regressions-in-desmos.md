---
layout: post
title: Why Desmos does exponential regressions differently
---

### Executive Summary

If you want to match the parameter values from an exponential regression on a TI calculator in Desmos, and you have data in column tables named $x_1$ and $y_1$, you can write your regression as

$$ \log(y_1) ~ \log(a b^{x_1}) $$

But that might not actually be what you want to do, and there are good reasons that we handle

$$ y_1 ~ a b^{x_1} $$

the way that we do.

### Discussion

Several teachers have pointed out recently that Desmos gives different answers for the parameters of exponential regressions than the TI calculator or Geogebra, which both agree with eachother. In Desmos, if $x_1$ and $y_1$ are table columns, you can create an exponential regression by entering

$$ y_1 \approx a b^{x_1} $$

Desmos lets you parametrize models however you want to, so you could instead write your model as

$$ y_1 \approx a 2^{b x_1}   $$
$$ y_1 \approx a e^{b x_1}   $$
$$ y_1 \approx e^{b x_1 + c} $$
$$ y_1 \approx 2^{\frac{x_1 - t_0}/T} $$

and choosing one of these forms will often make it easier to interpret the meaning of your parameters, but the first form is the (only!) form that the TI lets you use, so that's what we'll compare to.

So first off, what does Desmos actually do when you enter a regression? Desmos always does least squares regression. If $x_1$ and $y_1$ are table columns, and $a$ and $b$ are free variables, then when you write

$$y_1 ~ f(a, b, x_1)$$

Desmos finds the values of $a$ and $b$ that minimize the sum of the squares of the differences between the left hand side and the right hand side of the regression. No matter what the form of the function $f$ is, we follow exactly the same procedure. In the particular case of an exponential model in the first form, this means finding the values of $a$ and $b$ that minimize

$$\sum_{n=1}^length(y_1) \left(y_1\[n\] - a b^{x_1\[n\]}\right)^2$$

In more compact, but more Desmos specific notation, this is

$$\total\left(\left(y_1 - a b^{x_1} \right)^2\right)$$

If Desmos is doing least squares regression and getting different answers than the TI, then what is the TI doing? It turns out that, depending on the form of the model, the TI might apply a transformation to your data, and then do least squares regression on a modified model. [Page 203 of the TI-84 Plus Guidebook [PDF]](http://education.ti.com/media/6CC4C5AED5004F808892046AD33D4A35/ti84plus_guidebook_en). For exponential models (ExpReg), the TI makes a logarithmic transformation to the y variable, and so finds the $a$ and $b$ that minimize

$$\total\left(\left(\ln(y_1) - b x_1 - \ln(a)\right)^2\right)

which gives different answers for $a$ and $b$ than the


