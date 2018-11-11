---
layout: post
title: On the relationship between Projective and Conformal Geometric Algebras
---

Geometric Algebra is a powerful language for understanding geometry because it allows us to transfer our experience and intuition about numbers and arithmetic in order to model geometric objects like points, lines, planes, and circles, and their relationships like distance, direction, projection, and intersection.

The simplest, most successful, and most widely known way of modeling geometry through algebra is coordinate geometry. In this system, each point is assigned a unique list of numbers, and geometric relationships (distance, angle, etc.) among points are functions of these numbers. More complex geometric objects like lines, planes, circles, and spheres are thought of a sets of points, and if you want to perform a geometric operation like translation or rotation on one of these objects, you think of splitting it into its component points, performing the operation on each one, and then reassembling the result at the end.

Coordinate geometry's biggest weakness is that there are many, many different valid ways of labeling points by numbers (i.e. many different valid coordinate systems), and relationships that are obvious in one coordinate system may be obscure in another.

A variety of more sophisticated algebraic models of geometry have been developed to address this problem, and there's one fundamental idea that they share: instead of representing points by numeric coordinates and other objects as sets of points, represent both points and more complex geometric objects by abstract symbols that *don't* represent single numbers, but *do* still support algebraic operations like addition and multiplication that obey familiar laws like commutativity and associativity.

The benefit of these systems is that it's often easier to interpret the geometric meaning of an algebraic expression, but the cost is that less of our intuition about manipulating numbers carries over to these expressions, because they obey some, but not all of the algebraic laws that numbers do (specifically, commutativity of multiplication is often dropped), and they may support fewer, more, or different algebraic operations compared to numbers.

Here's a quick concrete example:

In cartesian coordinates, the condition that three points in the plane with coordinates <span class="mathquill-embedded-latex">(o_x, o_y)</span>, <span class="mathquill-embedded-latex">(p_x, p_y)</span>, <span class="mathquill-embedded-latex">(q_x, q_y)</span> are co-linear is

<span class="display-latex">
  o_y p_x-o_x p_y-o_y q_x+o_x q_y-p_x q_y+p_y q_x = 0
</span>

If the points are instead given in polar coordinates, by <span class="mathquill-embedded-latex">(o_r, o_\theta)</span>, <span class="mathquill-embedded-latex">(p_r, p_\theta)</span>, <span class="mathquill-embedded-latex">(q_r, q_\theta)</span>, then the condition that they are co-linear is

<span class="display-latex">
o_r p_r \sin \left(o_{\theta }-p_{\theta }\right)-o_r q_r \sin \left(o_{\theta }-q_{\theta }\right)+p_r q_r \sin \left(p_{\theta }-q_{\theta }\right) = 0
</span>

These conditions look rather different, even though they have the same geometric content, and I don't think either of them would be particularly easy to interpret if you stumbled across one of them without context{%marginnote 'polar-colinearity' """I've never actually seen the polar coordinates colinearity condition before---I derived it for this post---so I'm quite sure that I wouldn't have recognized it if I stumbled across it out of the blue."""%}.

In contrast, in one geometric algebra model, the condition that three points specified by vectors <span class="mathquill-embedded-latex">p</span>, <span class="mathquill-embedded-latex">q</span>, and <span class="mathquill-embedded-latex">r</span> are colinear is

<span class="display-latex">
  p \wedge q \wedge r = 0
</span>

This is more concise, easier to interpret (if you're familiar with the model), and doesn't depend on any coordinate system that different people are free to choose differently. But the price is that the symbols aren't numbers, they're vectors, and the <span class="mathquill-embedded-latex">\wedge</span> operation is a kind of multiplication that isn't commutative, but instead satisfies

<span class="display-latex">
  p \wedge q = - q \wedge p
</span>

(that is, it's anti-commutative), for any vectors <span class="mathquill-embedded-latex">p</span> and <span class="mathquill-embedded-latex">q</span>.

I'm particularly interested in a related group of geometry modeling languages called Geometric Algebra. It's really just one algebraic system for working with vectors and their sums and products, but there are several different systems for modeling geometric objects and their relationships using this one algebraic language.

There's a wonderful book by Leo Dorst, Daniel Fontijne, and Stephen Mann called "Geometric Algebra for Computer Science" that explains 3 such models, each nested as a subset of the next, and their uses and relationships. In my opinion, this book is the best pedagogical introduction to the subject.

In the first model, the "vector space model," vectors represent translations, or distances along a direction, or directed magnitudes, or differences between points (these are all different ways of saying the same thing, or at least different aspects of the same thing). This model is very similar to the vector algebra that physics students learn (Gibbs vector algebra; dot products and cross products), but extends more naturally to more (and fewer) than 3 dimensions. The main weakness of this model is that it doesn't really have great direct representation of geometric objects like points, lines, and planes [[say more here]].

In the second model, the "homogenous model", n+1 dimensional vectors represent points in n dimensions.

[[The conformal model; n+2 dimensions; natural representations of circles and sphere, and also rotations]]

-----

A simpler mapping between conformal geometric algebra, and Gunn's projective geometric algebra.

Conformal geometric algebra; spanned by

n_0, e_1, ... e_n, n_\infty

Vectors represent spheres, or points, which are seen as equivalent to 0-radius spheres.

Projective geometric algebra is spanned by

e_1, ..., e_n, n_\infty

and now vectors represent hyperplanes
