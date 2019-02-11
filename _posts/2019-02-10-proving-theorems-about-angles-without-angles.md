---
layout: post
title: Proving theorems about angles without angles
---

In several recent posts, I have been exploring a way of doing trigonometry using vectors and their various products while de-emphasizing angle measures and trigonometric functions.

In this system, triangles are represented as sets of three vectors that add to <span class="mathquill-embedded-latex">0</span>

<figure class="mainfig">
  <img alt="Triangle a b c" src="/img/proving-theorems-about-angles-without-angles/triangle-abc.png"
  style="width: 230px;"/>
</figure>

<div class="display-latex">
  a + b + c = 0
</div>


The traditional [law of cosines can be replaced](/2017/02/28/geometry-algebra-intuition/) with a vector equation that uses the dot product

<div class="display-latex">
  c^2 = a^2 + b^2 + 2 a\cdot b
</div>

the [law of sines can be replaced](/2018/11/19/algebraic-law-of-sines/) with a vector equation that uses the wedge product

<div class="display-latex">
  a \wedge b = b \wedge c = c \wedge a
</div>

and [rotations and reflections can be represented](/2019/01/07/relating-dot-wedge/) using geometric products of vectors. For vectors in the plane, the rotation of a vector <span class="mathquill-embedded-latex">v</span> through the angle between vectors <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span> can be represented by right multiplying by the product <span class="mathquill-embedded-latex">\hat{a}\hat{b}</span>{%marginnote 'notation' """Reminder on notation: in these posts, lower case latin letters like <span class=\"mathquill-embedded-latex\">a</span> and <span class=\"mathquill-embedded-latex\">b</span> represent vectors, greek letters like <span class=\"mathquill-embedded-latex\">\theta</span> and <span class=\"mathquill-embedded-latex\">\phi</span> represent real numbers such as lengths or angles, and <span class=\"mathquill-embedded-latex\">\hat{a}</span> represents a unit vector directed along <span class=\"mathquill-embedded-latex\">a</span>, so that <span class=\"mathquill-embedded-latex\">\hat{a}^2=1</span> and <span class=\"mathquill-embedded-latex\">\hat{a} \wedge a = 0</span>. Juxtaposition of vectors represents their geometric product, so that <span class=\"mathquill-embedded-latex\">ab</span> is the geometric product between vectors <span class=\"mathquill-embedded-latex\">a</span> and <span class=\"mathquill-embedded-latex\">b</span>, and the geometric product is non-commutative, so the order of terms is important."""%}

<div class="display-latex">
v_\mathrm{rot.} = v \hat{a}\hat{b}
</div>

and the reflection of <span class="mathquill-embedded-latex">v</span> in any vector <span class="mathquill-embedded-latex">c</span> can be represented as the "sandwich product"

<div class="display-latex">
v_\mathrm{refl.} = c v c^{-1} = \hat{c} v \hat{c}
</div>

Notice that none of these formulae make direct reference to any angle measures.

But without angle measures, won't it be hard to state and prove theorems that are explicitly about angles?

Not really. Relationships between directions that can be represented by addition and subtraction of angle measures can be represented just as well using products and ratios of vectors with the geometric product. And the geometric product is better at representing reflections, which can sometimes provide fresh insights into familiar topics.

