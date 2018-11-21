---
layout: post
title: An algebraic approach to the law of sines
---


A visual way of expressing that three vectors, <span class="mathquill-embedded-latex">a</span>, <span class="mathquill-embedded-latex">b</span>, and <span class="mathquill-embedded-latex">c</span>, form a triangle is

<figure class="mainfig">
  <img alt="A triangle with sides a, b, and c." src="/img/algebraic-law-of-sines/triangle.png"
  style="width: 234px;"/>
</figure>

and an algebraic way is

<div class="display-latex">
  a + b + c = 0
</div>

In a [previous post](/2017/02/28/geometry-algebra-intuition/), I showed how to generate the law of cosines from this vector equation---solve for c and square both sides---and that this simplifies to the Pythagorean theorem when two of the vectors are perpendicular.

In this post, I'll show a similarly simple algebraic route to the law of sines.

In understanding the law of cosines, the dot product of two vectors, <span class="mathquill-embedded-latex">a \cdot b</span>, played an important role. In understanding the law of sines, the wedge product of two vectors, <span class="mathquill-embedded-latex">a \wedge b</span>, will play a similarly important role.

<!--more-->

### Properties of the wedge product

Let's review what the wedge product is, since it's probably less familiar than the dot product. Geometrically, the wedge product of two vectors represents the area of the parallelogram spanned by the two vectors{%marginnote 'dot-product-relationship' """There is a similar interpretation of the dot product as the area of a parallelogram discussed in [Geometry, Algebra, and Intuition](/2017/02/28/geometry-algebra-intuition/): instead of forming a parallelogram from the two vectors directly, the parallelogram is formed from one of the vectors and a copy of the other rotated 90 degrees. I'll say more about the connection between these products another time."""%}:

<figure class="mainfig">
  <img alt="Wedge product of a and b represented as a parallelogram" src="/img/algebraic-law-of-sines/wedge.png"
  style="width: 266px;"/>
</figure>

Mathematically, the wedge product is a function that takes two vectors and produces a new kind of object called a bivector. Similarly to how a vector represents a magnitude and a direction, a bivector represents the size of an area and its direction{%marginnote 'direction' """In one dimension, there are only two directions that a vector can have: positive or negative. In more dimensions, there are more possible directions. Similarly, in two dimensions, there are only two directions a bivector can have: positive or negative. In more dimensions, there are again more possible directions."""%}. The wedge product is defined (more-or-less uniquely) as a product between vectors that is anti-commutative, linear, and associative. Let's go over these properties one by one.

#### Anti-commutative:
Algebraically, anti-commutativity means
<div class="display-latex">a \wedge b = - b \wedge a</div>

and in a picture, it is
<figure class="mainfig">
  <img alt="Parellelograms representing a wedge b and b wedge a have opposite area." src="/img/algebraic-law-of-sines/signed-area.png"
  style="width: 567px;"/>
</figure>

A plane region traversed clockwise is considered to have opposite directed area as the same region traversed counter-clockwise. The concept of negative area is useful for similar reasons that negative numbers are useful: the difference of two areas can continue to be represented geometrically even if the second area is bigger than the first{%marginnote 'euclidean-geometry-orientation' """In my opinion, the missing concept of sign/orientation for edges, areas, and angles is one of the biggest deficiencies of classical Greek Euclidean geometry. It leads to more special cases in theorems, like having to consider acute and obtuse angles separately in the [inscribed angle theorem](https://en.wikipedia.org/wiki/Inscribed_angle)."""%}.

Consider the incoming and outgoing edges at each vertex in the diagram above, starting from the bottom right vertex of the <span class="mathquill-embedded-latex">a \wedge b</span> parallelogram. If the wedge product at each vertex is to be consistent, we must have

<div class="display-latex">a \wedge b = b \wedge (-a) = (-a) \wedge (-b) = (-b) \wedge a</div>

If we're allowed to pull the minus signs out in front of these products (and the next property says that we are), these equalities imply anti-commutativity.

Anti-commutativity also implies that any vector wedged with itself is <span class="mathquill-embedded-latex">0</span>, and the parallelogram area interpretation supports this:

<div class="display-latex">
  a \wedge a = - a \wedge a = 0
</div>

#### Linear and distributive
Vectors can be added together to make new vectors, and the area of parallelograms spanned by vectors adds consistently with vector addition{%marginnote 'not-3D' """Arrangements of parallelograms like this one often look like they're depicting something in 3D, but all of the diagrams in this post are 2D diagrams. This diagram does also happen to work in 3D as long as you use the right interpretation of what it means to add areas in different planes (i.e. as long as you use directed areas represented as bivectors)."""%}.

<div class="display-latex">(u + v ) \wedge w = u \wedge w + v \wedge w</div>

<figure class="mainfig">
  <img alt="Distributivity of the wedge product" src="/img/algebraic-law-of-sines/wedge-product-distributivity.png"
  style="width: 589px;"/>
</figure>

Geometrically, this can be understood by dissection: cut a triangle from one edge of a parallelogram and glue it to the opposite edge. The resulting figure is the union of two parallelograms with the same total area.

Vectors can also be scaled, and the area of parallelograms spanned by vectors scales consistently{%marginnote 'letter-conventions' """Here and everywhere in the post I'm using the convention that greek letters like <span class=\"mathquill-embedded-latex\">\\alpha</span> and <span class=\"mathquill-embedded-latex\">\\beta</span> represent scalars (real numbers), and lower case roman letters like <span class=\"mathquill-embedded-latex\">a</span>, <span class=\"mathquill-embedded-latex\">b</span>, <span class=\"mathquill-embedded-latex\">c</span>, <span class=\"mathquill-embedded-latex\">u</span>, <span class=\"mathquill-embedded-latex\">v</span> and <span class=\"mathquill-embedded-latex\">w</span> represent vectors."""%}.

<div class="display-latex">(\alpha u) \wedge (\beta v) = \alpha \beta  (u \wedge v)</div>

#### Associative

Wedging three vectors together represents the (directed) volume of the parallelepiped that they span, and associativity means that the order that we combine the vectors doesn't matter:

<div class="display-latex">(u \wedge v) \wedge w = u \wedge (v \wedge w)</div>

When you wedge <span class="mathquill-embedded-latex">k</span> different vectors together, the result is an object called a k-vector that represents a k-dimensional volume. Just as vectors represent the size and direction of a linear region, and bivectors represent the size and direction of a plane region, k-vectors represent the size and direction of a k-dimensional region.

In the remainder of this post, we'll only consider vectors in the plane. Three vectors in the same plane can't span any volume, and so their wedge product must be <span class="mathquill-embedded-latex">0</span>. This means we won't make any use of associativity here. But it's nice to know that the wedge product works consistently in any number of dimensions.

#### Relationship to lengths and angles

If you know the lengths, <span class="mathquill-embedded-latex">|a|</span> and <span class="mathquill-embedded-latex">|b|</span>, of two vectors <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span> and the angle between them, <span class="mathquill-embedded-latex">\theta_{ab}</span>, you can compute the wedge product of the vectors:

<div class="display-latex">
  a \wedge b = |a| |b| \sin(\theta_{ab}) I
</div>

where <span class="mathquill-embedded-latex">I</span> represents a unit plane segment. You can think of <span class="mathquill-embedded-latex">I</span> as a square spanned by two perpendicular unit vectors, <span class="mathquill-embedded-latex">e_1</span> and <span class="mathquill-embedded-latex">e_2</span>, in the same plane as <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span>: <span class="mathquill-embedded-latex">I=e_1\wedge e_2</span>.

<figure class="mainfig">
  <img alt="Orthogonal unit vectors span a unit area." src="/img//algebraic-law-of-sines/unit-vectors.png"
  style="width: 410px;"/>
</figure>

In terms of triangles, the angle between two vectors, <span class="mathquill-embedded-latex">\theta_{ab}</span>, is an exterior angle. In classical trigonometry, it's more common to consider interior angles. But the <span class="mathquill-embedded-latex">\sin</span> of an exterior angle and the <span class="mathquill-embedded-latex">\sin</span> of the corresponding interior angle are equal, so for the wedge product, the distinction isn't so important. Here's the relationship.

