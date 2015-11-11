---
layout: post
title: Trigonometry Without Angles
---

* What's the difference between 3 points, and a triangle?
* Which one doesn't belong?

Translation, Rotation, Scaling, Reorientation

Simpler question: what's the difference between 2 points and a line segment?

Translating a line segment gives a segment that is in some sense equivalent (congruent, similar, etc.). Translating a point gives a completely different point. We can represent the aspects of a line segment that don't change when we translate it by considering the displacement between the points. Translating the two points in the same way does not change the displacement between them. This displacement is a vector, and the fact that we can use vectors to represent information that doesn't change under translation is what makes them so useful for geometry.

Specifying two points in the plane requires 4 parameters: 2 for the location of each point. Ignoring translations removes 2 of those parameter, so we can expect a 2 parameter displacement to contain all the information about 2 points that is independent of translation.

If we decide to also ignore rotation in the plane when considering whether two line segments are equivalent, this removes one more parameter, so it should be possible to represent all the information about two points that is independent of translation and rotation with a single number. This number is the distance between the two point (or any function of the distance).

What about scaling? Ignoring scaling removes one more parameter, leaving 0. What does this mean? All line segments in the plane are equivalent if we ignore translation, rotation, and scaling.

Now let's consider 3 points in the plane. If we want to ignore translations, we can represent the 3 points by the 3 displacements to get from each point to the next.

It takes 6 parameters to specify 3 points in the plane, and 6 parameters to specify 3 displacements in the plane. But displacements are independent of translations, and it takes 2 parameters to specify a translation, so perhaps we should have expected only 4 parameters in our representation. The trick is that not all sets of 3 displacements represent triangles. There is a constraint: namely that if we follow all 3 displacements, we end up back where we started from:

v1 + v2 + v3 = 0

This constraint is fundamental to trigonometry, but it isn't usually spelled out this way in elementary treatments.

Rearranging and squaring gives the law of cosines:

v1 + v2 = -v3
|v1 + v2|^2 = |-v3|^2
|v1|^2 + |v2|^2 + 2 v1 \cdot v2 = |v3|^2
a^2 + b^2 - 2 a b cos(C) = c^2

NB there's a tricky aspect to the sign of the cos term. Changing between interior and exterior angles reverses the sign of the cosine, and the dot product is naturally associated with the exterior angle, but the usual law of cosines is based on the interior angle.

Taking the cross product with any of the vectors gives the law of sines

v1 \times v1 + v1 \times v2 + v1 \times v3 = 0
v1 \times v2 = - v1 \times v3
a b sin C = - a c sin -B
(sin B)/b = (sin C)/c

If we want to also ignore rotations in the plane, then we should expect to require 3 parameters to specify the remaining information contained in 3 points. One way to parametrize a triangle up to translations and rotations is to give the length of each of the 3 sides. This should be familiar from elementary trigonometry as the SSS (side-side-side) form of specifying a triangle.

Not all sets of 3 lengths produce triangles, but the constraint is given by an inequality rather than an equality, so it doesn't affect the relevant number of parameters.

|v3| <= |v1| + |v2|

and similar for cyclic rearrangements. Ignoring translations and rotations (and perhaps also reflections) is equivalent to the geometric notion of congruence.

What if we also want to ignore uniform (also called dilation). Ignoring translation, rotation, and scale is equivalent to the geometric notion of similarity. We can expect to require 2 parameters. The traditional way to parametrize this information is to give the 3 interior angles of the triangle, constrained by the requirement that they add up to 180 degrees (or pi radians). This is the AAA form of specifying a triangle.

However, there is an alternative parametrization that I claim is better in most ways.

We can represent the 3 vectors in a triangle by 3 complex numbers. For example, we can represent the displacement vector $(3, 5)$ by the complex number $3 + 5i$.

[[For the purposes of geometry, it's best to think of this representation of vectors as an operation that is applied to a unit vector pointing along the real axis. So in $3 + 5i$, $3$ means "scale the unit vector pointing along the real axis by a factor of 3," $i$ means "rotate the unit vector pointing along the real axis by 90 degrees", $5i$ means "rotate the unit vector pointing along the real axis by 90 degrees, and then scale the result by a factor of 5", and $3+5i$ means "add together the result of scaling e1 by a factor of 3, and the result of rotating e1 by 90 degrees and scaling it by a factor of 5".]]

The ratio of the complex numbers representing two of the triangle's sides is invariant to translation, rotation, and scaling of the triangle. This ratio has two parameters, so in fact it gives all of the information about the triangle that is invariant under these operations.

The major advantage of complex side ratio over angles is that it can be computed from point coordinates by arithmetic only. There is no need for transcendental functions like sin, cos, tan, and their inverses, as there is for angles.

Given one complex side ratio, the other two can be computed, again using arithmetic only

[[computation of these]]

The analogue of the fact that the sum of the interal angles of a triangle is 180 degrees is that the product of the complex side ratios is 1.

[[total turtle trip theorem]]

If you are interested in congruence rather than similarity (that is, ignoring translation and rotation, but not scaling), one appealing representation is a complex side ratio, and the area of the triangle. As we've seen, the complex side ratio is invariant to translation, rotation, and scaling, and the area is a single parameter that is invariant to translation and rotation, but not scaling.

* [["Solving triangles"]]
* [["Composition law for side ratios"]]
* [["Normalized side ratios"]]

When are angles useful?

* When considering arc lengths of a circle. E.g. how far has a car travelled, given the initial and final attitude of its wheels.
* When considering the kinematics of a rigid body. The angle of a free rigid body relative to its initial position increases linearly with time.

Relationship to other work:

Wildberger's "Rational Trigonometry":

Complex side ratios eliminate the need for transcendental functions. Rational trigonometry replaces lengths with their squares (called quadrances in this terminology), and angles with the square of their sines (called spreads) (alternatively, the square of the imaginary part of normalized side ratios). This allows eliminating many square roots for triangle computations, which is interesting because it allows doing trigonometry over any field (e.g. finite fields like p7). There are some disadvantages to this approach:

* It fails to distinguish between an acute and obtuse angles (phi and 180 - phi are identified; you could alternatively view this as an advantage instead of a disadvantage).
* The angle composition law is complicated. Angles compose additively, complex side ratios compose multiplicatively, but spreads compose according to a more complicated system of polynomials.
* The relationship to calculus is lost. There isn't really a sensible notion of the quadrance of a curve.

Quaternions, Matrix Algebra, and Geometric Algebra:

Complex numbers are useful for representing plane geometry, but in order to represent geometry in 3 or more dimensions, some other extension is needed. In 3D, scaling, rotation, and translation can be represented by Quaternions. Alternatively, matrix algebras can represent these operations in any number of dimensions. But my favorite alternative is geometric algebra.

* Distinguishes between vectors, plane segments, volume segments, and higher dimensional analogues. All of these can be thought of as "oriented, scaled subspaces."
* Extends easily to any number of dimensions.
* Has a well developed calculus.
* Operations are built out of vectors, but are distinguished from them. Complex algebra priveleges a single direction (the unit real) in its representation of vectors. Geometric algebra is capable of treating all directions on equal footing.
* [[Cite Geometric Algebra for Computer Scientists]]
