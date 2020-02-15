---
layout: post
title: Geometry of Eigenvectors from Eigenvalues
---

* Physicists noticed a relationship between eigenvectors and Eigenvalues
* Sent it to Terry Tao who supplied several proofs and they published a note to the arXiv
* Natalie Wolchover wrote about it in Quanta and The Atlantic

On his blog, Tao gave a geometric proof, but it's pretty terse and it may not be so easy to see the geometry if you're not already familiar with this way of working.

The big idea here is that we can gain a better understanding of linear operators by considering how they act on whole subspaces considered together.

Some familiar ideas from linear algebra, like determinants and minors, become clearer when they are viewed this way.

Warmup: determinant

<div class="display-latex">
  \underline{f}(I) = \det(\underline{f}) I
</div>

or

<div class="display-latex">
  \det(\underline{f}) = I^{-1} \underline{f}(I)
</div>

(only if I is invertible...)

How to see a minor geometrically: it's the scalar product of the action of a linear operator on one subspace onto another subspace.

<div class="display-latex">
  B^{-1} * \underline{f}(A)
</div>

"First minor" is minor based on (n-1)-blades

<div class="display-latex">
  (b \rfloor I)^{-1} * \underline{f}(a \rfloor I)
</div>

or

<div class="display-latex">
  I^{-1} * \left(b^{-1} \wedge \underline{f}(a \rfloor I))
</div>

Now suppose <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span> are basis vectors:

<div class="display-latex">
  I^{-1} \left(e_j \wedge \underline{f}(e_i \rfloor I) \right)
</div>

Can see this as instruction to replace the i'th column of a matrix with the jth basis vector, and then form the determinant.

A linear operator is singular if there's a vector <span class="mathquill-embedded-latex">v</span> s.t.

<div class="display-latex">
  \underline{f}(v) = 0
</div>

One geometrical consequence of this is that the operator maps every (n-1)-blade into the same subspace:

This is really the fact that will drive everything we're about to do.

If we have an operator that is not singular, but we know an eigenvalue of it, we can make a singular operator from it by subtracting off a scaled identity:

<div class="display-latex">
  \underline{f_\lambda}(x) = \underline{f}(x) - \lambda x
</div>

so that if

<div class="display-latex">
  \underline{f}(v) = \lambda v
</div>

then

<div class="display-latex">
  \underline{f_\lambda}(v) = 0
</div>

Now let's consider the action of a singular operator <span class="mathquill-embedded-latex">\underline{f_\lambda}</span> on an (n-1)-blade:

<div class="display-latex">
  \begin{aligned}
  &\underline{f_\lambda}(a \rfloor I) \\
  &= \underline{f_\lambda}(a \rfloor (vv^{-1}I)) \\
  &= \underline{f_\lambda}(a \rfloor (v \wedge (v^{-1} \rfloor I))) \\
  &= \underline{f_\lambda}((a \rfloor v) (v^{-1} \rfloor I)) + v \wedge (a \rfloor (v^{-1} \rfloor I) ))  \\
  &= (a \rfloor v) \underline{f_\lambda}( v^{-1} \rfloor I) + \underline{f_\lambda}(v) \wedge \underline{f_\lambda}(a \rfloor (v^{-1} \rfloor I))\\
  &= (a \rfloor v) \underline{f_\lambda}( v^{-1} \rfloor I)
  \end{aligned}
</div>

TODO explain how to go from lines 2-3

or in other words,

We can put this in terms of minors by wedging both sides with an arbitrary vector <span class="mathquill-embedded-latex">b</span> and left-multiplying by <span class="mathquill-embedded-latex">I^{-1}</span>

<div class="display-latex">
  I^{-1} (b \wedge \underline{f_\lambda}(a \rfloor I)) = a \rfloor v [I^{-1} b \wedge \underline{f_\lambda}( v^{-1} \rfloor I)]
</div>

The term in brackets on the right hand side is a number that is independent of <span class="mathquill-embedded-latex">a</span>. Since the overall scale of the vector v is undetermined, we can absorb this term as a scale factor for v to get

<div class="display-latex">
  a \rfloor v = I^{-1} (b \wedge \underline{f_\lambda}(a \rfloor I))
</div>

Now if we substitute in coordinate vectors for <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span>, we can determine the coordinates of <span class="mathquill-embedded-latex">v</span> as


