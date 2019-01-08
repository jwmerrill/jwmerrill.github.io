---
layout: post
title: Visualizing geometric product relationships
---

In previous posts, I have shown how to visualize both the [dot product](/2017-02-28-geometry-algebra-intuition.md) and the [wedge product](/2018-11-19-algebraic-law-of-sines.md) of two vectors as parallelogram areas. In this post, I will show how the dot product and the wedge product are related through a third algebraic product: the geometric product. Along the way, we will see that the geometric product provides a simple way to algebraically model all of the major geometric relationships between vectors: rotations, reflections, and projections.

Before introducing the geometric product, let's review the wedge and dot products and their interpretation in terms of parallelogram areas.

Given two vectors, <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span>, their wedge product, <span class="mathquill-embedded-latex">a \wedge b</span>, is straightforwardly visualized as the area of the parallelogram spanned by these vectors:

<figure class="mainfig">
  <img alt="Wedge product of vectors a and b" src="/img/relating-dot-wedge/wedge-product.png"
  style="width: 345px;"/>
</figure>

Recall that algebraically, the wedge product <span class="mathquill-embedded-latex">a \wedge b</span> produces an object called a bivector that represents the size and direction (but not the shape or location) of a plane segment in a similar way that a vector represents the size and direction (but not the location) of a line segment.

The dot product of the same two vectors, <span class="mathquill-embedded-latex">a \cdot b</span>, can be visualized as a parallelogram formed by one of the vectors and a copy of the other that has been rotated by <span class="mathquill-embedded-latex">90</span> degrees:

<figure class="mainfig">
  <img alt="Dot product of vectors a and b" src="/img/relating-dot-wedge/dot-product.png"
  style="width: 223px;"/>
</figure>

Well, almost. When I originally wrote about this area interpretation of the dot product, I didn't want to get into a discussion of bivectors, but once you have the concept of bivector as directed plane segment, it's best to say that what this parallelogram depicts is not quite the dot product, <span class="mathquill-embedded-latex">a \cdot b</span>, which is a scalar (real number), but rather the bivector <span class="mathquill-embedded-latex">(a \cdot b) I</span> where <span class="mathquill-embedded-latex">I</span> is a unit bivector.

<figure class="mainfig">
  <img alt="Dot product of vectors a and b as a parallelogram should include a factor of I" src="/img/relating-dot-wedge/dot-product-with-i.png"
  style="width: 225px;"/>
</figure>

The scalar <span class="mathquill-embedded-latex">a \cdot b</span> *scales* the unit bivector <span class="mathquill-embedded-latex">I</span> to produce a bivector with magnitude/area <span class="mathquill-embedded-latex">a \cdot b</span>. It's hard to draw a scalar on a piece of paper without some version of this trick. Once you're looking for it, you'll see that graphical depictions of real numbers/scalars almost always show how they scale some reference object. It could be a unit segment of an axis or a scale bar; here it is instead a unit area  <span class="mathquill-embedded-latex">I</span>.

Examining the way that the dot product and the wedge product can be represented by parallelograms suggests an algebraic relationship between them:

<div class="display-latex">
  (a \cdot b) I = b \wedge a_\perp
</div>

where <span class="mathquill-embedded-latex">a_\perp</span> represents the result of rotating <span class="mathquill-embedded-latex">a</span> by <span class="mathquill-embedded-latex">90</span> degrees. Since the dot product is symmetric, we also have

<div class="display-latex">
  (a \cdot b) I = a \wedge b_\perp
</div>

<figure class="mainfig">
  <img alt="Relationship between dot and wedge product" src="/img/relating-dot-wedge/dot-wedge-relationship.png"
  style="width: 560px;"/>
</figure>

To really understand this relationship, we'll need an algebraic way to represent how <span class="mathquill-embedded-latex">a_\perp</span> is related to <span class="mathquill-embedded-latex">a</span>; in other words, we'll need to figure out how to represent rotations algebraically.

<!--more-->

To work towards an algebraic representation of rotations, recall how the dot product and wedge product can be expressed in terms of lengths and angles:

<div class="display-latex">
  \begin{aligned}
  a \cdot b &= |a| |b| \cos(\theta_{ab}) \\
  a \wedge b &= |a| |b| \sin(\theta_{ab}) I
  \end{aligned}
</div>

If you're familiar with complex numbers, then adding these two products together produces a very suggestive result:

<div class="display-latex">
  \begin{aligned}
  a \cdot b + a \wedge b &= |a| |b| (\cos(\theta_{ab}) + \sin(\theta_{ab}) I) \\
   &= |a| |b| \exp(\theta_{ab} I)
  \end{aligned}
</div>