We'll take as our example the *inscribed angle theorem*, because it is one of the simplest theorems about angles that doesn't seem intuitively obvious (at least, it doesn't seem obvious to me...).

<!--more-->

The inscribed angle theorem says that every angle inscribed on a circle that subtends the same arc has the same angle measure{%marginnote 'inscribed-terminology' """Terminology: an *inscribed angle* of a circle is an interior angle of a triangle with 3 vertices lying on the circle's circumference. Roughly speaking, an angle at a point *subtends* the things that you could see from the point if your field of view was limited to the given angle. In the figure, the blue inscribed angles all subtend the same purple arc."""%}

<figure class="mainfig">
  <img alt="A set of equal angles inscribed in a cirlce that subtend the same arc" src="/img/proving-theorems-about-angles-without-angles/equal-inscribed-angles.png"
  style="width: 285px;"/>
</figure>

and that a central angle that subtends the same arc as an inscribed angle has twice the angle measure as the inscribed angle:

<figure class="mainfig">
  <img alt="The central angle that subtends the same arc of a circle as an inscribed angle has twice the angle measure" src="/img/proving-theorems-about-angles-without-angles/half-central-angle.png"
  style="width: 291px;"/>
</figure>

Let's first go over a traditional proof of the inscribed angle theorem to gain some familiarity. The key is to draw in one more radius of the circle to form a pair of isosceles triangles that share a leg{%marginnote 'isosceles-terminology' """<img alt=\"Isosceles terminology\" src=\"/img/proving-theorems-about-angles-without-angles/isosceles-terminology.png\"
  style=\"width: 300px; margin: auto;\"/><br />Terminology: an *isosceles* triangle is a triangle with two sides of equal length. The two equal length sides are called *legs* and the third side is called the *base*. The legs meet at the *vertex* and the interior angle at the vertex is the *vertex angle*. The interior angles formed by the base and each leg are the *base angles*."""%}:

<figure class="mainfig">
  <img alt="Drawing a third radius vector helps prove the inscribed angle theorem" src="/img/proving-theorems-about-angles-without-angles/additional-radius.png"
  style="width: 295px;"/>
</figure>

The two base angles of an isosceles triangle are equal, so we can label angles on the figure as follows:

<figure class="mainfig">
  <img alt="Labeled angles for proving the inscribed angle theorem" src="/img/proving-theorems-about-angles-without-angles/labeled-angles.png"
  style="width: 285px;"/>
</figure>

where <span class="mathquill-embedded-latex">\phi_1</span> and <span class="mathquill-embedded-latex">\phi_2</span> are base angles of two equilateral triangles, their sum, <span class="mathquill-embedded-latex">\phi_1 + \phi_2</span>, is an inscribed angle on the circle, <span class="mathquill-embedded-latex">\theta_1</span> and <span class="mathquill-embedded-latex">\theta_2</span> are vertex angles of the isosceles triangles and also central angles of the circle, and <span class="mathquill-embedded-latex">\theta_3</span> is the central angle that subtends the same arc as the inscribed angle <span class="mathquill-embedded-latex">\phi_1 + \phi_2.</span>

The three central angles add up to a full turn

<div class="display-latex">
  \theta_1 + \theta_2 + \theta_3 = 2 \pi
</div>

and the interior angles of the triangles each add up to a half turn (because interior angles of a triangle always add up to a half turn, or <span class="mathquill-embedded-latex">180</span> degrees)

<div class="display-latex">
\begin{aligned}
  \theta_1 + 2\phi_1 &= \pi \\
  \theta_2 + 2\phi_2 &= \pi
\end{aligned}
</div>

Adding the previous two expressions and re-arranging gives

<div class="display-latex">
2(\phi_1 + \phi_2) = 2 \pi - (\theta_1 + \theta_2)
</div>

and recognizing that the right hand side is equal to <span class="mathquill-embedded-latex">\theta_3</span> gives

<div class="display-latex">
  2(\phi_1 + \phi_2) = \theta_3
</div>

This proves the theorem{%marginnote 'angle-ambiguity' """Technically, this only proves the second part of the theorem. See [Appendix A](#appendix-a)."""%} because the left hand side is twice the inscribed angle, and the right hand side is the corresponding central angle.

This proof depended on the theorem that the base angles of an isosceles triangle are equal. Do you remember how to prove this?

Here's one way: drop a median from the vertex to the midpoint of the base:

<figure class="mainfig">
  <img alt="A median from the vertex of an isosceles triangle to the midpoint of the base" src="/img/proving-theorems-about-angles-without-angles/equilateral-median.png"
  style="width: 314px;"/>
</figure>

This produces two triangles that are congruent because they have three equal sides, and the base angles are corresponding angles in these congruent triangles, so they are equal.

