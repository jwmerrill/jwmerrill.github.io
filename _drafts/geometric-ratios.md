---
layout: post
title: Geometric transformations as ratios of objects
---

Suppose we represent two geometric objects (points, lines, planes, vectors, circles, etc.) by the symbols A and B. A suggestive notation for the transformation that takes A to B is

(BA^{-1})

or in other words, the ratio B/A. Acting on A, it "obviously" gives B:

(BA^{-1})(A) = B

What does it do to other objects?

Examples:

Ratio between two points: translation (but also rotation or dilation or reflection)
Ratio between two unit vectors: Rotation (or reflection)
Ratio between two general vectors: Rotation + dilation (but also shear/nonuniform scaling)
Ratio between two point pairs: rotation+dilation (and maybe a translation and rotation in an orthogonal plane)
Ratio between two circles: translation+dilation (and in higher dimensions, a rotation between carrier planes of circles, and maybe a rotation that leaves the circles invariant)
Ratio between two lines: screw transformation (rotation plus orthogonal translation) (but also scaling, translation, and rotation that leave lines fixed)

Generally need boundary conditions (or an extremal principle) to make ratios unique. Intuitive principle: minimize sum of squares of distances of transformation over all space (but this involves infinity/infinity).

Alternative: "quotient out" any transformation that leaves the objects in question unchanged. E.g. rotations and scaling about a point leave the point unchanged, so don't include them in the ratio between two points. Is there a way to make this uniquely determine translations, though, or do we still have the issue of rotation and translation about other points? How can you do this computationally?

Objects are not the same as transformations. But we often represent objects as transformations of some reference object. When we form ratios, (some of) the dependence on the reference object drops out.

Not all objects transform the same way. For example, can imagine transforming points, lines, circles, etc. according to the ratio between ellipses, but the normals and tangents to the ellipse would not transform the same way as one another.

Two ways to represent a vector: either as a rotation and scaling of a reference vector, or as a weighted sum of orthogonal reference vectors. Latter is more common, but has some geometrical disadvantages. For example, it doesn't seem to extend well to larger/smaller objects: can add vectors, but can't add orientations of a rigid body (as directly). Seems like there's more to understand here.

Vector space representation vs. group representation.

Instead of a frame of vectors, consider nested subspaces: A_1, A_2, A_3 = e_1, e_1 \wedge e_2, e_1 \wedge e_2 \wedge e3. Get successive unit vectors by contraction; e.g. e_2 = A_1^{-1} \cdot A_2, e_3 = A_2{-1} \cdot A_3. Does this change how we represent a vector? Determines a factorization of a transformation into parts that leave sucessive subspaces invariant (or does it?).

Characterize a transformation by what it does to the whole space, what it does to a particular plane after removing action on whole space, and then what it does to a particular vector in the plane after removing action on the plane.

Does this characterization relate somehow to invariants as functions of coefficients of characteristic polynomial? Called invariants because they are not affected by similarity (congruence?) transformations.

Claim: vectors are useful because they are elements of a rotation/scale group. Not sure that it makes sense to go this far, since it's sensible to have vectors where components have different units, and use them in a projective (rather than metric) way.

Aside: Are there eigenmultivectors of linear transformations that are not the sum of eigenblades? E.g. in 4+ dimensions there are bivectors that are not blades; does any linear transformation map one summand into the other and v.v.?

Aside: a simple extension of complex numbers would let us remember winding numbers. Just choose not to identify I^2 = -1 and I^-1 = -I. Instead, say that I^2 = W, (I^-1)^2 = W^-1, and then keep track of the exponent of W. This is basically what the "braid group" is. If we want to incorporate this into GA, we should probably not identify e_1 \wedge e_2 and -e_2 \wedge e_1. But we could identify them up to a factor of W.