<div class="display-latex">
  v_i = e_i \rfloor v = I^{-1} (e_j \wedge \underline{f_\lambda}(e_i \rfloor I))
</div>

which gives the coordinates of v as a column of minors of a matrix.

If we want a normalized eigenvector, we can simply normalize at the end:

<div class="display-latex">
  \hat{v} = \frac{v}{|v|}
</div>

This result has the advantage that it does not require the matrix to by symmetric or hermitian. It also gives the signs/phases of the coordinates of the eigenvector, and not just their magnitude.

(Connect this to known results?)

To get the original result, we will evaluate the proportionality factor in brackets instead of neglecting it. In order to do this, we will need to assume that <span class="mathquill-embedded-latex">\underline{f}</span> is self-adjoint, so that

<div class="display-latex">
  \underline{f}(a) \cdot b = a \cdot \underline{f}(b)
</div>

for any vectors <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span>.

This immediately implies that there is a complete set of orthogonal eigenvectors <span class="mathquill-embedded-latex">v_i</span> with

<div class="display-latex">
  \underline{f}(v_i) = \lambda_i v_i
</div>

and

<div class="display-latex">
  v_i \cdot v_j = \delta_{ij}
</div>

so that

<div class="display-latex">
  I = v_1 \wedge \ldots \wedge v_n
</div>

and

<div class="display-latex">
  v_1 \cdot I = v_2 \wedge \ldots \wedge v_n
</div>

and

<div class="display-latex">
  \begin{aligned}
  & \underline{f}(v_1 \cdot I) \\
  & = \underline{f}(v_2) \wedge \ldots \wedge \underline{f}(v_n) \\
  & = \Lambda v_2 \wedge \ldots \wedge v_n \\
  & = \Lambda v_1 \cdot I
  \end{aligned}
</div>

where

<div class="display-latex">
  \Lambda = \lambda_2 \ldots \lambda_n
</div>


Then we may write

<div class="display-latex">
  \begin{aligned}
  \underline{f}(a \cdot I) = (a \cdot v) \underline{f}(v \cdot I) \\
  = (a \cdot v) \Lambda v \cdot I
  \end{aligned}
</div>

We can make this an equation in terms of minors by wedging both sides with a vector <span class="mathquill-embedded-latex">b</span> and multiplying by <span class="mathquill-embedded-latex">I^{-1}</span>

<div class="display-latex">
  \begin{aligned}
  & \underline{f}(a \cdot I) \wedge b \\
  & = a \cdot v \Lambda (v \cdot I) \wedge b \\
  & = a \cdot v \Lambda v \cdot b I
  \end{aligned}
</div>

TODO be careful about signs

or, dividing through by <span class="mathquill-embedded-latex">\Lambda I</span>

<div class="display-latex">
  a \cdot v v \cdot b = \frac{\underline{f}(a \cdot I) \wedge b}{\Lambda I}
</div>

If we take <span class="mathquill-embedded-latex">b=a</span>, we recover

<div class="display-latex">
  (a \cdot v)^2 = \frac{\underline{f}(a \cdot I) \wedge a}{\Lambda I}
</div>

and if <span class="mathquill-embedded-latex">a</span> is a basis vector, the numerator is a diagonal minor, which can be written as a product of eigenvalues of the minor.

## Comments about the physics

* When might you have eigenvalues of a matrix and all of its diagonal minors without having the elements of the matrix?
* That's not quite the situation the physicists are in. They do have all the matrix elements. They'd like to have a symbolic form for the eigenvectors and eigenvalues, but the symbolic form is messy because it involves complicated combinations of the roots of a cubic equation. They have a good approximation of the eigenvalues of the full matrix, and they'd like to leverage this approximation to get a tidier symbolic form.
* Since they have the matrix elements, and they're only interested in 2-by-2 minors, it's actually easier to compute determinants of minors than to compute their eigenvalues, whether approximate or exact.
* Why don't they care about the phases of the eigenvalues?
* Why do they care about a symbolic form of the eigenvectors? Why not just plug in numerical values for the matrix elements and compute the eigenvectors numerically? It's only a 3 by 3 matrix...

## Appendix

* Prove that self-adjointness implies eigenvectors are orthogonal

## Appendix

* Relationship of self-adjoint and hermitian. Redo proof using conjugated dot product.