---
layout: post
title: The relationship between histograms and kernel density estimates
---

Histograms are a commonly used way to graphically represent the distribution of a data set in 1 dimension. To make one, just

1. Segment space into bins
2. For each bin, count how many data points are contained within it
3. Represent this quantity by the height of a bar that spans the bin on a graph.

A quick glance at a histogram reveals many important empirical properties of the distribution of a data set:

* How many peaks are there?
* Where are they centered?
* How wide are they?
* Are they symmetrical about their center, or skewed?
* Are the tops of the peaks flat, or sharp?
* Are any data points very far away from the rest of the data?

For the purposes of becoming acquainted with the gross features of a new data set, I would much prefer a histogram over any dozen summary statistics.

[[Anscombe's Quartet]]

You can keep your mean, your median, your mode; your standard deviation, mean absolute deviation, or interquartile range; your skew and kurtosis; your Gini coefficient. I'll just have a look at that histogram, thanks.

For that matter, you can also keep your z-score, p test, t test, f test, and your chi square goodness of fit. Keep your confidence interval and effect size, even! If you'd be so kind, just show me a histogram, or maybe two histograms.

Did the peak of the histogram move by much more than its width after treatment? Congratulations, it sounds like you're really on to something! Less than its width, but definitely much more than the size of a bin on the histograms? Well, it sounds like the effect is kind of small, but it might still be real! Or is it too hard to perceive a definite change just by looking at two histograms? In that case, we might well be having a conversation about nothing at all.

Alternatively, did there used to be one peak and now there are two? Or did the peak get much narrower or much wider relative to its initial size? Or did it perhaps even develop a large asymmetry where before there was none? Well that's very interesting, indeed. Maybe we should start thinking about why. And oh, by the way, would that null hypothesis test you were planning to run have started you thinking in this direction?

Histograms have many wonderful properties, and woe betide those who  would accept a single number or even three numbers when they could instead choose to look at a graphical representation of the data.

And yet, I claim that there is a similar graphical representation that enjoys every one of the useful properties of a histogram, and that also corrects one or two important deficiencies: it is the kernel density estimator.

A kernel density estimator (KDE among friends) is made by taking some peaked function, the "kernel," making translated copies of it centered at each data point, and computing the point-wise sum of all of these functions. You can represent it on the same axes as a histogram, and indeed, it generally looks very similar to a histogram that has just been smoothed out a little bit in some places, and is perhaps a little better defined in others.

[[Like if a histogram started sleeping an extra hour each night and doing yoga.]]

Kernel density estimates are well known by many, but I think they are also not yet as well known as they should be. There is a perception that KDEs are more sophisticated or more specialized than histograms, and that they are more complicated to understand and construct.

In other words, why bother with a KDE when a histogram would do? And if a histogram won't do, perhaps you should get a better data set instead of getting better statistics.

But I claim that, given software that can plot the graph of a function, KDEs are no harder to construct than histograms are. Actually, I won't just claim this, I will show you. You can make either a histogram or a KDE in most reasonable plotting environments in just two lines of code, and the code for the KDE is actually a little bit simpler. I will also explain exactly how a histogram is related to a KDE with a particular kernel, in a way that may not be widely known.

Let's start with the definition of a function of x that represents a histogram. First, we'll need an auxiliary function:

t(a, b) = { 1 if round(a) = round(b), 0 otherwise}

This function just returns 1 if its arguments round to the same integer, and 0 otherwise. t(x, 0) = t(0, x) is the "tophat" function.

If the elements of a dataset are represented by $d_i$, then the histogram function is

h(x) = sum_i t(x, d_i)

That's it! The graph of h is a histogram of the dataset $d_i$.

It's common to shade the region between the x axis and the histogram bars, so you might want to instead plot

0 < y < h(x)

[[Desmos graph]]

There are a couple of additional choices that you generally need to make when constructing a histogram:

1. How wide should the bins be?
2. How should the bins be positioned?

We can easily add this flexibility by scaling and translating both $x$ and the data before passing them to the comparison function, $t$. For example, to make a histogram with bin width w, offset from the "standard histogram" by a fraction q of the bin width, we can modify h to

h(x; w, q) = sum_i t(x/w - q, d_i/w - q)

[[Desmos graph]]

The bin width, $w$, has an important meaning. Increasing $w$ simultaneously reduces the number of bins (and so the resolution), and increases the number of data points that fall into a given bin (and so decreases the relative amount of "noise" in the bin height). In general, as you collect more and more data, the relative noise for a fixed bin width will decrease, and so it makes sense to decrease the bin size to trade some of this decrease in noise for an increase in resolution. On the other hand, if you expect the underlying distribution to be very smooth, it may make sense to choose larger bins to obtain a lower noise level even when the amount of data is smaller.

The bin offset, $q$, on the other hand, is hard to assign much meaning to. For most problems where histograms are typically used, the position of the bins is just an artifact of the analysis and it has no meaning in terms of the underlying model. In other words, any offset is as good as any other.
