---
layout: post
title: Sunset Geometry
---

Robert Vanderbei has written a [beautiful](http://orfe.princeton.edu/~rvdb/tex/sunset/ms.pdf) [series](http://orfe.princeton.edu/~rvdb/tex/sunset/34-39.OPN.1108twoup.pdf) of [articles](http://orfe.princeton.edu/~rvdb/tex/sunset/sunset.pdf) and [talks](http://orfe.princeton.edu/u/rvdb/tex/talks/sunset/sunsetTalk_RutgersREU_small.pdf) about a method for finding the radius of the earth based on a single photograph of a sunset over a large, calm lake.

Vanderbei's analysis is an elegant and subtle exercise in classical trigonometry. In this post, I would like to present an alternative analysis in a different language: Geometric Algebra. I believe that geometric algebra is a more powerful system for formulating and solving trigonometry problems than the classical "lengths and angles" approach, and it deserves to be better known. Vanderbei's sunset problem is simple to understand and challenging to solve, so it makes a nice benchmark.

Here's Vanderbei's sunset problem. If the earth was flat, photographs of the sun setting over water would look like this:

<div>
<img alt="Flat earth sunset diagram" src="/img/sunset-flat.png"/>
</div>

Notice that the reflection dips just as far below the horizon as the sun peaks above it.

Actual photographs of the sun setting over calm water ([like Vanderbei's](http://www.princeton.edu/~rvdb/Sunset-crop-lossless.jpg)) look more like this:

<div>
<img alt="Round earth sunset diagram" src="/img/sunset-round.png"/>
</div>

<!--more-->

Notice the shortened reflection. This happens because of the curvature of the earth, and by measuring the size of this effect, it is possible to infer the ratio of the earth's radius to the camera's height above the water{%marginnote 'Al-Biruni' """The main virtue of Vanderbei's method is that the evidence is so directly visual (and that you can collect it with a smart phone on vacation). If you want to make a simpler and better measurement with a similar flavor, [climb a mountain and use an astrolabe](https://en.wikipedia.org/wiki/History_of_geodesy#Al-Biruni); the math is simpler and the measurement will be more accurate."""%}.

Vanderbei calls the angle of the sun above the horizon <span class="mathquill-embedded-latex">\alpha</span>, and the angle of the sun's reflection below the horizon <span class="mathquill-embedded-latex">\beta</span>. With geometric algebra at our disposal, it's often algebraically simpler to work with unit directions than angles, so I will also label unit directions from the camera to the top of the sun, <span class="mathquill-embedded-latex">s</span>, the horizon, <span class="mathquill-embedded-latex">t</span>, and the bottom of the sun's reflection from the water, <span class="mathquill-embedded-latex">w</span>.

<div>
<img alt="Labeled round earth sunset diagram" src="/img/sunset-round-labeled.png"/>
</div>

To analyze this problem, it's helpful to consider a side view:

<div>
<img alt="Side view sunset diagram" src="/img/sunset-side-view.png"/>
</div>

There are two important triangles in this diagram: the triangle formed by the center of the earth, the camera, and the horizon (drawn in red), and the triangle formed by the center of the earth, the camera, and the reflection point where the top of the sun reflects off the water (drawn in green).

#### The triangle equations

Triangles have a very simple algebraic representation in terms of vectors{%marginnote 'notation' """In this post, I am following the common geometric algebra convention of writing vectors as plain, lower-case letters, and using Greek letters for scalars. This takes a little getting used to if you are accustomed to bold face or over-arrows for vectors, but skipping all the decorations makes it simpler to work with lots of vectors."""%}:

<span class="display-latex">
  \begin{aligned*}
  r_1 - d_1 = p \\\\
  r_2 - d_2 = p
  \end{aligned*}
</span>

These simple sums of vectors subsume all the information about the relationships of lengths and angles that is expressed in classical trigonometry through "soh-cah-toa", the triangle postulate (sum of interior angles is 180 degrees), the Pythagorean theorem, and the laws of cosines and sines. Quite an improvement.

It will be useful to re-express <span class="mathquill-embedded-latex">d_1</span> and <span class="mathquill-embedded-latex">d_2</span> in terms of the unit directions defined previously in order to relate other vectors to known directions:

<span class="math-label">(1a)</span> <span class="display-latex">r_1 - |d_1|t = p</span>

<span class="math-label">(1b)</span> <span class="display-latex">r_2 - |d_2|w = p</span>

In other words, <span class="mathquill-embedded-latex">d_1</span> is directed toward the horizon, and <span class="mathquill-embedded-latex">d_2</span> is directed toward the bottom of the reflection from the water.

Besides these triangles, there are a few salient geometric facts:

#### The horizon condition

The line of sight to the horizon is tangent to the earth at the horizon, and is therefore perpendicular to the radius of the earth through the horizon.

<span class="math-label">(2)</span> <span class="display-latex">r_1 \cdot d_1 = r_1 \cdot t = 0</span>

#### The reflection condition

In terms of angles, this is expressed as "angle of incidence equals angle of reflection". In terms of vectors, it can be restated as

<span class="display-latex">r_2 \cdot s = - r_2 \cdot w</span>

or

<span class="math-label">(3)</span> <span class="display-latex">r_2 \cdot (s + w) = 0</span>

#### Known lengths

We know the lengths of some of these vectors in terms of the earth's radius, <span class="mathquill-embedded-latex">\rho</span>, and the height of the camera above the shoreline, <span class="mathquill-embedded-latex">\delta</span>,

<span class="math-label">(4a)</span> <span class="display-latex">r_1^2 = r_2^2 = \rho^2</span>

<span class="math-label">(4b)</span> <span class="display-latex">p^2 = (\rho + \delta)^2</span>

<span class="math-label">(4c)</span> <span class="display-latex">s^2 = w^2 = t^2 = 1</span>

Squaring both sides of the first triangle equation (1a), and using the horizon condition (2) (or equivalently, using the Pythagorean theorem) also allows finding the length of <span class="mathquill-embedded-latex">d_1</span>:

<span class="math-label">(4d)</span> <span class="display-latex">d_1^2 = p^2 - r_1^2 = (\rho + \delta)^2 - \rho^2</span>

Equations (1-4) contain all of the geometrical information{%marginnote 'distant-sun' """I assumed one other important piece of geometrical information by writting \"s\" in two places on the side-view diagram. This corresponds to the (excellent) approximation that the sun is very far away compared to other lengths."""%} needed to solve algebraically for the Earth's radius, <span class="mathquill-embedded-latex">\rho</span>, in terms of the given angles/directions (<span class="mathquill-embedded-latex">\alpha</span> and <span class="mathquill-embedded-latex">\beta</span>, or <span class="mathquill-embedded-latex">s</span>, <span class="mathquill-embedded-latex">w</span>, and <span class="mathquill-embedded-latex">t</span>) and the height of the camera above the shoreline, <span class="mathquill-embedded-latex">\delta</span>.

### Introducing Geometric Algebra

So far, I have formulated everything in terms of vector algebra that should look familiar to students of physics or engineering (Gibbs vector algebra). To actually solve the equations, I will use a few additional notions from geometric algebra.

Geometric algebra is the answer to the question "what if I could multiply and divide by vectors?" It introduces a new associative (but non-commutative) invertible product between vectors: the geometric product. The geometric product between vectors <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span> is simply written <span class="mathquill-embedded-latex">ab</span>. The geometric product of a vector with itself equals a scalar (the square of the length of the vector),

<span class="display-latex">aa = a^2 = |a|^2</span>

This fact, combined with associativity and the other familiar rules for multiplication, is enough to define the geometric product uniquely.

The symmetric and anti-symmetric parts of the geometric product have important geometric meaning, and are traditionally given their own special symbols{%marginnote 'commutation' """Physicists may be mystified to realize that, based on this definition of the geometric product, parallel vectors commute, and perpendicular vectors *anti*-commute. What else does that remind you of?"""%}:

<span class="display-latex">
  \begin{aligned*}
  (ab + ba)/2 & = a \cdot b  = b \cdot a \\\\
  (ab - ba)/2 & = a \wedge b = - b \wedge a
  \end{aligned*}
</span>

I will assume that the dot product, <span class="mathquill-embedded-latex">a \cdot b</span>, is familiar: it is related to the projection of one vector onto another, and proportional to the cosine of the angle between them.

The wedge product, <span class="mathquill-embedded-latex">a \wedge b</span>, is probably only familiar if you have studied differential forms (or geometric algebra, of course), but it is very similar to the more familiar cross product, <span class="mathquill-embedded-latex">a \times b</span>. It represents the directed area of the parallelogram spanned by two vectors, and is proportional to the sine of the angle between them{%marginnote 'wedge-product' """Anti-symmetry and bi-linearity are exactly what is needed to represent area: a vector spans no area with itself (anti-symmetry), and the area of a parallelogram scales linearly with the lengths of each of its legs (bi-linearity).<br /><br />The wedge product is extremely useful in linear algebra because it represents linear subspaces spanned by any number of vectors in a way that can be manipulated algebraically."""%}. Whereas the cross product represents directed area by a vector orthogonal to the area (a trick that works only in 3 dimensions), the wedge product represents a directed area by a different kind of object called a \"bivector.\" The wedge product is associative (like the geometric product, but unlike the cross or dot products), and the wedge product of more than two vectors builds objects of higher \"grades.\" The wedge product between 3 vectors is a trivector representing a directed volume (of the parallelepiped spanned by them), and the wedge product between k different vectors is a k-vector representing a directed k-dimensional volume (which is always zero in spaces of dimension less than k).

We can turn these definitions around to write the geometric product in terms of the dot and wedge products,

<span class="display-latex">ab = a \cdot b + a \wedge b = \left\langle a b \right\rangle_0 + \left\langle a b \right\rangle_2</span>

where <span class="mathquill-embedded-latex">\left\langle a b \right\rangle_0</span> and <span class="mathquill-embedded-latex">\left\langle a b \right\rangle_2</span> are notations for "the scalar part" and "the bivector part".

There is a strange thing about this object: it represents the sum of two different "kinds of things," a scalar and a bivector. But this should be no more troubling than the fact that a complex number represents the sum of a "real number" and an "imaginary number," (in fact, there is an extremely close relationship between complex numbers and the geometric product of two vectors). With experience, it becomes clear that a sum of a scalar and a bivector is exactly what is needed to represent the product of two vectors in an associative, invertible way.

The geometric product gives us two new super powers when working with vector equations:

#### Solving equations involving products of vectors.

Given the equation for products of vectors

<span class="display-latex">ab = cd</span>

if <span class="mathquill-embedded-latex">b</span> is known, we can solve for <span class="mathquill-embedded-latex">a</span> by right-multiplying by <span class="mathquill-embedded-latex">b^{-1}</span> (i.e. dividing by <span class="mathquill-embedded-latex">b</span>).

<span class="display-latex">a = cdb^{-1}</span>

<span class="mathquill-embedded-latex">b^{-1}</span> is well-defined by demanding

<span class="display-latex">bb^{-1} = 1</span>

left-multiplying by <span class="mathquill-embedded-latex">b</span>

<span class="display-latex">b^2 b^{-1} = b</span>

and dividing through by the scalar <span class="mathquill-embedded-latex">b^2</span>

<span class="display-latex">b^{-1} = \frac{b}{b^2}</span>

Contrast this to the dot product and the cross/wedge product. In general, even when <span class="mathquill-embedded-latex">b</span> is known, it is not possible to uniquely solve any one of the following equations for <span class="mathquill-embedded-latex">a</span>.

<span class="display-latex">
  \begin{aligned*}
  a \cdot b & = c \cdot d \\\\
  a \wedge b & = c \wedge d \\\\
  a \times b & = c \times d
  \end{aligned*}
</span>

The first equation only determines the part of <span class="mathquill-embedded-latex">a</span> that is parallel to <span class="mathquill-embedded-latex">b</span>, and the second two equations only determine the part of <span class="mathquill-embedded-latex">a</span> that is perpendicular to <span class="mathquill-embedded-latex">b</span>. You need both of these to solve for all of <span class="mathquill-embedded-latex">a</span>, and that's what the single geometric product gives you.

#### Transitive relationships between vectors

It frequently occurs that we know the relationships of two vectors <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span> to a third vector <span class="mathquill-embedded-latex">c</span>, and we would like to use this information to determine the relationship between <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span>. Algebraically, we can take the unknown product

<span class="display-latex">ab<span class="display-latex">

and insert the identity

<span class="display-latex">cc^{-1} = \frac{cc}{|c|^2} = 1<span class="display-latex">

between the factors and re-associate

<span class="display-latex">ab = a \left(cc^{-1}\right) b = \left(a c\right) \left(c^{-1} b\right) = \frac{1}{|c|^2}(ac)(cb)<span class="display-latex">

thus re-expressing the unknown product <span class="mathquill-embedded-latex">ab</span> in terms of the known products products <span class="mathquill-embedded-latex">ac</span> and <span class="mathquill-embedded-latex">cb</span>.

Because <span class="mathquill-embedded-latex">cc^{-1} = 1</span>, we can insert it anywhere that it's convenient in any product of vectors. This has the same practical effect as resolving vectors into parts parallel and perpendicular to c. This is an example of a very general technique that shows up in many forms throughout mathematics: inserting an identity to resolve a product into simpler pieces.

We will use this trick twice below at a critical moment in solving the sunset problem.

### Reformulating the horizon and reflection conditions

In order to make efficient use of geometric algebra's tools, it is useful to reformulate equations (2) and (3) (the horizon and  reflection conditions) in terms of the geometric product instead of the dot product.

#### Horizon condition

Consider the geometric product

<span class="display-latex">r_1 t = r_1 \cdot t + r_1 \wedge t = r_1 \wedge t</span>

where the first equality is an expression of the general vector identity <span class="mathquill-embedded-latex">ab = a \cdot b + a \wedge b</span>, and the second equality follows from <span class="mathquill-embedded-latex">r_1 \cdot t = 0</span>, our previous form of the horizon condition (2).

In two dimensions, there is only one unit bivector, called <span class="mathquill-embedded-latex">I</span>, spanned by any two orthogonal unit vectors <span class="mathquill-embedded-latex">e_1</span> and <span class="mathquill-embedded-latex">e_2</span>:

<span class="display-latex">e_1 \wedge e_2 = e_1 e_2 = I</span>

Therefore <span class="mathquill-embedded-latex">r_1 \wedge t</span> is proportional to <span class="mathquill-embedded-latex">I</span>, and since <span class="mathquill-embedded-latex">r_1</span> and <span class="mathquill-embedded-latex">t</span> are orthogonal, we can write

<span class="math-label">(2')</span> <span class="display-latex">r_1 t = r_1 \wedge t = |r_1||t|I = |r_1|I = \rho I</span>

#### Reflection Condition

Our previous version of the reflection condition (3) also has the form of an orthogonality condition:

<span class="display-latex">r_2 \cdot (s + w) = 0</span>

so, similarly to the way we rewrote the horizon condition, we can rewrite this in terms of the geometric product as {%marginnote 'reflections' """There's another way to write reflections in geometric algebra that shows up more commonly: <span class=\"mathquill-embedded-latex\">r_2 s = - w r_2</span> or <span class=\"mathquill-embedded-latex\">s = - r_2^{-1} w r_2 = - r_2 w r_2^{-1} </span>.<br /><br />This other form is very useful for *composing* reflections into rotations, or *factoring* rotations into reflections, but the form we use here involving forming an orthogonal vector will be more convenient when it comes time to solve for <span class=\"mathquill-embedded-latex\">r_2</span>.""" %}

<span class="display-latex">r_2 (s + w) = |r_2| |s + w| I</span>

It will simplify later algebra to define a new unit vector based on this equation:

<span class="display-latex">
  g \equiv \frac{ s + w }{|s + w|}
</span>

<span class="display-latex">g^2 = 1</span>

so that the reflection condition becomes

<span class="math-label">(3')</span> <span class="display-latex">r_2 g = |r_2| |g| I = |r_2| I = \rho I</span>

### Solving for the Earth's radius

Now that we have rewritten our main geometric conditions in terms of the geometric product instead of the dot product, we are ready to solve the triangle equations.

First, eliminate <span class="mathquill-embedded-latex">p</span> and set the left hand sides of (1a) and (1b) equal to one another{%marginnote 'quadrilateral-equation' """This equation involving a sum of four vectors is a \"quadrilateral equation\" in exactly the same sense as our earlier triangle equations: it expresses the fact that the red vectors and green vectors in our diagram form a quadrilateral."""%}:

<span class="display-latex">r_1 - |d_1| t = r_2 - |d_2| w</span>

The magnitude <span class="mathquill-embedded-latex">|d_2|</span> is unknown, so we could proceed by solving for it, but it is more efficient to simply eliminate it in the following way. First, multiply both sides of the equation on the right by <span class="mathquill-embedded-latex">w</span>:

<span class="display-latex">r_1 w - |d_1| t w = r_2 w - |d_2| w^2</span>

Now we can use "grade separation" to separately consider the scalar and bivector parts of this equation. Since <span class="mathquill-embedded-latex">w^2</span> is a scalar, the <span class="mathquill-embedded-latex">|d_2|</span> dependence drops out of the bivector part:

<span class="display-latex">\left\langle r_1 w - |d_1| t w \right\rangle_2 = \left\langle r_2 w \right\rangle_2</span>

Rearranging to isolate the <span class="mathquill-embedded-latex">|d_1|</span> term gives

<span class="display-latex">|d_1| \left\langle t w \right\rangle_2 = \left\langle r_1 w - r_2 w \right\rangle_2</span>

We can now take advantage of the horizon and reflection conditions to rewrite the unknown products <span class="mathquill-embedded-latex"> r_1 w</span> and <span class="mathquill-embedded-latex">r_2 w</span> in terms of known products by inserting factors of <span class="mathquill-embedded-latex">t t = 1</span> and <span class="mathquill-embedded-latex">g g = 1</span> and re-associating (this is the second "super power" from the introduction above):

<span class="display-latex">|d_1|\left\langle t w \right\rangle_2 = \left\langle r_1 t t w -  r_2 g g w \right\rangle_2</span>

We can simplify both <span class="mathquill-embedded-latex">r_1 t</span> and <span class="mathquill-embedded-latex">r_2 g</span> to <span class="mathquill-embedded-latex">\rho I</span> using the horizon (2') and reflection (3') conditions:

<span class="display-latex">|d_1| \left\langle t w \right\rangle_2 = \rho \left\langle I t w - I g w \right\rangle_2</span>

Now expanding the products of vectors in geometric products into dot and wedge product gives

<span class="display-latex">|d_1| t \wedge w = \rho I (g \cdot w - t \cdot w)</span>

where, I have dropped terms like <span class="mathquill-embedded-latex">\left\langle t \cdot w\right\rangle_2 = 0</span> and <span class="mathquill-embedded-latex">\left\langle I (t \wedge w - g \wedge w)\right\rangle_2 = 0</span> because they contain no part with grade 2.

We can take advantage of the known length <span class="mathquill-embedded-latex">|d_1|^2</span> derived as (4d) by taking the magnitude squared of both sides:

<span class="display-latex">
  \begin{aligned*}
  |d_1|^2 |t \wedge w|^2 & = \rho^2 \left(g \cdot w - t \cdot w\right)^2 \\\\
  |d_1|^2 & = \rho^2 \left[ \frac{\left(g \cdot w - t \cdot w\right)^2}{|t \wedge w|^2}\right]
  \end{aligned*}
</span>

To simplify further algebra, for the term in brackets, introduce

<span class="display-latex">\epsilon^2 \equiv \frac{(g \cdot w - t \cdot w)^2}{|t \wedge w|^2}</span>

which is written entirely in terms of known products of directions. This gives

<span class="display-latex">|d_1|^2 = \rho^2 \epsilon^2</span>

Now substituting from (4d) for <span class="mathquill-embedded-latex">|d_1|^2</span> gives

<span class="display-latex">(\rho + \delta)^2 - \rho^2 = \rho^2 \epsilon^2</span>

and dividing through by <span class="mathquill-embedded-latex">\rho^2</span> gives

<span class="display-latex">\left(1 + \frac{\delta}{\rho}\right)^2 - 1 = \epsilon^2</span>

and finally, we are able to solve for <span class="mathquill-embedded-latex">\rho</span>, the radius of the earth{%marginnote 'positive-root' """I (and Vanderbei) have chosen a positive square root here. What, if anything, does the negative square root represent?"""%}

<span class="math-label">(5)</span> <span class="display-latex">\rho = \frac{\delta}{\sqrt{1 + \epsilon^2} - 1}</span>

We can recover Vanderbei's final answer by rewriting <span class="mathquill-embedded-latex">\epsilon^2</span> in terms of angles using the following relationships:

<span class="display-latex">
  \begin{aligned*}
    t \cdot w & = \cos(\beta) \\\\
    t \wedge w & = \sin(\beta) I \\\\
    g \cdot w & = \cos(\gamma) = \cos\left(\frac{\alpha + \beta}{2}\right)
  \end{aligned*}
</span>

so

<span class='display-latex'>
\epsilon^2 = \frac{\left(\cos(\gamma) - \cos(\beta)\right)^2}{\sin(\beta)^2}
</span>

From this and (5), it is a simple exercise in trigonometric identities to recover the form given on slide 28 in [Vanderbei's talk](http://orfe.princeton.edu/u/rvdb/tex/talks/sunset/sunsetTalk_RutgersREU_small.pdf), but there are two better forms that I will show instead.

First, a small angle form.

Using the general approximations

<span class="display-latex">
  \begin{aligned*}
  \sqrt{1+x^2} &\approx 1 + x^2/2 &\mathrm{for}\quad x \ll 1 \\\\
  \sin{\theta} &\approx \theta &\mathrm{for}\quad \theta \ll 1 \\\\
  \cos{\theta} &\approx 1 - \theta^2/2 &\mathrm{for}\quad \theta \ll 1 \\\\
  \end{aligned*}
</span>

we can simplify (5) to

<span class="math-label">(5')</span> <span class="display-latex">\rho \approx \frac{2}{\epsilon^2}\delta \approx \frac{8\beta^2}{\left(\beta^2 - \gamma^2\right)^2} \delta</span>

The angles in Vanderbei's photo are quite small, so this approximation is accurate to better than one part in a million{%marginnote 'simpler-approximation' """It's also simpler than other small angle approximations previously given by Vanderbei."""%}. Since the uncertainty in the angles and camera height are about 10% each, this small angle approximation is certainly sufficient.

In fact, when calculating with rounded (floating point) arithmetic, the small angle form (5') is actually more accurate than the exact form given by Vanderbei. This counterintuitive fact occurs because the exact form suffers from "catastrophic cancellation," the result of subtracting approximately equal values that have been computed with rounding error.

We can get rid of one place such cancellation occurs by multiplying the numerator and denominator of our exact expression (5) by <span class="mathquill-embedded-latex">1 + \sqrt{1 + \epsilon^2}</span> to get

<span class="math-label">(5'')</span> <span class="display-latex">\rho = \frac{ \sqrt{ 1 + \epsilon^2 } + 1 }{\epsilon^2}\delta</span>

and we can get rid of another source of cancelation by replacing the difference of cosines in our expression for <span class="mathquill-embedded-latex">\epsilon^2</span> with a difference of sines using the general trigonometric identity{%marginnote 'versine' """This identity is related to the classical [Haversine Formula](https://en.wikipedia.org/wiki/Haversine_formula) from spherical trigonometry. Evelyn Lamb has written a wonderful blog post on this and other creatures in the zoo of [forgotten trigonometry functions](https://blogs.scientificamerican.com/roots-of-unity/10-secret-trig-functions-your-math-teachers-never-taught-you/)."""%}

<span class="display-latex">\cos(\theta) = 1-2\sin ^2\left(\frac{\theta}{2}\right)</span>

so that:

<span class="display-latex">\epsilon^2 = 4 \frac{\left(\sin^2\left(\frac{\gamma}{2}\right) - \sin^2\left(\frac{\beta}{2}\right)\right)^2}{\sin(\beta)^2}</span>

Plugging this expression for <span class="mathquill-embedded-latex">\epsilon^2</span> into the non-cancelling form for <span class="mathquill-embedded-latex">\rho</span> (5'') now allows computing <span class="mathquill-embedded-latex">\rho</span> without undue rounding issues.

To evaluate <span class="mathquill-embedded-latex">\rho</span> in terms of measured parameters, insert the following values into either (5') or (5'')

<span class="display-latex">
  \begin{aligned*}
    \alpha &= 69\ \mathrm{px} \cdot 0.5^{\circ}/317\ \mathrm{px} &=& 0.001899\ \mathrm{rad}\\\\
    \beta &= 29\ \mathrm{px} \cdot 0.5^{\circ}/317\ \mathrm{px}  &=& 0.0007983\ \mathrm{rad}\\\\
    \gamma &= \frac{\alpha + \beta}{2} &=& 0.001349\ \mathrm{rad}\\\\
    \epsilon^2 &= 5.482 \times 10^{-7} \\\\
    \delta &= 7\ \mathrm{ft} \\\\
    \rho &= 2.55 \times 10^{7}\ \mathrm{ft} &=& 4836\ \mathrm{mi}
  \end{aligned*}
</span>

This is 20% larger than the true value, 3960 mi{%marginnote 'rounding-error' """It's also different in the second digit from the answer [given by Vanderbei](http://orfe.princeton.edu/u/rvdb/tex/talks/sunset/sunsetTalk_RutgersREU_small.pdf) (slide 28). I think this is attributable to the \"catastrophic cancellation\" discussed above, combined with low precision calculation."""%}. Not too bad.

### Comparison to other systems

#### Classical trigonometry

At this point, perhaps you are thinking that I'm crazy to believe that the analysis above is simpler than doing classical trigonometry. We learned trigonometry in high school, and it wasn't all that hard, right? And the geometric algebra analysis involves a bunch of unfamiliar notations, keeping track of non-commuting multiplications, and the new geometric notion of "bivector{%marginnote 'super-powers' """On the other hand, it does give you algebraic super powers."""%}."

But the classical trigonometry analysis of this problem is *hard*. Harder than the trigonometry problems that you solved in high school. If you don't believe me, take a crack at solving it without referring to Vanderbei's analysis. Or even just follow along with [the talk](http://orfe.princeton.edu/u/rvdb/tex/talks/sunset/sunsetTalk_RutgersREU_small.pdf) and fill in all the algebra.

The subtlest part of Vanderbei's formulation of the problem involves noticing a non-trivial relationship between 4 angles:

<span class="display-latex">\phi + \beta = \theta + \gamma</span>

and the subtlest part of solving the problem involves solving the trigonometric equation{%marginnote 'trigonometric-equation' """This equation is transcendental in the angles, but turns out to be algebraic (quadratic) in <span class=\"mathquill-embedded-latex\">\\cos(\\phi)</span>."""%}

<span class="display-latex">\cos(\phi + \beta) = \cos(\phi)\cos(\gamma)</span>

for <span class="mathquill-embedded-latex">\cos(\phi)</span>.

Solving difficult trigonometry problems in the classical language tends to involve constantly moving back and forth between algebraic expressions and the diagrams. This is because the full relationships between lengths and angles as separate entities are much more complicated than the relationships between vectors, which keep information about magnitude and direction conveniently integrated together. For this reason, in classical analyses, much of the information about lengths and angles is typically left implicit in diagrams, rather than being written down in an explicitly algebraic form.

In contrast, in the geometric algebra formulation, once the (fairly simple) equations (1-4) were written down, the rest of the solution was entirely algebraic. It also did not involve invoking any laws for relationships between transcendental functions (<span class="mathquill-embedded-latex">\sin</span> and <span class="mathquill-embedded-latex">\cos</span>).

Besides classical trigonometry, there are a few other competing (and partially overlapping) algebraic systems for solving geometrical problems, and all of them are capable of solving this problem.

#### Gibbs Vector Algebra

You could stick to Gibbs' vector analysis (dot products and cross products), and use a cross product with <span class="mathquill-embedded-latex">w</span> to annihilate <span class="mathquill-embedded-latex">|d_2|</span> in a similar way that we used "grade separation". There is no explicitly algebraic analogue to our trick of inserting factors of <span class="mathquill-embedded-latex">gg = 1</span> and <span class="mathquill-embedded-latex">tt = 1</span> to relate unknown products of two vectors to known products with a third. Even so, you could split <span class="mathquill-embedded-latex">r_1</span> and <span class="mathquill-embedded-latex">r_2</span> into parts parallel and perpendicular to <span class="mathquill-embedded-latex">g</span> and <span class="mathquill-embedded-latex">t</span> and achieve essentially similar results, with a little bit more of the reasoning left in prose instead of algebra. The major deficiency of Gibbs' vector analysis is that the cross product is funny in 2D (because it returns an object that lives outside the plane), forces you to think about things like "pseudo-vectors{%marginnote 'pseudo-vectors' """pseudo-vectors are vectors that want to be bivectors."""%}" in 3D if you consider the behavior of the cross product under transformations, and doesn't work at all in more than 3 dimensions. But none of those problems is fatal here, and Gibbs' vector algebra is a good and efficient way to solve plane trigonometry problems. If you know it, use it.

#### Complex Numbers

Alternatively, you could use complex numbers, and this works very well for problems in the plane. Like geometric algebra, complex numbers provide an associative and invertible product between directed magnitudes in the plane, and there are analogues to all the algebraic tricks we used here. The following mapping is useful for understanding the relationship between systems:

<span class="display-latex">
  \begin{aligned*}
  a \cdot b &\longleftrightarrow \mathrm{Re}\left(a b^{\dagger}\right) \\\\
  a \wedge b &\longleftrightarrow \mathrm{Im}\left(a b^{\dagger}\right) \\\\
  a b &\longleftrightarrow a b^{\dagger}
  \end{aligned*}
</span>

The main deficiencies of complex numbers are that they don't extend well to three or more dimensions, and that they single out the real axis as a special direction in the plane in a way that isn't appropriate to problems with rotational symmetry. I also think there isn't as much of a culture of viewing and understanding complex numbers geometrically as there is for Gibbs vector analysis or geometric algebra. For example, did you know that if two complex numbers are oriented along orthogonal directions, then

<span class="display-latex">\mathrm{Re}\left(a b^{\dagger}\right) = 0</span>

This is an important geometric idea, but I only know it because it falls out of the mapping to geometric algebra.

#### Rational Trigonometry

NJ Wildberger has recently advocated a system of doing trigonometry called [Rational Trigonometry](https://en.wikipedia.org/wiki/Rational_trigonometry) that avoids all use of transcendental functions and many uses of the square root function. It's a pretty system with some definite merits, and I'd be interested to see someone analyze this problem with it.

Nevertheless, with geometric algebra, we were able to avoid all the same transcendental functions and square roots that Wildberger's system avoids, and geometric algebra extends more easily to more than two dimensions and is more thoroughly coordinate free. Rational trigonometry also has the same problem as classical trigonometry in that directions and magnitudes are represented and manipulated separately instead of integrated together as vectors.

I wonder what a Rational Trigonometer would do at the step where we use grade separation to annihilate <span class="mathquill-embedded-latex">|d_2|</span>, or at the steps where we insert factors of <span class="mathquill-embedded-latex">gg = 1</span> and <span class="mathquill-embedded-latex">tt = 1</span> to decompose unknown vectors against known vectors.

#### Pauli Matrices

Physicists use Pauli matrices to model 3D geometry in quantum mechanics problems. That system is completely isomorphic to the geometric algebra of 3D vectors, and can (and should) be used completely algebraically without ever introducing explicit matrix representations. But physicists rarely contemplate using Pauli matrices to solve non-quantum mechanical geometry problems because they believe that Pauli matrices are fundamentally quantum objects, somehow related to spin-1/2 particles like the electron. I have never seen someone try to use Pauli matrices to solve a trigonometry problem, but it can certainly be done.

### Conclusion

Through years of experience solving physics and computer graphics problems, I have slowly learned to be skeptical of angles. In many problems where your input data is given in terms of coordinates or lengths, it is possible to solve the problem completely without ever introducing angles, and in these cases, introducing angles adds algebraic complications and computational inefficiencies. In 3D, introducing angles also invites [gimbal lock](https://en.wikipedia.org/wiki/Gimbal_lock#Gimbal_lock_in_applied_mathematics).

This is not to say that angles are never useful; quite the contrary{%marginnote 'ga-angles' """Lest I give the wrong impression, geometric algebra is perfectly capable of handling angles, and in fact smoothly extends the way that complex numbers handle angles to more dimensions. It's just that it also allows you to avoid angles where they aren't fundamental.<br /><br />For example, geometric algebra's version of the Euler formula is<br /><br /><span class=\"mathquill-embedded-latex\">\\exp(I\\theta) = \\cos(\\theta) + \\sin(\\theta)I</span><br /><br />where <span class=\"mathquill-embedded-latex\">I</span> is any bivector, and in more than two dimensions, this formula is valid for each separate plane."""%}. They are exactly what you need for problems explicitly involving arc lengths on a circle (so especially problems involving rolling discs, cylinders, or spheres), or rotation at a uniform rate, or for interpolating continuously between known discrete rotations. They're also handy for making small angle approximations. However, for most problems involving areas, projections, reflections, and other simple relationships between vectors (in other words, most problems of *trigonometry*), angles are a distraction from more direct solutions.

To say it another way, Wildberger (author of Rational Trigonometry) emphasizes that you don't need to think about arc lengths on a circle to understand triangles, and on this point I agree with him completely. Of course, you do need to think about arc lengths on a circle to understand problems involving... arc lengths on a circle. For these problems, we should of course know and use angles.

Given this point of view, when I came across Vanderbei's sunset problem, I thought "there must be a simpler way with fewer angles." So this is my best attempt, using the most efficient tool I know.

If you didn't know any geometric algebra before, and you have made it here, thank you and congratulations. I hope I have at least made you more intrigued about its possibilities. It is impossible to teach someone geometric algebra in one blog post (just as it is impossible to teach someone classical trigonometry, complex numbers, or vector analysis in one blog post). The best places I know to learn more are:

* Hestenes' [Oersted Medal lecture](http://scitation.aip.org/content/aapt/journal/ajp/71/2/10.1119/1.1522700): ([PDF](http://geocalc.clas.asu.edu/pdf/OerstedMedalLecture.pdf)). This is a compact introduction by the founder of modern Geometric Algebra.
* Dorst, Fontijne, and Mann, [Geometric Algebra for Computer Science](https://www.amazon.com/Geometric-Algebra-Computer-Science-Revised/dp/0123749425). This book is by far the best pedagogical introduction I have seen if you want to actually learn how to calculate things. Unlike most other books on the subject, you don't need to know any physics (or even care about physics) to appreciate it.

Additionally, Hestenes' [website](http://geocalc.clas.asu.edu/) has many wonderful papers, and I also especially recommend two of his other books for more advanced readers:

* [Space-Time Algebra](https://www.amazon.com/Space-Time-Algebra-David-Hestenes/dp/3319184121). Hestenes' original book on the subject, a very compact, energetic, and wide-ranging presentation with some deep physical applications. Recently re-issued by Birkhäuser.
* [Clifford Algebra to Geometric Calculus](https://www.amazon.com/Clifford-Algebra-Geometric-Calculus-Mathematics/dp/9027725616). This is a challenging, advanced, and sometimes frustrating reference book, but it presents the subject in far more depth than it has been presented anywhere else. It used to be hard to find, and I suspect that few people have truly read it carefully. But it contains results that will probably continue to be rediscovered for decades. Chapter 7 on directed integration theory is especially notable: it contains extensions of most of the magical integral formulas of complex analysis (like Cauchy's integral formula) to any number of dimensions (and even to curved manifolds!).

Finally, thank you to Steven Strogatz for first [pointing me to this problem](https://twitter.com/stevenstrogatz/status/800136462612201472) (and a related, fiendishly difficult pure [trigonometric functions problem](https://twitter.com/stevenstrogatz/status/799740091795120133)). And of course, thank you to Robert Vanderbei for dreaming up this wonderful problem, and presenting it so beautifully.