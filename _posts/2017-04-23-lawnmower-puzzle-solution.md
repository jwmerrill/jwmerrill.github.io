---
layout: post
title: Lawnmower Puzzle Solution
---

I recently posted a [geometry puzzle](/2017/04/08/lawnmower-puzzle/) about an autonomous lawn mower steered by a rope and a peg. How much rope remains unspooled from the peg when the mower collides with it? If you haven't seen the puzzle yet, go check out [last week's post](/2017/04/08/lawnmower-puzzle/) and give it a try.

<figure class="mainfig">
  <a href="/2017/04/08/lawnmower-puzzle/"><img alt="Lawnmower puzzle" src="/img/lawnmower-puzzle/lawnmower-puzzle.png"
  style="width: 601px;"
  /></a>
</figure>

<!--more-->

I received two very nice (and satisfyingly different) solutions from Suzanne von Oy and Patrick Honner{%marginnote 'solutions' """Suzanne von Oy ([blog](https://vondesmos.wordpress.com/author/vondesmos/), [twitter](https://twitter.com/von_oy?lang=en)) and Patrick Honner ([blog](http://mrhonner.com/), [twitter](https://twitter.com/mrhonner?lang=en)) are both inspiring educators, and I'm honored that they took the time to submit solutions. You should check out their writing."""%}:

* [Suzanne von Oy's solution](/img/lawnmower-puzzle-solution/suzanne-von-oy-solution.jpg) ([graph](https://www.desmos.com/calculator/zjapg4plhe))
* [Patrick Honner's solution](/img/lawnmower-puzzle-solution/patrick-honner-solution.png) ([graph](https://www.desmos.com/calculator/rzcqmdjpvw))

I'll begin my solution by stating some assumptions and naming some quantities.

* The mower is a square with side length <span class="mathquill-embedded-latex">2m</span>
* The peg is a circe of radius <span class="mathquill-embedded-latex">r</span>
* The length of unspooled rope is <span class="mathquill-embedded-latex">l</span>
* The rope is attached to the mower at its center

<figure class="mainfig">
  <img alt="Lawnmower variable names" src="/img/lawnmower-puzzle-solution/lawnmower-variable-names.png"
  style="width: 497px;"
  />
</figure>

In the figure, I've also drawn in two right angles, and seeing these is a lot of the work of solving the problem.

* The rope is tangent to the peg at the point that they lose contact, and is therefore always perpendicular to the radius connecting the center of the peg to this point.
* The side of the mower is always perpendicular to the rope (because the wheels on the mower are perpendicular to the rope, and the sides are parallel to the wheels).

Together, these assumptions mean that the side of the mower (and also its midline) is parallel to the radius of the peg that passes through the loss-of-contact point, and from this observation, we'll just need to draw a couple of rectangles and write down the solution, more or less.

Once you've done enough problems like this, writing down these kinds of right angles starts to become habitual, and you don't really need to carefully justify to yourself why you're doing it every single time. But it's worth remembering that these right angle conditions are not trivial, and there are plenty of similar looking problems where they wouldn't be right!

Both of these right angles depend crucially on the fact that the rope is *under tension*.

The rope certainly can't penetrate the peg, so that eliminates half the directions it could conceivably take on at the loss-of-contact point, but a slack rope could leave at any angle that doesn't cause it to penetrate the peg. Under tension, however, the rope will spool or unspool itself until the loss of contact occurs at a point where the tangent direction to the peg is parallel to the tension. Because the peg is a circle (and only for this reason!), tangent directions to its perimiter are always perpendicular to radii through its center.

Similarly, if the rope weren't under tension, it could make any angle with the side of the mower. Just imagine pointing the mower directly toward the peg. It would happily head directly there, maybe running over and chewing up the slack rope on its way. So we have to start the mower off pointed in a direction that produces tension, and then the tension will steer the mower in a way that maintains the tension.

I can go on. We're effectively assuming the mower wheels roll without slipping. If you put the mower on very slick ice and gave it a push, it could wrap itself around the peg with its center following exactly the same trajectory but without ever changing the direction it's pointing (its attitude). And we're assuming that the rope has no thickness, and no stiffness (i.e. provides no resistance to a bending force).

Of course it isn't news that puzzles are about idealized models (so are scientific theories, by the way), and I'm belaboring the point just to say that if these right angles don't seem obvious to you, that's ok! They really do require some assumptions and justification, and the first time you wrestle with these arguments, you're in for a good long hard think.

These two right angle conditions hold over the mower's entire path. The additional condition of contact is that a point on the perimeter of the mower is coincident with a point on the perimeter of the peg, and the mower and peg don't penetrate one another.

It turns out that there are two cases that need to be treated separately, and that's a lot of what makes this problem tricky. Either the mower contacts the peg somewhere along the side of the mower, or it contacts the peg at its corner. The first case is simpler to analyze.


<h4>Side contact</h4>

<figure class="mainfig">
  <img alt="Lawnmower side contact" src="/img/lawnmower-puzzle-solution/lawnmower-side-contact.png"
  style="width: 482px;"
  />
</figure>

When the mower contacts the peg along its side, a square of side length <span class="mathquill-embedded-latex">r</span> is formed by four important points: the contact point of the mower with the peg, the center of the peg, the loss-of-contact point of the rope with the peg, and the point where the rope crosses the side of the mower. In this case, the length of unspooled rope at contact is then

<div class="display-latex">
  l = m + r
</div>

<h4>Corner contact</h4>

<figure class="mainfig">
  <img alt="Lawnmower corner contact" src="/img/lawnmower-puzzle-solution/lawnmower-corner-contact.png"
  style="width: 520px;"
  />
</figure>

When the mower contacts the peg at its corner, these same four points form a quadrilateral with 3 known sides, and two right angles.

In general, I might start trying to solve this quadrilateral by disecting it across opposite vertices to make two triangles and then solving the triangles, but the adjacent right angles make this problem simpler than the general case: we can instead divide the quadrilateral into a rectangle and a right triangle with two known sides, and then solve the right triangle using the Pythagorean theorem{%marginnote 'isoceles' """Patrick Honner took a different approach in [his solution](/img/lawnmower-puzzle-solution/patrick-honner-solution.png): he did divide the quadrilateral along opposite vertices, and then noticed a pair of similar isoceles triangles that also lead to a nice, simple way of solving the problem."""%}.

<figure class="mainfig">
  <img alt="Lawnmower quadrilateral solution" src="/img/lawnmower-puzzle-solution/lawnmower-quadrilateral-rectangle.png"
  style="width: 529px;"
  />
</figure>

The only unknown length here, which I'll call <span class="mathquill-embedded-latex">d</span>, is the length of unspooled rope between the loss-of-contact point and the point where the rope crosses the side of the mower. Applying the Pythagorean theorem gives

<div class="display-latex">
  d = \sqrt{r^2 - \left(r-m\right)^2}
</div>

and so the total length of the rope is

<div class="display-latex">
  l = d + m = \sqrt{r^2 - \left(r-m\right)^2} + m
</div>

The two solutions are equivalent when the diameter of the peg is equal to the width of the mower. Under this condition, the quadrilateral of the corner contact case becomes the square of the side contact case. When the peg is smaller than this, contact will occur along a side, and when the peg is larger than this, contact will occur at a corner.

So the full solution is then

<div class="display-latex">
  l =
    \begin{cases}
      r + m &amp; r \leq m \\
      \sqrt{r^2 - \left(r-m\right)^2} + m &amp; r \geq m
    \end{cases}
</div>

The corner contact case is really a little silly in this scenario. Your eyeball and intuition will probably tell you that the peg should be smaller than the mower to have a chance of allowing successive paths to be properly adjacent. And to be honest, when we first designed these animations, we missed the corner contact case completely.

We could have just set a lower limit on the peg size and been done with it (the thought crossed our mind), but in these activities, we generally prefer to show you the implications of going a little off the rails rather than steering you hard back onto them.

Anyway, if you took a crack at this problem, I hope you enjoyed thinking about it. I know that I did.

Bonus idea: what if the mower and the peg lived on the surface of a sphere instead of on the plane?