Do you remember why triangles with equal sets of side lengths are congruent? I find that it's pretty easy to memorize facts like this but forget exactly why they must be true{%marginnote 'euclid' """If you want to remember how Euclid did all these things, Nicholas Rougeux has published a gorgeous new [online edition of Byrne's Euclid](https://www.c82.net/euclid/). The distinctive feature of Byrne's Euclid, originally published in 1847, is that it uses small color-coded pictograms throughout the text to reference diagrams instead of letters, which gives it an appealing concreteness.<br /><br />Euclid actually proves that the base angles of an isosceles triangle are equal ([proposition V](https://www.c82.net/euclid/book1/#prop5)) a different way without referencing the theorem that triangles with equal sides are congruent, and then later uses this theorem as part of the proof that triangles with equal sides are congruent ([proposition VII](https://www.c82.net/euclid/book1/#prop7) and [proposition VIII](https://www.c82.net/euclid/book1/#prop8))."""%}.

Geometric algebra provides an interesting algebraic way to prove that the base angles of an isosceles triangle are equal, embedded as a special case of an equation that is true for all triangles. As usual, we begin with the condition that three vectors form a triangle

<figure class="mainfig">
  <img alt="Triangle a b c" src="/img/proving-theorems-about-angles-without-angles/triangle-abc.png"
  style="width: 230px;"/>
</figure>

<div class="display-latex">
  a + b + c = 0
</div>

Left multiplying the triangle equation by <span class="mathquill-embedded-latex">a</span> gives

<div class="display-latex">
  a^2 + ab + ac = 0
</div>

and alternatively, right multiplying by <span class="mathquill-embedded-latex">b</span> gives

<div class="display-latex">
  ab + b^2 + cb = 0
</div>

Subtracting these two equations gives

<div class="display-latex">
  \left(a^2 - b^2\right) + (ac - cb) = 0
</div>

and in the special case that the lengths of <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span> are equal so that the triangle is isosceles, the first term vanishes leaving

<div class="display-latex">
  ac = cb
</div>

Dividing by <span class="mathquill-embedded-latex">|a||c| = |b||c|</span> gives

<div class="display-latex">
\frac{a}{|a|}\frac{c}{|c|} = \frac{c}{|c|}\frac{b}{|b|}
</div>

or

<div class="display-latex">
  \hat{a}\hat{c} = \hat{c}\hat{b}
</div>

which is an equation for the equal rotations through the equal base angles, represented as products of unit vectors{%marginnote 'interior-vs-exterior' """<span class=\"mathquill-embedded-latex\">\hat{a}\hat{c}</span> and <span class=\"mathquill-embedded-latex\">\hat{c}\hat{b}</span> represent plane rotations through exterior angles; the corresponding interior angle rotations are <span class=\"mathquill-embedded-latex\">-\hat{a}\hat{c}</span> and <span class=\"mathquill-embedded-latex\">-\hat{c}\hat{b}</span>."""%}.

The equation

<div class="display-latex">
  ac = cb
</div>

also allows solving for <span class="mathquill-embedded-latex">a</span> in terms of <span class="mathquill-embedded-latex">b</span> and <span class="mathquill-embedded-latex">c</span> by multiplying on the right by <span class="mathquill-embedded-latex">c^{-1}</span>{%marginnote 'ga-solving' """The ability to solve equations of products of vectors like this is one of the special advantages of geometric algebra."""%},

<div class="display-latex">
  a = cbc^{-1}
</div>

The right hand side is the [sandwich product representation of the reflection](/2019/01/07/relating-dot-wedge/#rotation-reflection-projection-rejection) of <span class="mathquill-embedded-latex">b</span> in <span class="mathquill-embedded-latex">c</span>, so in words, this equation says that reflecting one of the leg vectors of an isosceles triangle across the base vector gives the remaining leg vector{%marginnote 'vector-equality' """Recall that equality of vectors implies they have the same length and direction, but implies nothing about location; vectors are not considered to have a location, and may be freely translated without change."""%}. This is a fact about isosceles triangles that I had not considered until doing this manipulation.

<figure class="mainfig">
  <img alt="The reflection of a leg vector of an isosceles triangle across the base is equal to the other leg vector" src="/img/proving-theorems-about-angles-without-angles/equilateral-leg-reflection.png"
  style="width: 328px;"/>
</figure>

With this preparation, we are ready to prove the inscribed angle theorem using geometric algebra.

<figure class="mainfig">
  <img alt="Labeld vectors representing chords and radii of a circle" src="/img/proving-theorems-about-angles-without-angles/labeled-vectors.png"
  style="width: 299px;"/>
</figure>

Call chord vectors through a point on the circumference of a circle <span class="mathquill-embedded-latex">c_1</span> and <span class="mathquill-embedded-latex">c_2</span>, radius vectors subtending the corresponding central angle <span class="mathquill-embedded-latex">r_1</span> and <span class="mathquill-embedded-latex">r_2</span>, and the radius vector from the circle's center to the shared point of the two chords <span class="mathquill-embedded-latex">r_3</span>.

Then the plane rotation through the central angle is

<div class="display-latex">
  \hat{r}_1 \hat{r}_2
</div>

and we're seeking a relationship between this rotation and the plane rotation through the inscribed angle,

<div class="display-latex">
  \hat{c}_1 \hat{c}_2
</div>

<figure class="mainfig">
  <img alt="Labeled unit vectors along chords and radii of a circle" src="/img/proving-theorems-about-angles-without-angles/labeled-unit-vectors.png"
  style="width: 300px;"/>
</figure>

We can summarize the geometrical content of these diagrams algebraically with two triangle equations and an equation expressing the equal lengths of the radius vectors{%marginnote 'missing-information' """There's actually one other important piece of geometric information that isn't spelled out in the algebra here. I'll come back to this below."""%}:

<div class="display-latex">
\begin{aligned}
c_1 - r_1 + r_3 &= 0 \\
c_2 - r_2 + r_3 &= 0 \\
r_1^2 = r_2^2 &= r_3^2
\end{aligned}
</div>

We can take the first triangle equation and perform a similar manipulation as we did above: left multiply by <span class="mathquill-embedded-latex">-r_1</span>, separately right multiply by <span class="mathquill-embedded-latex">r_3</span>, and subtract the two results to give

<div class="display-latex">
\left(r_1^2 - r_3^2\right) - (r_1 c_1 + c_1 r_3) = 0
</div>

The first term is zero because the lengths of <span class="mathquill-embedded-latex">r_1</span> and <span class="mathquill-embedded-latex">r_3</span> are equal, so this becomes

<div class="display-latex">
 r_1 c_1 = - c_1 r_3
</div>

or

<div class="display-latex">
 r_1 = - c_1 r_3 c_1^{-1}
</div>

and in terms of unit vectors this is

<div class="display-latex">
  \hat{r}_1 = - \hat{c}_1 \hat{r}_3 \hat{c}_1
</div>

Similar reasoning for the second triangle gives

<div class="display-latex">
  \hat{r}_2 = - \hat{c}_2 \hat{r}_3 \hat{c}_2
</div>

Making these substitutions in the central angle product <span class="mathquill-embedded-latex">\hat{r}_1\hat{r}_2</span> gives

<div class="display-latex">
\begin{aligned}
  \hat{r}_1 \hat{r}_2 &= (- \hat{c}_1 \hat{r}_3 \hat{c}_1) (- \hat{c}_2 \hat{r}_3 \hat{c}_2) \\
  &= \hat{c}_1 (\hat{r}_3 \hat{c}_1 \hat{c}_2) \hat{r}_3 \hat{c}_2 \\
  &= \hat{c}_1 (\hat{c}_2 \hat{c}_1 \hat{r}_3) \hat{r}_3 \hat{c}_2 \\
  &= \hat{c}_1 \hat{c}_2 \hat{c}_1 \hat{c}_2 \\
  &= (\hat{c}_1 \hat{c}_2)^2
\end{aligned}
</div>

and the final line represents applying the rotation through the inscribed angle twice, which proves the inscribed angle theorem{%marginnote 'angle-ambiguity' """Again, technically, this only proves the second part of the theorem. See [Appendix A](#appendix-a)."""%}.

Let's go through this manipulation line by line

1. Substitute for <span class="mathquill-embedded-latex">\hat{r}_1</span> and <span class="mathquill-embedded-latex">\hat{r}_2</span> based on the fact that they are part of isosceles triangles that share a leg. The two negative signs will cancel one another.
2. Re-associate the geometric product. The geometric product is associative, so the parentheses here serve only as a guide to the eye.
3. Use the [planarity condition](/2019/01/07/relating-dot-wedge/#planarity){%marginnote 'planarity' """This planarity condition is the \"missing algebraic information\" that I referred to above. On my first pass through this problem, it took me a while to connect this need to re-order three vectors to the fact that they lie in a single plane. In the plane, there is only one point that is equidistant from three given points, but in more dimensions there are more points that satisfy this condition. *Consider:* what does this set of points look like in 3D?"""%}, which says that the geometric product of any three vectors in the same plane equals its reverse, to reverse the parenthesized product of three vectors.
4. Re-associate and use the fact that <span class="mathquill-embedded-latex">\hat{r}_3</span> is a unit vector, so <span class="mathquill-embedded-latex">\hat{r}_3^2 = 1.</span>
5. Collect identical products as a square.

The geometric product allowed us to exploit relationships between reflections and rotations that I typically wouldn't think to see directly on a diagram, allowing the proof to be particularly concise.

Alternatively, it's possible to mimic the original angle calculation a little more directly. Where we previously added internal angles of the triangles, we can instead multiply rotations to compose them:

<figure class="mainfig">
  <img alt="Labeled unit vectors along chords and radii of a circle" src="/img/proving-theorems-about-angles-without-angles/labeled-unit-vectors.png"
  style="width: 300px;"/>
</figure>

<div class="display-latex">
\begin{aligned}
  (\hat{r}_1 \hat{c}_1)(\hat{c}_1 \hat{r}_3)(\hat{r}_3 \hat{r}_1) &= 1 \\
  (\hat{r}_2 \hat{r}_3)(\hat{r}_3 \hat{c}_2)(\hat{c}_2 \hat{r}_2) &= 1
\end{aligned}
</div>

Interpreting these rotations as internal or external angles requires a little bit of care about signs, but algebraically, the equations are true almost trivially by re-associating and canceling squares of unit vectors.

Next, we can apply equality of base angles by replacing <span class="mathquill-embedded-latex">\hat{r}_1\hat{c}_1</span> with <span class="mathquill-embedded-latex">-\hat{c}_1\hat{r}_3</span> and <span class="mathquill-embedded-latex">\hat{c}_2\hat{r}_2</span> with <span class="mathquill-embedded-latex">-\hat{r}_3\hat{c}_2</span>:

<div class="display-latex">
\begin{aligned}
  -(\hat{c}_1 \hat{r}_3)^2(\hat{r}_3 \hat{r}_1) &= 1 \\
  -(\hat{r}_2 \hat{r}_3)(\hat{r}_3 \hat{c}_2)^2 &= 1
\end{aligned}
</div>

In place of summing the equations for interior angles of two triangles, we can multiply these equations for compositions of rotations:

<div class="display-latex">
  (\hat{c}_1 \hat{r}_3)^2(\hat{r}_3 \hat{r}_1)(\hat{r}_2 \hat{r}_3)(\hat{r}_3 \hat{c}_2)^2 = 1
</div>

Products of pairs of vectors in the plane commute (in other words, rotations in the plane commute), so we can rearrange this in order to pair and cancel factors of <span class="mathquill-embedded-latex">\hat{r}_3</span>

<div class="display-latex">
\begin{aligned}
  1 &= (\hat{r}_2 \hat{r}_3)(\hat{r}_3 \hat{r}_1)(\hat{c}_1 \hat{r}_3)(\hat{r}_3 \hat{c}_2)(\hat{c}_1 \hat{r}_3)(\hat{r}_3 \hat{c}_2) \\
    &= \hat{r}_2 \hat{r}_1 \hat{c}_1 \hat{c}_2 \hat{c}_1 \hat{c}_2
\end{aligned}
</div>

Now left multiplying by <span class="mathquill-embedded-latex">\hat{r}_1\hat{r}_2</span> gives the desired result:

<div class="display-latex">
  \hat{r}_1 \hat{r}_2 = (\hat{c}_1 \hat{c}_2)^2
</div>

### Conclusion

It has become customary in elementary geometry to identify relationships between directions with relationships between angles, and to identify angles with numerical angle measures. But this is not strictly necessary{%marginnote 'greek-angles' """In classical Greek geometry, lengths and angles actually weren't identified with numbers, likely at least in part due to the fact that lengths are often irrational and angles are often transcendental. Instead, length, angle, and number were treated as separate concepts with some similar relationships."""%}, and in this post, I have shown an example of how the same relationships between directions can instead be modeled by products and ratios of vectors without direct reference to numerical angle measures.

The vector approach has the advantage that the condition that three vectors form a triangle is very simple to write down,

<div class="display-latex">
  a + b + c = 0
</div>

whereas the condition that three lengths and three angles describe a triangle is somewhat more complicated, and is not typically written down in full.

This linear vector equation for a triangle makes it straightforward to derive classical relationships between lengths and angles in a triangle, which typically appear as quadratic equations in the vectors. These manipulations can usually be described in a phrase or two:

* [Law of cosines](/2017/02/28/geometry-algebra-intuition/): solve for c, square both sides
* [Law of sines](/2018/11/19/algebraic-law-of-sines/): form the wedge product of the triangle equation with one of the vectors, solve for one of the two remaining terms
* Equal isosceles base angles (shown in this post): multiply on the left by one of the vectors and alternatively on the right by a different vector and subtract the two results; then two equal lengths imply two equal angles

An advantage of the vector model is that the relevant equations are algebraic in the vectors and their products, whereas they are transcendental in angle measures. So for example, the law of cosines in terms of angles,

<div class="display-latex">
  c^2 = a^2 + b^2 - 2|a||b|\cos(\theta)
</div>

is transcendental in the angle <span class="mathquill-embedded-latex">\theta</span>, whereas the vector equation

<div class="display-latex">
  c^2 = a^2 + b^2 + ab + ba
</div>

is algebraic in the corresponding vector product <span class="mathquill-embedded-latex">ab</span>.

The catch, of course, is that these quadratic equations involve non-commutative products, and there is a definite learning curve to becoming comfortable with this. But in my experience, the effort is repaid along the way through the insight you gain from viewing familiar things from an unfamiliar perspective.

Thanks as usual to Jaime George for editing this post.

<h3 id="appendix-a">Appendix A</h3>
#### Being careful about what we have proved

Technically, we have only proved the second part of the inscribed angle theorem: a central angle that subtends the same arc as an inscribed angle is equal to the inscribed angle composed with itself:

<figure class="mainfig">
  <img alt="The central angle that subtends the same arc of a circle as an inscribed angle has twice the angle measure" src="/img/proving-theorems-about-angles-without-angles/half-central-angle.png"
  style="width: 291px;"/>
</figure>

which seems like it would imply the first part of the inscribed angle theorem, that all inscribed angles that subtend the same arc are equal,

<figure class="mainfig">
  <img alt="Inscribed angles on a circle that subtend the same arc have the same angle measure" src="/img/proving-theorems-about-angles-without-angles/equal-inscribed-angles.png"
  style="width: 285px;"/>
</figure>

but actually doesn't. The technicality is that we have proved that the squares of the rotations through these inscribed angles are equal, but this leaves an ambiguity about the sign{%marginnote 'angle-ambiguity' """Equating doubled angle measures has exactly the same ambiguity as equating the squares of rotations, though the ambiguity is perhaps easier to overlook at first glance."""%}:

<div class="display-latex">
\begin{aligned}
  \left(\hat{c}_3\hat{c}_4\right)^2 &= \left(\hat{c}_1\hat{c}_2\right)^2 \\
  \hat{c}_3\hat{c}_4 &= \pm \hat{c}_1\hat{c}_2
\end{aligned}
</div>

And in fact there are different inscribed angles that subtend different (but closely related) arcs that satisfy all the algebraic rules we wrote down (including planarity), but that do not describe equal rotations:

<figure class="mainfig">
  <img alt="An an inscribed angle on a circle that subtends the same chord but not the same arc as several other inscribed angles does not have the same angle measure" src="/img/proving-theorems-about-angles-without-angles/unequal-inscribed-angles.png"
  style="width: 288px;"/>
</figure>

The unequal inscribed angle here subtends an equal chord but opposite arc as the other equal inscribed angles. The relationship between these angles is exactly the same as the relationship between interior and exterior angles, and equating squares of rotations (or doubled angle measures) leaves this distinction ambiguous.

I will sketch a way to distinguish these cases and prove the full theorem, without going into full detail.

If <span class="mathquill-embedded-latex">c_1</span> and <span class="mathquill-embedded-latex">c_2</span> are vectors from two points on a line to a given point not on the line, then the sign of the unit bivector

<div class="display-latex">
  \frac{\hat{c}_1 \wedge \hat{c}_2}{|\hat{c}_1 \wedge \hat{c}_2|}
</div>

determines which side of the line the given point is on. Given equal squares of products of vectors,

<div class="display-latex">
  (c_1 c_2)^2 = (c_3 c_4)^2
</div>

then the products are equal if the corresponding unit bivectors are equal

<div class="display-latex">
  \frac{\hat{c}_1 \wedge \hat{c}_2}{|\hat{c}_1 \wedge \hat{c}_2|} = \frac{\hat{c}_3 \wedge \hat{c}_4}{|\hat{c}_3 \wedge \hat{c}_4|}
</div>

and otherwise the products differ by a sign.

Then inscribed angles that subtend equal chords of a circle are equal when they lie on the same side of the subtended chord, or equivalently, when they also subtend the same arc.

### Appendix B
#### A path not taken

I have to admit that my first attempt to analyze the inscribed angle theorem with vectors went down an unproductive path. I knew I wanted a relationship between a product of radius vectors <span class="mathquill-embedded-latex">r_1 r_2</span> and chord vectors <span class="mathquill-embedded-latex">c_1 c_2</span>, and I had the triangle equations

<div class="display-latex">
\begin{aligned}
c_1 - r_1 + r_3 &= 0 \\
c_2 - r_2 + r_3 &= 0
\end{aligned}
</div>

so my first instinct was to solve the triangle equations for <span class="mathquill-embedded-latex">r_1</span> and <span class="mathquill-embedded-latex">r_2</span>, substitute into the product <span class="mathquill-embedded-latex">r_1 r_2</span>, and expand:

<div class="display-latex">
\begin{aligned}
  r_1 r_2 &= (c_1 + r_3)(c_2 + r_3) \\
  &= c_1 c_2 + r_3 c_2 + c_1 r_3 + r_3^2
\end{aligned}
</div>

There's nothing wrong with the algebra here, but it just isn't very productive. We now have a sum of 4 terms that is hard to interpret geometrically. Since the right hand side that we're seeking, <span class="mathquill-embedded-latex">(c_1 c_2)^2</span>, is a monomial, we would have to eventually factor the sum on the right hand side, and factoring is difficult---especially when dealing with multiple non-commuting variables as we are here.

This mis-step is worth discussing because it is an example of a pattern that turns out to be pretty common when using geometric algebra to analyze geometry problems. When presented with a product of sums, it is a natural instinct to try expanding into a sum of products. This is sometimes productive, but it introduces a few issues:

* It is often harder to interpret a sum of many different products geometrically than it is to interpret a single product
* Expanding products can rapidly (exponentially) increase the total number of terms
* Simplifying sums of products often requires factoring, and factoring is hard

For this reason, a useful heuristic is to prefer using commutation relationships (e.g. between parallel or perpendicular vectors, or between vectors that all lie in a single plane) to re-arrange a geometric product. When it works, this is better than expanding products, hoping that some terms will cancel, and then attempting to factor the result. When it is necessary to expand a product, it can be useful to expand as few terms as possible and then try to factor again before further expansions in preference to expanding the entire product at once{%marginnote 'li-breefs' """Hongbo Li elaborates this idea extensively in his [book](https://www.amazon.com/Invariant-Algebras-Geometric-Reasoning-Hongbo/dp/9812708081). For a briefer introduction, see this [paper](https://arxiv.org/abs/math/0701762) or these [tutorial slides](http://www.issac-conference.org/2017/assets/tutorial_slides/Li.pdf)."""%}.