<figure class="mainfig">
  <img alt="Wedge product of a and b represented as a parallelogram" src="/img/algebraic-law-of-sines/interior-exterior-angles.png"
  style="width: 424px;"/>
</figure>

Since <span class="mathquill-embedded-latex">\sin \theta_{ab} = \sin C</span>

<div class="display-latex">
  \begin{aligned}
  a \wedge b
    &= |a| |b| \sin(\theta_{ab}) I \\
    &= |a| |b| \sin(C) I
  \end{aligned}
</div>

We can see why this formula works by considering the projection of <span class="mathquill-embedded-latex">b</span> onto a line perpendicular to <span class="mathquill-embedded-latex">a</span>. Call this projected vector <span class="mathquill-embedded-latex">h</span>. The parallelogram areas <span class="mathquill-embedded-latex">a \wedge b</span> and <span class="mathquill-embedded-latex">a \wedge h</span> are equal by a simple dissection argument:

<figure class="mainfig">
  <img alt="Interior and exterior angles of a triangle" src="/img/algebraic-law-of-sines/area-angle-relationship.png"
  style="width: 553px;"/>
</figure>

The rectangle on the right side of this diagram can be constructed by cutting a triangle from one edge of the parallelogram on the left side of the diagram and pasting it to the opposite edge, so the area of the two figures is equal.

Since <span class="mathquill-embedded-latex">h</span> and <span class="mathquill-embedded-latex">b</span> are a leg and the hypotenuse of a right triangle respectively, their lengths are related by

<div class="display-latex">
  |h| = |b| \sin(C)
</div>

and, because <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">h</span> are perpendicular and so span a rectangle,

<div class="display-latex">
  a \wedge h = |a| |h| I
</div>

so

<div class="display-latex">
  a \wedge b = a \wedge h = |a| |b| \sin(C) I
</div>

#### Coordinates

If you know two vectors in terms of coordinates, you can compute their wedge product directly from the coordinates without going through lengths and angles. There's a formula for this, but there's no need to memorize it because it's almost as simple to compute directly using properties like anti-commutativity and linearity. Let's work out a concrete example{%marginnote 'why-concrete-example' """A lot of literature about this kind of algebra is fairly abstract, and when I started reading about Geometric Algebra, it seemed useful for theory, but I wasn't really sure how to calculate anything. Seeing a few calculations in terms of concrete coordinates gives you a reassuring feeling that the whole system might be grounded in reality after all.<br /><br />At the other end of the spectrum, many introductory treatments of vectors choose to define products (like the dot product, cross product, or wedge product) in terms of either lengths and angles or coordinates. I can see the pedagogical value of this at a certain point, but eventually, I think it's very useful to realize that all of these things can be (should be) defined in terms of algebraic properties like linearity, associativity, (anti-)commutativity, etc. Then you can prove the formulas for lengths and angles or coordinates, and rather than seeming like collections of symbols pulled out of a hat, they suddenly seem inevitable."""%}:

<figure class="mainfig">
  <img alt="Wedge product in coordinates" src="/img/algebraic-law-of-sines/coordinate-calculation.png"
  style="width: 848px;"/>
</figure>

Compute:

<div class="display-latex">
  B = (3e_1 + e_2) \wedge (2e_1+4e_2)
</div>

First, use the distributive property to expand the product of sums into a sum of products, and linearity to pull the scalars to the front of each product:

<div class="display-latex">
  \begin{aligned}
  B &= 3e_1 \wedge 2e_1 + 3e_1 \wedge 4e_2 + e_2 \wedge 2e_1 + e_2 \wedge 4e_2 \\
  &= 6e_1 \wedge e_1 + 12e_1 \wedge e_2 + 2e_2 \wedge e_1 + 4e_2 \wedge e_2
  \end{aligned}
</div>

From anti-commutativity, we know that <span class="mathquill-embedded-latex">e_1 \wedge e_1 = e_2 \wedge e_2 = 0</span> so that the first and last terms vanish, and <span class="mathquill-embedded-latex">e_2 \wedge e_1 = -e_1 \wedge e_2</span>. Using these gives

