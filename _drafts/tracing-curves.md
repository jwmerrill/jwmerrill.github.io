---
layout: post
title: Tracing Curves Well
css: tracing-curves
js: tracing-curves
---

Last October, I spent a few days trying to improve how it feels to trace a mathematical curve in [Desmos](https://www.desmos.com/) with a mouse or a finger. If you had asked me before I started working on the calculator whether this was a hard problem, I would have said "no way, just use the point on the curve that's directly above the mouse, or something like that." And that's how tracing had worked before last October. Here's how that feels:

<div id="example1" class="trace-example">
  <div id="example1-container1" class="trace-example-panel">
  </div>
  <div id="example1-container2" class="trace-example-panel">
  </div>
  <div id="example1-container3" class="trace-example-panel">
  </div>
</div>

<br style="clear: both;"/>

This strategy is pretty good in many cases. I think it's just fine for the sinusoid on the left. But it's a frustrating experience to try to trace very steep curves like the line in the middle, because the trace point can end up very far above or below your cursor even when your cursor is close to the curve. And if the curve is only defined over a finite domain, like the half ellipse on the right, then it's annoying that you can't trace the curve at all from outside the defined region. Try getting the trace point right to the edge of the half ellipse---it's harder than it should be.

<aside>
  Sometimes other people don't share your intuitions either. I suspect that's part of what makes it so difficult to write well.
</aside>

When an interface doesn't feel right, it's often because we have very deeply held intuitions about how it should work. It can be hard to put these feelings into words. I suspect this difficulty is part of what makes it so hard to solve some easy seeming interface problems. Computers don't share your intuitions. You have to figure out how to communicate with them very explicitly.

Minor irritations accumulate over time. After months of using trace that worked like that, I felt about ready to shout at my computer: "If my mouse is near the curve, then the trace point should be near my mouse!" Moments like this are important for software developers. Once you've decided exactly what to shout at your computer, you know what you need to try to implement next.

So what about just using the closest point to the cursor on the curve as the trace point? Here's how that feels:

<div id="example2" class="trace-example">
  <div id="example2-container1" class="trace-example-panel">
  </div>
  <div id="example2-container2" class="trace-example-panel">
  </div>
  <div id="example2-container3" class="trace-example-panel">
  </div>
</div>

<br style="clear: both;"/>

Pretty bad, right? The trace point has a habit of jumping between distant points along the curve. If you can put that aside for a moment, I think you'll agree that this is actually a nice improvement in the case of the steep line. Just as we asked, when your cursor is close to the curve, the trace point is close to your cursor. This is also an improvement when the cursor is to the left or the right of the edges of the half ellipse.

Let's add a little bit more information to the plots to show exactly what the problem is:

<div id="example3" class="trace-example">
  <div id="example3-container1" class="trace-example-panel">
  </div>
  <div id="example3-container2" class="trace-example-panel">
  </div>
  <div id="example3-container3" class="trace-example-panel">
  </div>
</div>

<br style="clear: both;"/>

<aside>
  You could imagine strategies that take, e.g., your cursor's velocity into account, and that might even be a good idea, but we've never felt the need to try that yet.
</aside>

In all the trace strategies I'm describing today, the location of the trace point is completely determined by the location of your cursor over the graph paper, so in the figures above, I've drawn guide lines between a grid of points on the graph paper and the trace point that they map to on the curve.

The problem with the closest-point strategy is that the location of the closest point on the curve is a discontinuous function of the location of your cursor. The lines from nearby grid points sometimes point to widely separated places on the curve. In the sinusoid, for example, this happens whenever the cursor is directly above or below a local maximum.

So what should we shout at the computer now? Maybe "the trace point shouldn't jump between distant points on the curve when I only move my mouse a little bit!"

There are many ways to try to enforce this condition, and I tried several of them. The best strategy that I've found so far is a weighted mixture of the point-above-cursor strategy and the closest-point strategy. I'll call it the weighted strategy.

The weighted strategy chooses the <span class="mathquill-embedded-latex">x</span> coordinate of the trace point as a weighted sum of the <span class="mathquill-embedded-latex">x</span> coordinate of the cursor, and the <span class="mathquill-embedded-latex">x</span> coordinate of the closest point on the curve:

<span class="mathquill-embedded-latex">x_\mathrm{trace} = w x_\mathrm{cursor} + (1 - w) x_\mathrm{closest}</span>

with <span class="mathquill-embedded-latex">w</span> a number between 0 and 1. <span class="mathquill-embedded-latex">x_\mathrm{cursor}</span> is (obviously) a continuous function of the cursor location if the curve is continuous, but <span class="mathquill-embedded-latex">x_\mathrm{closest}</span> is not. If we want <span class="mathquill-embedded-latex">x_\mathrm{trace}</span> to be a continuous function of the cursor location, we need to arrage for the weight of <span class="mathquill-embedded-latex">x_\mathrm{closest}</span>, i.e. <span class="mathquill-embedded-latex">(1 - w)</span>, to be 0 at the points where <span class="mathquill-embedded-latex">x_\mathrm{closest}</span> is discontinuous.

Discontinuous jumps in the location of the closest point happen when the distances from the cursor to two distant points on the curve becomes equal. To make <span class="mathquill-embedded-latex">x_\mathrm{trace}</span> continuous, we should ensure that whenever this condition occurs, <span class="mathquill-embedded-latex">w=1</span>. One way to do this is to choose

<span class="mathquill-embedded-latex">w = \left(\frac{d_2}{d_1}\right)^\alpha</span>

where <span class="mathquill-embedded-latex">d_1</span> and <span class="mathquill-embedded-latex">d_2</span> are the distance to the closest and second-closest points respectively, and <span class="mathquill-embedded-latex">\alpha</span> is an adjustable parameter. We only consider points that are local minima in the distance to the cursor, so points right next to the closest point don't count as the second-closest point. Actually, as a further refinement, I've found that it's best to consider only the closest local minimum to the left of the cursor and the closest local minimum to the right of the cursor.

Here's how the weighted strategy feels:

<label id="show-guides-label">
  <input type="checkbox" checked="checked" id="show-guides-checkbox"/>
  Show Guides
</label>

<div id="example4" class="trace-example">
  <div id="example4-container1" class="trace-example-panel">
  </div>
  <div id="example4-container2" class="trace-example-panel">
  </div>
  <div id="example4-container3" class="trace-example-panel">
  </div>
</div>

<br style="clear: both;"/>

<div id="exponent-scrubber-container">
  <div id="exponent-scrubber">
  </div>

  <span id="exponent-display" class="mathquill-embedded-latex"></span>
</div>

Try adjusting the exponent, <span class="mathquill-embedded-latex">\alpha</span>. What do you think the best value is?

The weighted strategy satisfies our two main desiderata:

1. When your cursor is close to the curve, the trace point should be close to your cursor.
2. Small movements of the cursor should not cause the trace point to jump discontinuously across the curve.

Its main weakness is that it relies on a distinction between x and y, so it doesn't extend easily from curves that are a function of x to parametric or implicit curves that may have multiple y values for a single x value. To put it technically, the strategy is not *isotropic*. Note that by itself, the closest-point strategy does not distinguish between the axes, and would work just as well (or really, just as poorly...) for parametric curves as for f(x) curves, so it's our reliance on the point-above-cursor strategy as part of the weighted strategy that spoils isotropy.

<aside>
  If this sounds like your kind of fun, <a href="https://www.desmos.com/careers">Desmos is hiring</a>.
</aside>

Before I started working on trace, I wouldn't have considered it an especially interesting or challenging problem. But it's trickier to get really right than it looks. If you're working on software that will be used by a lot of people, it's worth it to do what it takes to solve interface problems like this one really really well if a good solution will save every user a little bit of time, a little bit of frustration, or even (dare I dream?) help them [think better](http://worrydream.com/MediaForThinkingTheUnthinkable/).

<!--

Something about depending on distance to 2nd closest point, but not its location, because its location also changes discontinously with the cursor location.

I'm frequently surprised by the size of the gap between how easy it seems like it should be to solve some problem on a computer, and how hard it is to actually do it well. [Typesetting text and mathematics](https://en.wikipedia.org/wiki/TeX#Novel_aspects) is a hard problem that seems like it should be easy. So is efficiently [finding a decimal representation](http://www.serpentine.com/blog/2011/06/29/here-be-dragons-advances-in-problems-you-didnt-even-know-you-had/) of a standard binary floating point number. And the entire field of image recognition and image processing is way trickier than you would think it should be.

Even so, if you're working on software that will be used by a lot of people, it can be worth it to do what it takes to solve problems like these really really well if a good solution will save every user a little bit of time, or even help them [think better](http://worrydream.com/MediaForThinkingTheUnthinkable/).

I think it probably took us a while to go from having this idea to trying it, partly because we knew that it would be a lot more computationally expensive to find the closest point on a curve than it is to find a point with a given <span class="mathquill-embedded-latex">x</span> coordinate. This difference turned out to be completely irrelevant to UI responsiveness, and I learned yet again that you're better off just implementing something to see if it's fast enough than fretting about whether it might be slow.
-->