where the second line is an expression of [Euler's Formula](https://en.wikipedia.org/wiki/Euler%27s_formula){%marginnote 'exponentiating-i' """At this point, it probably isn't so clear what it could mean to exponentiate a bivector. Suspend disbelief, I'll come back to this."""%}.

In words, the sum of the dot product and the wedge product of two vectors is the product of their lengths, <span class="mathquill-embedded-latex">|a|</span> and <span class="mathquill-embedded-latex">|b|</span>, and a factor representing the rotation between their directions, <span class="mathquill-embedded-latex">\exp(\theta_{ab} I)</span>. This sum is so geometrically meaningful that Geometric Algebra gives it its own name: the geometric product, and its own notation, simple juxtaposition of vectors:

<div class="display-latex">
  a b = a \cdot b + a \wedge b = |a||b| \exp(\theta_{ab} I)
</div>

Since the dot product is symmetric, but the wedge product is anti-symmetric, the order of the factors in a geometric product matters. The reverse of this product is

<div class="display-latex">
  \begin{aligned}
  b a &= b \cdot a + b \wedge a \\
  &= a \cdot b - a \wedge b = |a||b| \exp(-\theta_{ab} I)
  \end{aligned}
</div>

These product formulas can be solved in order to represent the dot product and wedge product in terms of the geometric product{%marginnote 'defining-dot-and-wedge' """As an alternative, it is possible to *define* the geometric product as a linear, associative product between vectors such that the square of a vector is a scalar, and then define the dot product and wedge product as the symmetric and anti-symmetric parts of the geometric product."""%},

<div class="display-latex">
  \begin{aligned}
  a \cdot b &= \frac12(ab + ba) \\
  a \wedge b &= \frac12(ab - ba)
  \end{aligned}
</div>

In other words, the dot and wedge products are half the symmetric and anti-symmetric sums of the geometric product and its reverse.

Using these relations gives a very interesting way to characterize parallel and perpendicular vectors: vectors are parallel when their wedge product is zero, so that the geometric product commutes:

<div class="display-latex">
  a \parallel b \Leftrightarrow a \wedge b = 0 \Leftrightarrow a b = b a
</div>

and they are perpendicular when their dot product is zero, so that the geometric product anti-commutes:

<div class="display-latex">
  a \perp b \Leftrightarrow a \cdot b = 0 \Leftrightarrow a b = - b a
</div>

In general, for vectors that are neither perpendicular nor parallel, the geometric product is neither commutative nor anti-commutative. For this reason, it's important to keep track of the order of terms in a multiplication when using the geometric product. We'll see that with the geometric product, you can get an awful lot of geometry done by thinking about when the order of various symbols can be swapped.

### Properties of the geometric product

#### Vectors square to scalars

Since the wedge product of a vector with itself is always <span class="mathquill-embedded-latex">0</span>, the geometric product of a vector with itself is equal to the dot product of that vector with itself:

<div class="display-latex">
  a a = a^2 = a \cdot a = |a|^2
</div>

#### Associative

The geometric product has another property that is less obvious from its decomposition as the sum of the dot and wedge products: it is associative,

<div class="display-latex">
  (a b) c = a (b c) = a b c
</div>

Associativity is extremely useful algebraically. Combined with the fact that vectors square to real numbers (scalars), associativity means that equations involving products of vectors can be solved. For example, given

<div class="display-latex">
  a b = c d
</div>

if we know <span class="mathquill-embedded-latex">b</span>, we can solve for <span class="mathquill-embedded-latex">a</span> by first multiplying on the right by <span class="mathquill-embedded-latex">b</span>

<div class="display-latex">
  \begin{aligned}
  a b b &= c d b \\
  a b^2 &= c d b \\
  a |b|^2 &= c d b
  \end{aligned}
</div>

and then dividing through by the scalar <span class="mathquill-embedded-latex">|b|^2</span>

<div class="display-latex">
  a = c d \frac{b}{|b|^2}
</div>

#### Invertible

Another way to say that we can solve equations involving geometric products is to say that under the geometric product, vectors have unique inverses. This is a consequence of associativity and the fact that vectors square to scalars.

For an inverse of vector <span class="mathquill-embedded-latex">b</span>, we require

<div class="display-latex">
  b b^{-1} = 1
</div>

Multiplying both sides of this equation by <span class="mathquill-embedded-latex">b</span> gives

<div class="display-latex">
  b^2 b^{-1} = b
</div>

and dividing by the scalar <span class="mathquill-embedded-latex">b^2 = |b|^2</span> gives a formula for the inverse of a vector:

<div class="display-latex">
  b^{-1} = \frac{b}{b^2} = \frac{b}{|b|^2}
</div>

In other words, to find the inverse of a vector, divide the vector by the square of its length.

Since the order of geometric multiplications matters in general, we should check that <span class="mathquill-embedded-latex">b^{-1} b</span> also equals <span class="mathquill-embedded-latex">1</span>:

<div class="display-latex">
  b^{-1} b = \frac{b}{b^2} b = \frac{b^2}{b^2} = 1
</div>

Neither the wedge product nor the dot product alone admit unique inverses, but their sum, the geometric product, contains just the right information to admit a unique inverse.

### Interpreting the geometric product geometrically

Algebraically, the geometric product has some very useful properties, but how can we interpret it geometrically?

To simplify, let's first consider the geometric product of two unit vectors. I'll use the notation <span class="mathquill-embedded-latex">\hat{a}</span> to represent the unit vector in the same direction as <span class="mathquill-embedded-latex">a</span>:

<div class="display-latex">
  \hat{a} = \frac{a}{|a|}
</div>

so that

<div class="display-latex">
  |\hat{a}| = \frac{|a|}{|a|} = 1
</div>

and

<div class="display-latex">
  \hat{a}^2 = |\hat{a}|^2 = 1
</div>

We will use the fact that the square of a unit vector is <span class="mathquill-embedded-latex">1</span> in the process of simplifying several expressions below.

Recalling the lengths-and-angles formula for the geometric product,

<div class="display-latex">
  a b = |a| |b| (\cos(\theta_{ab}) + \sin(\theta_{ab}) I) = |a| |b| \exp(\theta_{ab} I)
</div>

we can see that the geometric product of two unit vectors effectively represents the rotation between them:

<div class="display-latex">
  \hat{a} \hat{b} = \cos(\theta_{ab}) + \sin(\theta_{ab}) I = \exp(\theta_{ab} I)
</div>

The rotation represented by <span class="mathquill-embedded-latex">\hat{a}\hat{b}</span> can be applied to another vector in the plane, <span class="mathquill-embedded-latex">v</span>, by multiplying on the right (remember, order matters) to form <span class="mathquill-embedded-latex">v\hat{a}\hat{b}</span>{%marginnote 'higher-dimensional-rotation' """Some care is required for rotations in more than two dimensions. When <span class=\"mathquill-embedded-latex\">v</span> is not in the same plane as <span class=\"mathquill-embedded-latex\">a</span> and <span class=\"mathquill-embedded-latex\">b,</span> then <span class=\"mathquill-embedded-latex\">v\hat{a}\hat{b}</span> no longer represents a rotation of <span class=\"mathquill-embedded-latex\">v</span>. A closely related formula does generalize: <span class=\"mathquill-embedded-latex\">\hat{b}\hat{a}v\hat{a}\hat{b}</span> is a rotation of <span class=\"mathquill-embedded-latex\">v</span> by twice the angle between <span class=\"mathquill-embedded-latex\">a</span> and <span class=\"mathquill-embedded-latex\">b</span> in any number of dimensions even when <span class=\"mathquill-embedded-latex\">v,</span> <span class=\"mathquill-embedded-latex\">a,</span> and <span class=\"mathquill-embedded-latex\">b</span> are not all in the same plane."""%}:.

<figure class="mainfig">
  <img alt="Applying a rotation to a vector" src="/img/relating-dot-wedge/applying-a-rotation.png"
  style="width: 521px;"/>
</figure>

As a check,

<div class="display-latex">
  \hat{a} (\hat{a} \hat{b}) = (\hat{a} \hat{a}) \hat{b} = \hat{b}
</div>

so right multiplication by <span class="mathquill-embedded-latex">\hat{a}\hat{b}</span> rotates <span class="mathquill-embedded-latex">\hat{a}</span> to <span class="mathquill-embedded-latex">\hat{b}.</span>

Reversing the order of factors in a geometric product of unit vectors reverses the sense of rotation, so that <span class="mathquill-embedded-latex">\hat{b}\hat{a}</span> is a rotation in the opposite direction as <span class="mathquill-embedded-latex">\hat{a}\hat{b}.</span> As a check,

<div class="display-latex">
  \hat{b} (\hat{b} \hat{a}) = (\hat{b}\hat{b}) \hat{a} = \hat{a}
</div>

To *compose* two rotations represented as geometric products, <span class="mathquill-embedded-latex">\hat{a} \hat{b}</span> and <span class="mathquill-embedded-latex">\hat{b} \hat{c}</span>, we simply multiply them:

<figure class="mainfig">
  <img alt="Composition of two rotations" src="/img/relating-dot-wedge/rotation-composition.png"
  style="width: 665px;"/>
</figure>

<div class="display-latex">
  \begin{aligned}
  (\hat{a} \hat{b}) (\hat{b} \hat{c})
   &= \hat{a} \hat{b} \hat{b} \hat{c} \\
   &= \hat{a} (\hat{b} \hat {b}) \hat{c} \\
   &= \hat{a} \hat{c}
  \end{aligned}
</div>

In terms of angles, this represents the same calculation as

<div class="display-latex">
  \begin{aligned}
  \exp(\theta_{ab} I) \exp(\theta_{bc} I) &= \exp((\theta_{ab}+\theta_{bc}) I) \\
  &= \exp(\theta_{ac} I)
  \end{aligned}
</div>

### Triangle angle sum laws

This is enough to start to give geometric product interpretations to some familiar facts about triangles. Given a triangle with edge vectors <span class="mathquill-embedded-latex">a</span>, <span class="mathquill-embedded-latex">b</span>, and <span class="mathquill-embedded-latex">c</span>,

<figure class="mainfig">
  <img alt="Triangle a b c" src="/img/relating-dot-wedge/triangle-abc.png"
  style="width: 230px;"/>
</figure>

the rotations through the exterior angles are represented by <span class="mathquill-embedded-latex">\hat{a}\hat{b}</span>, <span class="mathquill-embedded-latex">\hat{b}\hat{c}</span>, and <span class="mathquill-embedded-latex">\hat{c}\hat{a}</span>.

<figure class="mainfig">
  <img alt="Composition of exterior angles is an identity angle" src="/img/relating-dot-wedge/exterior-angle-composition.png"
  style="width: 516px;"/>
</figure>

The composition of exterior angles is a full rotation, which is simply an identity operation for vectors.

To show this algebraically, we simply multiply the geometric products representing each rotation to compose the rotations, and then re-associate:

<div class="display-latex">
  \begin{aligned}
  &(\hat{a} \hat{b})(\hat{b} \hat{c})(\hat{c} \hat{a}) \\
  &= \hat{a} (\hat{b} \hat{b}) (\hat{c} \hat{c}) \hat{a} \\
  &= \hat{a} \hat{a} \\
  &= 1
  \end{aligned}
</div>

A "straight angle", i.e. a rotation by <span class="mathquill-embedded-latex">180</span> degrees, is the rotation between <span class="mathquill-embedded-latex">\hat{a}</span> and <span class="mathquill-embedded-latex">-\hat{a}</span>, which is simply

<div class="display-latex">
  \hat{a} (- \hat{a}) = -\hat{a}\hat{a} = -1
</div>

If the exterior angle rotations of a triangle are <span class="mathquill-embedded-latex">\hat{a}\hat{b}</span>, <span class="mathquill-embedded-latex">\hat{b}\hat{c}</span>, and <span class="mathquill-embedded-latex">\hat{c}\hat{a}</span>, then the interior angle rotations are simply the negatives of each of these, <span class="mathquill-embedded-latex">-\hat{a}\hat{b}</span>, <span class="mathquill-embedded-latex">-\hat{b}\hat{c}</span>, and <span class="mathquill-embedded-latex">-\hat{c}\hat{a}</span>, and so the composition of the interior angles is{%marginnote 'interior-angle-sum' """One way to visually see that these angles add up to a half-turn is to notice that every sector of the circle has an equal missing sector on the opposite side."""%}

<figure class="mainfig">
  <img alt="Composition of interior angles is a straight angle" src="/img/relating-dot-wedge/interior-angle-composition.png"
  style="width: 521px;"/>
</figure>

<div class="display-latex">
  \begin{aligned}
  &(-\hat{a} \hat{b})(-\hat{b} \hat{c})(-\hat{c} \hat{a}) \\
  &= - \hat{a} \hat{b} \hat{b} \hat{c} \hat{c} \hat{a} \\
  &= -1
  \end{aligned}
</div>

which is a straight angle. In other words, the composition of the interior angles of a triangle is a straight angle, i.e. a <span class="mathquill-embedded-latex">180</span> degree angle.

### Right angles

If two unit vectors have zero dot product, so that they anti-commute under the geometric product,

<div class="display-latex">
  \begin{aligned}
  \hat{a} \cdot \hat{b} &= 0 \\
  \frac12 (\hat{a} \hat{b} + \hat{b} \hat{a}) &= 0 \\
  \hat{a} \hat{b} &= -\hat{b}\hat{a}
  \end{aligned}
</div>

<figure class="mainfig">
  <img alt="Right angle" src="/img/relating-dot-wedge/right-angle.png"
  style="width: 300px;"/>
</figure>

then multiplying both sides on the right by <span class="mathquill-embedded-latex">\hat{a}\hat{b}</span> gives

<div class="display-latex">
  (\hat{a} \hat{b})^2 = -\hat{b}\hat{a} \hat{a} \hat{b} = -1
</div>

which we can interpret geometrically as saying that the composition of a right angle with itself is a straight angle. The above manipulation is an algebraic way of representing the fact that the following statements are all equivalent:

* two vectors are perpendicular
* two vectors have zero dot product
* two vectors anti-commute under the geometric product
* the angle between two vectors bisects a straight angle

### Dilations

For vectors that are not unit vectors, it's a little easier to supply a geometric interpretation for the geometric ratio, <span class="mathquill-embedded-latex">a^{-1}b</span>{%marginnote 'unit-vector-ratio' """Note that for unit vectors, there is no distinction between ratios and products because a unit vector is its own inverse: <span class=\"mathquill-embedded-latex\">\hat{a}^{-1}=\hat{a}</span>."""%}, than the geometric product <span class="mathquill-embedded-latex">ab.</span> In terms of lengths and angles, the geometric ratio is
<div class="display-latex">
  a^{-1} b = \frac{|b|}{|a|} \left(\cos(\theta_{ab}) + \sin(\theta_{ab}) I\right) = \frac{|b|}{|a|} \exp(\theta_{ab} I)
</div>

This is a composition of the rotation that takes the direction of <span class="mathquill-embedded-latex">a</span> to the direction of <span class="mathquill-embedded-latex">b</span> with the dilation that takes the length of <span class="mathquill-embedded-latex">a</span> to the length of <span class="mathquill-embedded-latex">b.</span>{%marginnote 'amplitwist' """In the [Argand diagram](https://en.wikipedia.org/wiki/Complex_plane#Argand_diagram) picture of complex arithmetic, multiplying by a complex number has exactly this same effect of dilation and scaling. In [Visual Complex Analysis](https://www.amazon.com/Visual-Complex-Analysis-Tristan-Needham/dp/0198534469), Needham calls this an \"amplitwist\" for \"amplification\" and \"twist\".<br /><br />Ratios of vectors in the plane behave in exactly the same way as complex numbers; the Argand diagram effectively models vectors in the plane as complex numbers by forming ratios of every vector with a constant unit vector pointing along the \"real axis\"."""%}

<figure class="mainfig">
  <img alt="Geometric ratio of a and b" src="/img/relating-dot-wedge/geometric-ratio.png"
  style="width: 294px;"/>
</figure>

As a check,

<div class="display-latex">
  a (a^{-1} b) = (a a^{-1}) b = b
</div>

Applying the geometric ratio repeatedly produces a sequence of vectors lying on a logarithmic spiral, with adjacent pairs of vectors forming the legs of a sequence of similar triangles.

<figure class="mainfig">
  <img alt="Geometric ratio spiral" src="/img/relating-dot-wedge/geometric-ratio-spiral.png"
  style="width: 334px;"/>
</figure>

### Rotation, Reflection, Projection, Rejection

Reversing the order of the terms in the geometric ratio from <span class="mathquill-embedded-latex">a^{-1}b</span> to <span class="mathquill-embedded-latex">ba^{-1}</span> reverses the sense of rotation, but leaves the dilation unchanged

<div class="display-latex">
  b a^{-1} = \frac{|b|}{|a|} \left(\cos(\theta_{ab}) - \sin(\theta_{ab}) I\right) = \frac{|b|}{|a|} \exp(-\theta_{ab} I)
</div>

<figure class="mainfig">
  <img alt="Reflection of b over a" src="/img/relating-dot-wedge/reflection.png"
  style="width: 253px;"/>
</figure>

Examining this picture suggests that <span class="mathquill-embedded-latex">aba^{-1}</span> is the reflection of <span class="mathquill-embedded-latex">b</span> across <span class="mathquill-embedded-latex">a.</span> This representation of a reflection is sometimes referred to as a "sandwich product" because <span class="mathquill-embedded-latex">b</span> is sandwiched between <span class="mathquill-embedded-latex">a</span> and its inverse. It can equivalently be written as <span class="mathquill-embedded-latex">\hat{a}b\hat{a}</span> because

<div class="display-latex">
  \begin{aligned}
  aba^{-1} &= a b \left(\frac{a}{|a|^2}\right) \\
  &= \left(\frac{a}{|a|}\right) b \left(\frac{a}{|a|}\right) \\
  &= \hat{a} b \hat{a}
  \end{aligned}
</div>

Notice that <span class="mathquill-embedded-latex">aba^{-1}</span> is linear in <span class="mathquill-embedded-latex">b</span>, but independent of the scale of <span class="mathquill-embedded-latex">a</span>, as expected for a reflection of <span class="mathquill-embedded-latex">b</span> across <span class="mathquill-embedded-latex">a</span>

This sandwich product expression for reflection makes it particularly evident that a vector and its reflection have the same length. If

<div class="display-latex">
  b_\mathrm{refl} = a b a^{-1}
</div>

then

<div class="display-latex">
  \begin{aligned}
  b_\mathrm{refl}^2 &= (a b a^{-1}) (a b a^{-1}) \\
  &= a b (a^{-1} a) b a^{-1} \\
  &= a b^2 a^{-1} \\
  &= b^2 a a^{-1} \\
  &= b^2
  \end{aligned}
</div>

where we have made use of the fact that <span class="mathquill-embedded-latex">b^2</span> is a scalar and so it can be moved freely within a geometric product.

Left multiplying <span class="mathquill-embedded-latex">aba^{-1}</span> by the unit factor <span class="mathquill-embedded-latex">bb^{-1}</span> gives another representation for the reflection of <span class="mathquill-embedded-latex">b</span> across <span class="mathquill-embedded-latex">a</span>:

<div class="display-latex">
  \begin{aligned}
  aba^{-1} &= (bb^{-1}) (a b a^{-1}) \\
  &= b \left(\frac{b}{|b|^2}\right) a b \left(\frac{a}{|a|^2}\right) \\
  &= b \frac{b}{|b|}\frac{a}{|a|}\frac{b}{|b|}\frac{a}{|a|} \\
  &= b (\hat{b}\hat{a})(\hat{b}\hat{a}) \\
  &= b (\hat{b}\hat{a})^2
  \end{aligned}
</div>

The last line represents applying the rotation between  <span class="mathquill-embedded-latex">b</span> and <span class="mathquill-embedded-latex">a</span> to the vector <span class="mathquill-embedded-latex">b</span> twice. In other words, to reflect <span class="mathquill-embedded-latex">b</span> across <span class="mathquill-embedded-latex">a</span>, rotate <span class="mathquill-embedded-latex">b</span> through twice the angle between <span class="mathquill-embedded-latex">b</span> and <span class="mathquill-embedded-latex">a</span>.

There is a simple relationship between the reflection of <span class="mathquill-embedded-latex">b</span> across <span class="mathquill-embedded-latex">a</span> and the parallel and perpendicular components (i.e. the projection and "rejection") of <span class="mathquill-embedded-latex">b</span> relative to <span class="mathquill-embedded-latex">a</span>: the projection and rejection are the half symmetric and anti-symmetric sums of <span class="mathquill-embedded-latex">b</span> and its reflection in <span class="mathquill-embedded-latex">a</span>

<figure class="mainfig">
  <img alt="Relationship of reflection, projection, and rejection" src="/img/relating-dot-wedge/reflection-projection-rejection.png"
  style="width: 236px;"/>
</figure>

In other words, the sum of <span class="mathquill-embedded-latex">b</span> and its reflection across <span class="mathquill-embedded-latex">a</span> is twice the projection of <span class="mathquill-embedded-latex">b</span> onto <span class="mathquill-embedded-latex">a</span>

<figure class="mainfig">
  <img alt="Parallel part as reflection sum" src="/img/relating-dot-wedge/reflection-parallel.png"
  style="width: 228px;"/>
</figure>

<div class="display-latex">
  b_{\parallel a} = \frac12 \left(b + aba^{-1}\right)
</div>

and the difference of <span class="mathquill-embedded-latex">b</span> and its reflection across <span class="mathquill-embedded-latex">a</span> is twice the rejection of <span class="mathquill-embedded-latex">b</span> from <span class="mathquill-embedded-latex">a</span>

<figure class="mainfig">
  <img alt="Parallel part as reflection difference" src="/img/relating-dot-wedge/reflection-perpendicular.png"
  style="width: 232px;"/>
</figure>

<div class="display-latex">
  b_{\perp a} = \frac12 \left(b - aba^{-1}\right)
</div>

Using the freedom to insert the unit factor <span class="mathquill-embedded-latex">aa^{-1}</span> into the equation for <span class="mathquill-embedded-latex">b_\parallel</span> and re-associating gives

<div class="display-latex">
  \begin{aligned}
  b_{\parallel a} &= \frac12 \left(b\left(aa^{-1}\right) + aba^{-1}\right) \\
  &= \frac12 \left(ba + ab\right)a^{-1} \\
  &= (b \cdot a) a^{-1} \\
  &= (b \cdot \hat{a}) \hat{a}
  \end{aligned}
</div>

which is a familiar way to interpret the dot product in terms of a projection, and similarly,

<div class="display-latex">
  \begin{aligned}
  b_{\perp a} &= \frac12 \left(b\left(aa^{-1}\right) - aba^{-1}\right) \\
  &= \frac12 \left(ba - ab\right)a^{-1} \\
  &= (b \wedge a) a^{-1} \\
  &= (b \wedge \hat{a} ) \hat{a}
  \end{aligned}
</div>

which is a probably less familiar way to interpret the wedge product in terms of rejection.

We can check that combining these components gives back the whole vector <span class="mathquill-embedded-latex">b</span>:

<div class="display-latex">
  \begin{aligned}
  b &= b(aa^{-1}) \\
    &= (ba)a^{-1} \\
    &= (b \cdot a + b \wedge a) a^{-1} \\
    &= (b \cdot a) a^{-1} + (b \wedge a) a^{-1} \\
    &= b_{\parallel a} + b_{\perp a}
  \end{aligned}
</div>

### Planarity

We have seen that the condition that three vectors form a triangle is

<div class="display-latex">
  a + b + c = 0
</div>

A similar but weaker condition on three vectors is that they are in the same plane, and the traditional way to state this condition algebraically is in terms of linear dependence:

<div class="display-latex">
  \alpha a + \beta b + \gamma c = 0
</div>

for some set of scalars <span class="mathquill-embedded-latex">\alpha</span>, <span class="mathquill-embedded-latex">\beta</span>, and <span class="mathquill-embedded-latex">\gamma</span> that are not all <span class="mathquill-embedded-latex">0</span>. In words:

* A weighted sum of the vectors is <span class="mathquill-embedded-latex">0</span>
* It is possible to scale the vectors so that they form a triangle
* At least one of the vectors can be written as a weighted sum of the other two

Geometric Algebra provides two ways to restate the planarity condition without the need for introducing extra scalar parameters. Suppose (without loss of generality) that <span class="mathquill-embedded-latex">\alpha</span> is non-zero, and wedge on the right by <span class="mathquill-embedded-latex">b \wedge c</span>:

<div class="display-latex">
  \begin{aligned}
    (\alpha a + \beta b + \gamma c) \wedge (b \wedge c) &= 0 \\
    \alpha (a \wedge b \wedge c) + \beta (b \wedge b \wedge c) + \gamma (c \wedge b \wedge c) &= 0
  \end{aligned}
</div>

The last two terms are <span class="mathquill-embedded-latex">0</span> by anti-symmetry of the wedge product, and so, after dividing through by the non-zero scalar <span class="mathquill-embedded-latex">\alpha</span>, we have

<div class="display-latex">
  a \wedge b \wedge c = 0
</div>

as a restatement of the condition that <span class="mathquill-embedded-latex">a</span>, <span class="mathquill-embedded-latex">b</span>, and <span class="mathquill-embedded-latex">c</span> are in the same plane. A geometrical interpretation of this formula is that the vectors span a parallelepiped with no volume{%marginnote 'general-wedge-condition' """In general, the wedge product of <span class=\"mathquill-embedded-latex\">n</span> vectors is <span class=\"mathquill-embedded-latex\">0</span> if and only if the vectors all lie in an <span class=\"mathquill-embedded-latex\">n-1</span> dimensional linear subspace. The wedge product of two vectors is <span class=\"mathquill-embedded-latex\">0</span> when they are directed along the same line, the wedge product of three vectors is <span class=\"mathquill-embedded-latex\">0</span> when they are in the same plane, and so on."""%}.

There is a further alternative statement of the condition of planarity of three vectors using the geometric product that is very useful for proofs in plane geometry. Again starting from

<div class="display-latex">
  \alpha a + \beta b + \gamma c = 0
</div>

and assuming that <span class="mathquill-embedded-latex">\alpha</span> is non-zero, multiplying on the right by <span class="mathquill-embedded-latex">bc</span> gives

<div class="display-latex">
  \alpha abc + \beta b^2c + \gamma cbc = 0
</div>

and alternatively, multiplying on the left by <span class="mathquill-embedded-latex">cb</span> gives

<div class="display-latex">
  \alpha cba + \beta cb^2 + \gamma cbc = 0
</div>

Subtracting this equation from the previous one and noting that <span class="mathquill-embedded-latex">b^2c = c b^2</span> because <span class="mathquill-embedded-latex">b^2</span> is a scalar gives

<div class="display-latex">
\alpha (abc - cba) = 0
</div>

and dividing by the non-zero scalar <span class="mathquill-embedded-latex">\alpha</span> and re-arranging gives

<div class="display-latex">
  abc = cba
</div>

as a third way of stating the condition that three vectors are in the same plane. This condition is harder to extend to other dimensions, but it's very useful in computations because it means that we're always free to reverse the geometric product of any three vectors that are in the same plane.

We've seen that in order to rotate a vector <span class="mathquill-embedded-latex">c</span> by the angle between two other vectors, <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span>, we can form

<div class="display-latex">
  c_\mathrm{rot} = c\hat{a}\hat{b}
</div>

and using the planarity condition above to reverse the three vectors shows that multiplying on the right by <span class="mathquill-embedded-latex">\hat{a}\hat{b}</span> is equivalent to multiplying on the left by <span class="mathquill-embedded-latex">\hat{b}\hat{a}</span>

<div class="display-latex">
  c_\mathrm{rot} = \hat{b}\hat{a}c
</div>

This freedom to reverse triples of vectors in the plane makes it easy to check that rotation preserves length:

<div class="display-latex">
  \begin{aligned}
  c_\mathrm{rot}^2 &= (c\hat{a}\hat{b})(c\hat{a}\hat{b}) \\
  &= (c\hat{a}\hat{b})(\hat{b}\hat{a}c) \\
  &= c\hat{a}\hat{b}^2\hat{a}c \\
  &= c\hat{a}^2c \\
  &= c^2
  \end{aligned}
</div>

Multiplying on both the left by <span class="mathquill-embedded-latex">\hat{b}\hat{a}</span> and on the right by <span class="mathquill-embedded-latex">\hat{a}\hat{b}</span> applies the rotation twice, and re-associating shows that this is equivalent to reflecting first in <span class="mathquill-embedded-latex">a</span> and then in <span class="mathquill-embedded-latex">b</span>{%marginnote 'double-reflection' """This double-reflection formula for rotation is the form that works in any dimension; i.e. applies to vectors that may not lie completely in the plane of rotation."""%}:

<div class="display-latex">
  c_{\mathrm{rot} \times 2} = (\hat{b}\hat{a})c(\hat{a}\hat{b}) = \hat{b}(\hat{a}c\hat{a})\hat{b}
</div>

Applying the planarity condition twice to a product of four vectors shows that products of pairs of vectors in the same plane commute with one another:

<div class="display-latex">
  \begin{aligned}
  (ab)(cd)  &= (abc)d \\
  &=(cba)d \\
  &= c(bad) \\
  &= c(dab) \\
  &= (cd)(ab)
  \end{aligned}
</div>

For exactly the same reason, ratios of pairs of vectors in the plane also commute:

<div class="display-latex">
  ab^{-1}cd^{-1} = cd^{-1}ab^{-1}
</div>

We have seen above that ratios of vectors in the plane behave similarly to complex numbers, so it's comforting to see that they are commutative.

### Coordinates

To better understand how the directed unit plane segment (unit bivector), <span class="mathquill-embedded-latex">I</span>, behaves under the geometric product, it is useful to introduce a pair of orthogonal (perpendicular) unit vectors, <span class="mathquill-embedded-latex">e_1</span> and <span class="mathquill-embedded-latex">e_2</span>, which can serve as coordinate basis vectors. Then <span class="mathquill-embedded-latex"> I = e_1 e_2 = e_1 \wedge e_2</span>.

<figure class="mainfig">
  <img alt="I is spaned by unit vectors" src="/img/relating-dot-wedge/unit-vectors.png"
  style="width: 410px;"/>
</figure>

The condition that these are unit vectors is that they square to <span class="mathquill-embedded-latex">1</span>:

<div class="display-latex">
  e_1^2 = e_2^2 = 1
</div>

and the condition that they are orthogonal is that they anti-commute, so that their geometric product is equal to their wedge product:

<div class="display-latex">
  e_1 e_2 = - e_2 e_1 = e_1 \wedge e_2 = I
</div>

Since <span class="mathquill-embedded-latex">I</span> can be written as a product of unit vectors, we expect that multiplying vectors in the plane by <span class="mathquill-embedded-latex">I</span> will rotate them. Let's consider what happens when we multiply the coordinate vectors on the right by I:

<div class="display-latex">
  \begin{aligned}
  e_1 I &= e_1 e_1 e_2 = e_2 \\
  e_2 I &= e_2 e_1 e_2 = - e_1 e_2 e_2  = - e_1
  \end{aligned}
</div>

so right multiplication by <span class="mathquill-embedded-latex">I</span> rotates both unit vectors counter-clockwise by <span class="mathquill-embedded-latex">90</span> degrees. Any other vector in the plane can be written as a linear combination of these unit vectors, so right multiplication by <span class="mathquill-embedded-latex">I</span> rotates *any* vector in the plane by <span class="mathquill-embedded-latex">90</span> degrees counter-clockwise.

As expected for a right-angle rotation, <span class="mathquill-embedded-latex">I^2 = -1</span>:

<div class="display-latex">
  \begin{aligned}
  I^2 &= e_1 e_2 e_1 e_2 \\
  &= e_1 (-e_1 e_2) e_2 \\
  &= -e_1^2 e_2^2 \\
  &= -1
  \end{aligned}
</div>

which suggests why <span class="mathquill-embedded-latex">I</span> behaved so similarly to the imaginary unit in some earlier formulas{%marginnote 'exponentiating-i' """The fact that <span class=\"mathquill-embedded-latex\">I</span> squares to one lets us make sense of expressions like <span class=\"display-latex\">\exp(I \theta) = \cos(\theta) + I\sin(\theta)</span> Just as for [complex numbers](https://en.wikipedia.org/wiki/Exponential_function#Complex_plane), the strategy is to expand the exponential as a power series, reduce all higher powers of <span class=\"mathquill-embedded-latex\">I</span> using <span class=\"mathquill-embedded-latex\">I^2 = -1</span> and then recognize the series for <span class=\"mathquill-embedded-latex\">\sin</span> and <span class=\"mathquill-embedded-latex\">\cos</span>."""%}

Furthermore, we can show that <span class="mathquill-embedded-latex">I</span> anti-commutes with any vector in the plane using the planarity condition to reverse products of three vectors in the plane, and anti-commutativity of orthogonal vectors to reverse <span class="mathquill-embedded-latex">e_1</span> and <span class="mathquill-embedded-latex">e_2</span>

<div class="display-latex">
  \begin{aligned}
  a I &= a e_1 e_2 \\
  &= e_2 e_1 a \\
  &= - e_1 e_2 a \\
  &= - I a
  \end{aligned}
</div>

Since <span class="mathquill-embedded-latex">I</span> is a product of a pair of vectors in the plane, it commutes with other products of pairs of vectors in the plane.

### Duality

With this, we finally have enough preparation to understand the relationship between the parallelogram representations of the dot product and wedge product.

We set out to understand why

<figure class="mainfig">
  <img alt="Duality of dot product and wedge product" src="/img/relating-dot-wedge/duality-recap.png"
  style="width: 285px;"/>
</figure>

<div class="display-latex">
  (a \cdot b) I = a \wedge b_\perp
</div>

and we can now prove this result algebraically:

<div class="display-latex">
  \begin{aligned}
  (a \cdot b) I &= \frac12 (ab + ba) I \\
  &= \frac12 (abI + ba I) \\
  &= \frac12 (abI - bIa) \\
  &= \frac12 (a (bI) - (bI) a) \\
  &= a \wedge (bI) \\
  &= a \wedge b_\perp
  \end{aligned}
</div>

Let's go through this calculation line by line

1. Expand the dot product as the symmetric part of the geometric product
2. Distributivity of the geometric product
3. <span class="mathquill-embedded-latex">I</span> anti-commutes with vectors in the plane, so it anti-commutes with <span class="mathquill-embedded-latex">a</span>
4. The geometric product is associative
5. Recognize the anti-symmetric part of the geometric product as the wedge product
6. Right-multiplication of <span class="mathquill-embedded-latex">b</span> by <span class="mathquill-embedded-latex">I</span> rotates <span class="mathquill-embedded-latex">b</span> counter-clockwise by <span class="mathquill-embedded-latex">90</span> degrees, so we can identify <span class="mathquill-embedded-latex">bI</span> with <span class="mathquill-embedded-latex">b_\perp</span>

In the fifth step,

<div class="display-latex">
  (a \cdot b) I = a \wedge (bI)
</div>

the unit bivector <span class="mathquill-embedded-latex">I</span> acts in two interestingly different ways: on the left hand side, it is *scaled* by <span class="mathquill-embedded-latex">a \cdot b</span> to make a bivector with the right magnitude; on the right hand side, it *rotates* <span class="mathquill-embedded-latex">b</span> counter-clockwise by <span class="mathquill-embedded-latex">90</span> degrees to produce a parallelogram spanned by vectors with the right direction relationship.

This relationship between the dot product and the wedge product is called "duality" because it gives a way of exchanging one kind of product for the other.

### Scaling constrains what is easily visualized

The reason that this duality relationship is useful for visualizing the dot product is that the dot product depends linearly on two vectors, and if we draw the vectors as arrows on the page, then their dot product naturally has units of area on the page. Duality gives us a natural way to convert the scalar result of the dot product to a bivector, so that the grade matches the units.

This turns out to be a generally useful constraint: if you want to visualize some object built out of vectors on the page, its grade should match its units{%marginnote 'missing-grade' """Most introductory-level discussions of geometry don't really have the language to discuss grade, and frequently choose not to emphasize units either, so there is a fair amount of confusion about these points. In physics, it's basically impossible to draw a \"to scale\" representation of the cross product of two vectors represented as arrows, because the cross product produces a vector (grade <span class=\"mathquill-embedded-latex\">1</span>) with units of area."""%}. This is why the dot product <span class="mathquill-embedded-latex">a \cdot b</span> is very often visualized through one of the related projections <span class="mathquill-embedded-latex">(a \cdot \hat{b}) \hat{b}</span> or <span class="mathquill-embedded-latex">(b \cdot \hat{a}) \hat{a}</span>. The dot product alone is not easily visualizable because it is a scalar (grade <span class="mathquill-embedded-latex">0</span>), but it has units of area. The projections are visualizable because they are vectors (grade <span class="mathquill-embedded-latex">1</span>) with units of length.

The geometric product of two vectors contains a scalar (grade <span class="mathquill-embedded-latex">0</span>) and a bivector (grade <span class="mathquill-embedded-latex">2</span>), so if we want to visualize it, we need it to be unitless. This is why it's easier to visualize the geometric ratio of two vectors (which is unitless) than the geometric product of two vectors (which has units of area).

### Conclusion

The geometric product is an important unifying concept for representing Euclidean geometry algebraically. It combines the more familiar dot and wedge products into a single associative and invertible product, and clarifies their relationship. The geometric product represents rotations, reflections, and dilations through simple products or ratios of vectors, allows composing these operations with multiplication, and often allows simplifying these compositions by re-associating within the products. In this post, we were able to use this same trick over and over again to show that

* The exterior angle rotations of a triangle compose to a full turn
* The interior angles of a triangle compose to a half turn
* Rotations and reflections preserve the length of vectors
* The composition of two reflections is a rotation

and the geometric product makes it possible to reduce many more geometric proofs to algebra without ever needing to introduce coordinates or parameterizations of angles and trigonometric functions.

Thanks you to Jaime George for editing this post.