<div class="display-latex">
  \begin{aligned}
  B &= 12e_1 \wedge e_2 - 2e_1 \wedge e_2
  \end{aligned}
</div>

And finally, collecting terms gives

<div class="display-latex">
  \begin{aligned}
  B &= (12 - 2)e_1 \wedge e_2 \\
  &= 10e_1 \wedge e_2
  \end{aligned}
</div>

The wedge product of any two vectors representable as weighted sums of <span class="mathquill-embedded-latex">e_1</span> and <span class="mathquill-embedded-latex">e_2</span> will always be proportional to <span class="mathquill-embedded-latex">e_1 \wedge e_2</span> like this. Using exactly the same steps, we can work out the general coordinate formula.

Given{%marginnote 'basis-coordinates' """<span class=\"mathquill-embedded-latex\">e_1</span> and <span class=\"mathquill-embedded-latex\">e_1</span> are a *basis*, and in this basis, <span class=\"mathquill-embedded-latex\">\alpha_1</span> and <span class=\"mathquill-embedded-latex\">\alpha_2</span> are the coordinates of <span class=\"mathquill-embedded-latex\">a</span>, and <span class=\"mathquill-embedded-latex\">\beta_1</span> and <span class=\"mathquill-embedded-latex\">\beta_2</span> are the coordinates of <span class=\"mathquill-embedded-latex\">b</span>."""%}

<div class="display-latex">
  \begin{aligned}
  a &= \alpha_1 e_1 + \alpha_2 e_2 \\
  b &= \beta_1 e_1 + \beta_2 e_2
  \end{aligned}
</div>

then

<div class="display-latex">
  a \wedge b = \left(\alpha_1 \beta_2 - \alpha_2 \beta_1\right) e_1 \wedge e_2
</div>

and if <span class="mathquill-embedded-latex">e_1</span> and <span class="mathquill-embedded-latex">e_2</span> are perpendicular unit vectors so that <span class="mathquill-embedded-latex">e_1 \wedge e_2 = I</span>, then this is{%marginnote 'coordinates-in-more-dimensions' """In more dimensions, to calculate the wedge product of several vectors in terms of coordinates, you can arrange the coordinates into a matrix and take its determinant. Perhaps you have learned about the connection of the determinant to (any-dimensional) volumes; the wedge product of several vectors has that same connection."""%}

<div class="display-latex">
  a \wedge b = \left(\alpha_1 \beta_2 - \alpha_2 \beta_1\right) I
</div>

### Deriving the law of sines

With the wedge product at our disposal, we can now derive the law of sines with some simple algebra.

Given

<div class="display-latex">
  a + b + c = 0
</div>

wedging both sides with <span class="mathquill-embedded-latex">a</span> gives

<div class="display-latex">
  a \wedge (a + b + c) = a \wedge a + a \wedge b  + a \wedge c = 0
</div>

Using anti-commutativity

<div class="display-latex">
  a \wedge a = 0,\quad a \wedge c = -c \wedge a
</div>

this equation reduces to

<div class="display-latex">
  a \wedge b = c \wedge a
</div>

A similar simplification of

<div class="display-latex">
  b \wedge (a + b + c) = 0
</div>

gives

<div class="display-latex">
  a \wedge b = b \wedge c
</div>

and so we have the 3-way equality

<div class="display-latex">
  a \wedge b = b \wedge c = c \wedge a
</div>

and we will see below that this is essentially equivalent to the law of sines.

In pictures of parallelograms, this is{%marginnote 'interactive-law-of-sines' """Here's a [Desmos Geometry construction](https://www.desmos.com/geometry/oxkq3iq8eo) that combines this figure and a couple others."""%}

<figure class="mainfig">
  <img alt="Equal-area parallelograms representing a wedge b, b wedge c, and c wedge a." src="/img/algebraic-law-of-sines/wedge-equality.png"
  style="width: 881px;"/>
</figure>

Geometrically, the areas of these parallelograms are equal because each of them is made out of two copies of the same triangle. This also implies that the area of the parallelograms is twice the area of the triangle. Notice that the parallelograms aren't congruent, though, because the triangles are joined along different edges in each case.

