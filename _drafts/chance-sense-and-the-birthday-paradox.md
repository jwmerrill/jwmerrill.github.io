---
layout: post
title: Chance sense and the birthday paradox
---

"Chance sense" as analogy to "number sense". Flexibility in working with numbers, the ability to represent and manipulate them different ways, intuition about them, ability to estimate, etc.

* https://en.wikipedia.org/wiki/Number_sense
* http://mathsolutions.com/making-sense-of-math/number-sense/understanding-number-sense/

Consider the "Birthday Paradox," which is one of many examples frequently trotted out to show off how people don't have a good intuition for chance.

For some reason, people seem to have an intuition that if there are 20 people in the room, the chance that two people will have the same birthday is something like 20/365. In fact, this is the chance that at least one person will have a birthday on a given day.

Common way to break this problem down is to break things down by person: pick a person and find out what their birthday. Next person has a 364/365 chance of having a different birthday. Given that these were different, next person has a 363/365 chance of having a different birthday, etc.

An issue with this process is that it doesn't immediately lead to even an order of magnitude estimate for the final result.

Here are a couple other ways of reasoning:

1. Pick a day and ask what the probability is that 2 people have the same birthday on that day. Can estimate this using the Poisson distribution. Can then sum over days to estimate the expected number of days where 2 people share a birthday. If this number is small, it's approximately the chance that there will be any day that 2 people share a birthday. Not super accurate by the time we get to 20 people, but it's at least in the right ballpark for 2 people.

2. More accurate way: pick a day, and ask what the probability is that 0 or 1 people have a birthday on that day, which is again relatively simple with the Poisson distribution. Raise this to the 365 power, and the result is the chance that each day has 0 or 1 people with birthdays.

Can approximate this as <span>1-exp(-365*(20/365)^2/2)</span>, which is approximately <span>1/2*20^2/365</span>, which is suddenly a calculation we can get an order of magnitude approximation of.

Are there other good ways to split up the calculation? Do log-odds help us?

What problem do our approximate methods solve?

(Basically the problem that people flow into birthdays independently for a while until we have an expected number total number of them, without a *constraint* on the total number of them, and then we ask how many birthdays have two people in them.)

Advantage of this technique is that it gives us a handle on the fact that the solution goes as m^2/N, and we can probably pull out the factor of 1/n! from some clever counting argument too.

Maybe talk about splitting problems up inductively vs. by different variables.

"Chance sense," count number of favorable possibilities to total possibilities: poker playes and other gamblers do this all the time.
