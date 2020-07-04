---
layout: post
title: How to lie with units
---

For some reason, a six year old study claiming that [dogs align with Earth's magnetic field when they poop](https://doi.org/10.1186/1742-9994-10-80) in "calm magnetic field conditions" is [making the rounds online](https://www.google.com/search?q=dog+poop+magnetic+field&tbs=cdr%3A1%2Ccd_min%3A12%2F1%2F2019%2Ccd_max%3A2%2F15%2F2020&tbm=) again. After this article was originally published in December 2013, it was reported uncritically by [PBS](https://www.pbs.org/newshour/science/dogs-poop-in-alignment-with-earths-magnetic-field-study-finds), [NPR](https://www.npr.org/sections/thetwo-way/2014/01/03/259416979/everyone-poops-but-dogs-do-it-with-magnetism), [National Geographic](https://blog.nationalgeographic.org/2014/01/03/dogs-sense-earths-magnetic-field/), [Vice](https://www.vice.com/en_us/article/ezvdme/dogs-poop-in-alignment-with-earths-magnetic-field), and many others.

The study's conclusions hinge on a surprising distinction: dogs don't _always_ tend to align with Earth's magnetic field when they poop; they only tend to do it during times when the field's direction is especially steady{%marginnote 'declination-rate-table' """These steady conditions occurred about one fifth of the time in the study ([table 8](https://frontiersinzoology.biomedcentral.com/articles/10.1186/1742-9994-10-80/tables/8))."""%}.

If you're familiar with the idea of [p-hacking or data dredging](https://en.wikipedia.org/wiki/Data_dredging), this kind of binning is probably enough to make you anxious{%marginnote 'p-hacking' """See this [xkcd cartoon](https://www.xkcd.com/882/) for a fun take on the general concept, and [this post](http://skeptvet.com/Blog/2014/01/do-dogs-line-themselves-up-with-the-earths-magnetic-field-to-poop/) for a criticism of this particular study along these lines."""%}, but I don't want to focus on statistics today.

Instead, I want to highlight exactly how small these variations in the Earth's magnetic field direction actually are, because I think the study's authors took several steps to obscure this point.

<!--more-->

They measure variability of the field in % declination, and find that dogs alignment with the field while pooping is only significant when variability of the fields is less than 0.1%. Okay, but what exactly is this a percentage of? [Declination](https://en.wikipedia.org/wiki/Magnetic_declination) essentially just means "direction of the field"---technically it is the angle between the direction of the local magnetic field and the direction to the North Pole, i.e. the angle between magnetic north and geographic north.

What could be meant by a percentage of a direction? My first guess was that maybe % declination meant "percentage of a full turn around a compass," so that 1% is equivalent to 3.6 degrees. But the authors report observing variations of up to 8%, and I know from experience that a compass doesn't just sit there swinging around by tens of degrees, at least not unless there is some exciting electrical equipment nearby.

No, the caption of [figure 4](https://frontiersinzoology.biomedcentral.com/articles/10.1186/1742-9994-10-80/figures/4) makes it clear that what is actually meant by % declination is arcminutes of change in declination per minute of time. An arcminute is _one sixtieth_ of one degree. Calling this ratio a percentage is an odd pun on two different meanings of the word "minute": minutes of time and arcminutes of direction{%marginnote 'disguising-size' """The authors make it easy to miss exactly how small these variations are by using unfamiliar units, and again by using drawings of compasses with a highly exaggerated scale of rotation in figure 4."""%}.

The authors claim that the alignment effect is only significant when the field variation is less than 0.1% declination. One way to rephrase this is that if, in the perhaps one minute it takes a dog to decide which direction to face while pooping, the earth's magnetic field direction changes by 0.002 degrees, that will have a measurable effect on the behavior of the dog.

To put this in even more familiar terms, imagine the hour hand on a clock. It moves 360 degrees in 12 hours, or 0.5 degrees per minute. The authors are claiming that if the local direction of the Earth's magnetic field is rotating at a rate that is more than 100 times slower than the hour hand on a clock, this will have a measurable effect on the behavior of dogs.

Perhaps you're willing to believe that dogs are sensitive to magnetic fields. Nature is full of surprises, and there's good evidence for [magnetoreception](https://en.wikipedia.org/wiki/Magnetoreception) in several other species. But are you also willing to believe that dogs are sensitive to such tiny variations in magnetic fields? Much more sensitive than a handheld magnetic compass?