It's a short distance from here to the traditional law of sines. Just substitute in the "lengths and angles" expression for each wedge product:

<div class="display-latex">
  \begin{aligned}
  a \wedge b &= |a| |b| \sin(C) I \\
  b \wedge c &= |b| |c| \sin(A) I \\
  c \wedge a &= |c| |a| \sin(B) I \\
  \\
  |a| |b| \sin(C) I =&\ |b| |c| \sin(A) I = |c| |a| \sin(B) I
  \end{aligned}
</div>

and then divide each term by <span class="mathquill-embedded-latex">|a| |b| |c| I</span>:

<div class="display-latex">
  \frac{\sin C}{|c|} = \frac{\sin A}{|a|} = \frac{\sin B}{|b|}
</div>

It's hard to interpret this traditional form of the law of sines in terms of a figure because each of these terms has units of 1/length, and it's not so clear how to draw anything with those units.

Taking the reciprocal of each term fixes the units. Then dividing through by <span class="mathquill-embedded-latex">2</span> produces another equivalent version of the law of sines that does have an interesting geometric interpretation:

<div class="display-latex">
  \frac{|c|}{2\sin C} = \frac{|a|}{2 \sin A} = \frac{|b|}{2 \sin B} = \rho
</div>

where <span class="mathquill-embedded-latex">\rho</span> is equal to the radius of the circle that circumscribes the triangle (that is, that passes through each of its vertices){%marginnote 'area-radius-factor' """I have tried and not yet succeeded at coming up with any geometric intuition about why a factor of <span class=\"mathquill-embedded-latex\">|a| |b| |c|</span> connects the area of a triangle with the radius of its circumcircle. I'd be grateful for any leads."""%}:

<figure class="mainfig">
  <img alt="Radius of the triangles circumcircle" src="/img/algebraic-law-of-sines/circumradius.png"
  style="width: 207px;"/>
</figure>

I won't show that this is true, but if you want to try it, it's a nice exercise in classical trigonometry. In any case, I think it's clear that the geometric interpretation of the area form of the law of sines is simpler: three ways of calculating the area of the same triangle are equivalent (no circles needed).

Another nice thing about the area form of the law of sines is that it handles degeneracies, where one of the sides has length <span class="mathquill-embedded-latex">0</span> or where the sides are parallel and so the triangle sits on a single line, without having to worry about dividing by <span class="mathquill-embedded-latex">0</span>.

For example, the area form of the law of sines says that if two sides of a triangle are parallel, so that their wedge product is <span class="mathquill-embedded-latex">0</span>, then the third side must also be parallel to these two.

<div class="display-latex">
  \begin{aligned}
  a \wedge b &amp;= b \wedge c \\
  a \wedge b = 0 &amp;\Leftrightarrow b \wedge c = 0 \\
  \end{aligned}
</div>

If the wedge product of two vectors is zero, <span class="mathquill-embedded-latex">a \wedge b = 0</span>, then the vectors are proportional to one another, <span class="mathquill-embedded-latex">a \propto b</span>, and the lines that the vectors span are parallel, <span class="mathquill-embedded-latex">a \parallel b</span>. So here are 3 ways of saying the same thing in different languages:

<div class="display-latex">
  \begin{aligned}
  a \wedge b = 0 &amp;\Leftrightarrow b \wedge c = 0 \\
  a \propto b &amp;\Leftrightarrow b \propto c \\
  a \parallel b &amp;\Leftrightarrow b \parallel c \\
  \end{aligned}
</div>

### Conclusion

My goal in this series of posts is to elaborate the idea that the simple vector equation

<div class="display-latex">
  a + b + c = 0
</div>

contains all the facts of classical trigonometry, if you have a rich enough vector algebra to extract these facts.

So far, we've seen how to get the law of cosines using the dot product (solve for <span class="mathquill-embedded-latex">c</span>, square both sides), and how to get the law of sines using the wedge product (wedge both sides with <span class="mathquill-embedded-latex">a</span>, equate the remaining two terms).

Some of what remains to be said will require the geometric product, which unites the dot product and wedge product together.

Thank you to Jaime George for editing this post, and in particular, for helping me re-think the section on coordinates.