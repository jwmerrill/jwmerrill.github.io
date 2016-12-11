---
layout: post
title: Sunset Geometry
---

Robert Vanderbei has written a [beautiful](http://orfe.princeton.edu/~rvdb/tex/sunset/ms.pdf) [series](http://orfe.princeton.edu/~rvdb/tex/sunset/34-39.OPN.1108twoup.pdf) of [articles](http://orfe.princeton.edu/~rvdb/tex/sunset/sunset.pdf) and [talks](http://orfe.princeton.edu/u/rvdb/tex/talks/sunset/sunsetTalk_RutgersREU_small.pdf) about a method for finding the radius of the earth based on a single photograph of a sunset over a large, calm lake.

Vanderbei's analysis is an elegant and subtle exercise in classical trigonometry. In this post, I would like to provide an alternative analysis in a different language: Geometric Algebra. I believe that geometric algebra is a more powerful system for formulating and solving trigonometry problems than the classical "lengths and angles" approach, and it deserves to be better known. Vanderbei's sunset problem is simple to understand and challenging to solve, so it makes a nice benchmark.

Here's Vanderbei's sunset problem. If the earth was flat, photographs of the sun setting over water would look like this:

<div>
<img alt="Flat earth sunset diagram" src="/img/sunset-flat.png"/>
</div>

Notice that the reflection dips just as far below the horizon as the actual sun peaks above it.

Actual photographs of the sun setting over calm water ([like Vanderbei's](http://www.princeton.edu/~rvdb/Sunset-crop-lossless.jpg)) look more like this:

<div>
<img alt="Round earth sunset diagram" src="/img/sunset-round.png"/>
</div>

Notice the shortened reflection. This happens because of the curvature of the earth, and by measuring the size of this effect, it's possible to infer the ratio of the earth's radius to the camera's height above the water{%marginnote 'Al-Biruni' """The main virtue of Vanderbei's method is that the evidence is so directly visual (and that you can collect it with a smart phone on vacation). If you want to make a simpler and better measurement with a similar flavor, [climb a mountain and use an astrolabe](https://en.wikipedia.org/wiki/History_of_geodesy#Al-Biruni); the math is simpler and the measurement will be more accurate."""%}.

Vanderbei calls the angle of the sun above the horizon <span class="mathquill-embedded-latex">\alpha</span>, and the angle of the sun below the horizon <span class="mathquill-embedded-latex">\beta</span>. With geometric algebra at our disposal, it's often algebraically simpler to work with unit directions than angles, so I will also label unit directions from the camera to the top of the sun, <span class="mathquill-embedded-latex">s</span>, the horizon, <span class="mathquill-embedded-latex">t</span>, and the bottom of the sun's reflection from the water, <span class="mathquill-embedded-latex">w</span>.

<div>
<img alt="Labeled round earth sunset diagram" src="/img/sunset-round-labeled.png"/>
</div>

To analyze this problem, it's helpful to consider a side view:

<div>
<img alt="Side view sunset diagram" src="/img/sunset-side-view.png"/>
</div>

There are two important triangles in this diagram: the triangle formed by the center of the earth, the camera, and the horizon (drawn in red), and the triangle formed by the center of the earth, the camera, and the reflection point where the top of the sun reflects off the water (drawn in green).

#### The triangle equations

Triangles have a very simple algebraic representation in terms of vectors{%marginnote 'notation' """In this post, I am following the common geometric algebra notational convention of writing vectors as plain, lower-case letters, and using greek letters for scalars. This takes a little getting used to if you are accustomed to bold face or over-arrows for vectors, but skipping all the decorations makes it simpler to work with lots of vectors."""%}:

<span class="display-latex">r_1 - d_1 = p</span>

<span class="display-latex">r_2 - d_2 = p</span>

These simple sums of vectors subsume all the information about the relationships of lengths and angles that is expressed in classical trigonometry through "soh-cah-toa", the "triangle postulate" (sum of interior angles is 180 degrees), the Pythagorean theorem, and the laws of cosines and sines.

It will be useful to re-express <span class="mathquill-embedded-latex">d_1</span> and <span class="mathquill-embedded-latex">d_2</span> in terms of the unit directions defined previously in order to relate vectors to known angles:

<span class="math-label">(1a)</span> <span class="display-latex">r_1 - |d_1|t = p</span>

<span class="math-label">(1b)</span> <span class="display-latex">r_2 - |d_2|w = p</span>

In other words, <span class="mathquill-embedded-latex">d_1</span> is directed toward the horizon, and <span class="mathquill-embedded-latex">d_2</span> is directed toward the bottom of the reflection from the water.

Besides these triangles, there are a few salient geometric facts:

#### The horizon condition

The line of sight to the horizon is tangent to the earth at the horizon, and is therefore perpendicular to the radius of the earth through the horizon.

<span class="math-label">(2)</span> <span class="display-latex">r_1 \cdot s = 0</span>

#### The reflection condition

In terms of angles, this is expressed as "angle of incidence equals angle of reflection". In terms of vectors, it can be restated as

<span class="math-label">(3)</span> <span class="display-latex">r_2 \cdot s = - r_2 \cdot w</span>

#### Known lengths

We know the lengths of some of these vectors in terms of the earth's radius, <span class="mathquill-embedded-latex">\rho</span> and the height of the camera above the shoreline, <span class="mathquill-embedded-latex">\delta</span>

<span class="math-label">(4a)</span> <span class="display-latex">r_1^2 = r_2^2 = \rho^2</span>

<span class="math-label">(4b)</span> <span class="display-latex">p^2 = (\rho + \delta)^2</span>

<span class="math-label">(4c)</span> <span class="display-latex">s^2 = w^2 = t^2 = 1</span>

Squaring both sides of the first triangle equation (1a), and using the horizon condition (or equivalently, using the Pythagorean theorem) also allows finding the length of <span class="mathquill-embedded-latex">d_1</span>:

<span class="math-label">(4d)</span> <span class="display-latex">d_1^2 = p^2 - r_1^2 = (\rho + \delta)^2 - \rho^2</span>

Equations (1-4) contain all of the geometrical information{%marginnote 'distant-sun' """I assumed one other important piece of geometrical information by writting \"s\" in two places on the side-view diagram. This corresponds to the (excellent) approximation that the sun is very far away compared to other lengths."""%} needed to solve algebraically for the Earth's radius, <span class="mathquill-embedded-latex">\rho</span>, in terms of the given angles/directions (<span class="mathquill-embedded-latex">\alpha</span> and <span class="mathquill-embedded-latex">\beta</span>, or <span class="mathquill-embedded-latex">s</span>, <span class="mathquill-embedded-latex">w</span>, and <span class="mathquill-embedded-latex">t</span>) and the height of the camera above the shoreline, <span class="mathquill-embedded-latex">\delta</span>.

### Introducing Geometric Algebra

So far, I have formulated everything in terms of vector algebra that should look familiar to students of physics or engineering. To actually solve the equations, I will use a few additional notions from geometric algebra.

Geometric algebra is the answer to the question "what if I could multiply and divide by vectors?" It introduces a new associative (but non-commutative) product between vectors: the geometric product. The geometric product between vectors <span class="mathquill-embedded-latex">a</span> and <span class="mathquill-embedded-latex">b</span> is simply written <span class="mathquill-embedded-latex">ab</span>. The geometric product of a vector with itself equals a scalar (the square of the length of the vector),

<span class="display-latex">aa = a^2 = |a|^2</span>

This fact, combined with associativity and the other familiar rules for multiplication, is enough to define the geometric product uniquely.

The symmetric and anti-symmetric parts of the geometric product have important geometric meaning, and are traditionally given their own special symbols:

<span class="display-latex">\frac{1}{2}(ab + ba) = a \cdot b</span>
<span class="display-latex">\frac{1}{2}(ab - ba) = a \wedge b</span>

I will assume that the dot product, <span class="mathquill-embedded-latex">a \cdot b</span>, is familiar: it is related to the projection of one vector onto another, and to the cosine of the angle between them.

The wedge product, <span class="mathquill-embedded-latex">a \wedge b</span> is probably only familiar if you have studied differential forms (or geometric algebra, of course), but it is very similar to the more familiar cross product, <span class="mathquill-embedded-latex">a \times b</span>. It represents the directed area of the parallelogram spanned by two vectors, and is related to the sine of the angle between them.

Anti-symmetry and bi-linearity are exactly what is needed to represent area: a vector spans no area with itself (anti-symmetry), and the area of a parallelogram scales linearly with the lengths of each of its legs (bi-linearity). Whereas the cross product represents directed area by a vector orthogonal to the area (a trick that works only in 3 dimensions), the wedge product represents a directed area by a different kind of object called a "bivector." The wedge product is associative (like the geometric product, but unlike the cross or dot products), and the wedge product of more than two vectors builds objects of higher "grades." The wedge product between 3 vectors is a trivector representing a directed volume (of the parallelepiped spanned by them), and the wedge product between k different vectors is a k-vector representing a directed k-dimensional volume (which is always zero in spaces of dimension less than k). The wedge product is extremely useful in linear algebra, because it represents linear subspaces spanned by any number of vectors in a way that can be manipulated algebraically.

We can turn these definitions around to write the geometric product in terms of the dot and wedge products,

<span class="display-latex">ab = a \cdot b + a \wedge b = \left\langle a b \right\rangle_0 + \left\langle a b \right\rangle_2</span>

where <span class="mathquill-embedded-latex">\left\langle a b \right\rangle_0</span> and <span class="mathquill-embedded-latex">\left\langle a b \right\rangle_2</span> are notations for "the scalar part" and "the bivector part". There is a strange thing about this object: it represents the sum of two different "kinds of things," a scalar and a bivector. But this should be no more troubling than the fact that a complex number represents the sum of a "real number" and an "imaginary number," (in fact, there is an extremely close relationship between complex numbers and the geometric product of two vectors). With experience, it becomes clear that a sum of a scalar and a bivector is exactly what is needed to represent the product of two vectors in an associative, invertible way.

[[As I will soon show, invertibility and associativity of the geometric product give us two extremely useful tools for solving vector equations that are missing from the standard (Gibbs) vector analysis taught to most physicists and engineers.]]

### Reformulating the horizon and reflection conditions

In order to make efficient use of geometric algebra's tools, it is useful to reformulate equations (2) and (3) (the horizon condition and the reflection condition) in terms of the geometric product instead of the dot product.

#### Horizon condition

Consider the geometric product

<span class="display-latex">r_1 s = r_1 \cdot s + r_1 \wedge s = r_1 \wedge s</span>

where the last equality follows from our previous form of this condition. In two dimensions, there is only one unit bivector, called <span class="mathquill-embedded-latex">I</span>, spanned by any two orthogonal unit vectors:

<span class="display-latex">e_1 \wedge e_2 = I</span>

Therefore <span class="mathquill-embedded-latex">r_1 \wedge s</span> is proportional to <span class="mathquill-embedded-latex">I</span> and since <span class="mathquill-embedded-latex">r_1</span> and <span class="mathquill-embedded-latex">s</span> are orthogonal we can write

<span class="math-label">(2')</span> <span class="display-latex">r_1 s = r_1 \wedge s = |r_1||s|I = |r_1|I = \rho I</span>

#### Reflection Condition

Our previous version of the reflection condition can be rearranged into an orthogonality condition:

<span class="display-latex">r_2 \cdot (s + w) = 0</span>

so, similarly to the way we rewrote the horizon condition, we can rewrite this in terms of the geometric product as

<span class="display-latex">r_2 (s + w) = |r_2| |s + w| I</span>

It will simplify later algebra to define a new unit vector based on this equation:

<span class="display-latex">g = \frac{ s + w }{|s + w|}</span>

so that the reflection condition becomes

<span class="math-label">(3')</span> <span class="display-latex">r_2 g = |r_2| I = \rho I</span>

### Solving for the Earth's radius

Now that we have rewritten our main geometric conditions in terms of the geometric product instead of the dot product, we are ready to solve the triangle equations.

First, eliminate <span class="mathquill-embedded-latex">p</span> and set the left hand sides of (1a) and (1b) equal to one another:

<span class="display-latex">r_1 - |d_1| t = r_2 - |d_2| w</span>

The magnitude <span class="mathquill-embedded-latex">|d_2|</span> is unknown, so we could proceed by solving for it, but it is more efficient to simply eliminate it in the following way. First, multiply both sides of the equation on the right by <span class="mathquill-embedded-latex">w</span>:

<span class="display-latex">r_1 w - |d_1| t w = r_2 w - |d_2| w^2</span>

Now we can use "grade separation" to separately consider the scalar and bivector parts of this equation. Since <span class="mathquill-embedded-latex">w^2</span> is a scalar, the <span class="mathquill-embedded-latex">|d_2|</span> dependence drops out of the bivector part:

<span class="display-latex">\left\langle r_1 w - |d_1| t w \right\rangle_2 = \left\langle r_2 w \right\rangle_2</span>

We can now take advantage of the horizon and reflection conditions to rewrite the unknown products <span class="mathquill-embedded-latex"> r_1 w</span> and <span class="mathquill-embedded-latex">r_2 w</span> in terms of known products by inserting factors of <span class="mathquill-embedded-latex">t t = 1</span> and <span class="mathquill-embedded-latex">g g = 1</span> and re-associating:

<span class="display-latex">\left\langle r_1 t t w - |d_1| t w \right\rangle_2 = \left\langle r_2 g g w \right\rangle_2</span>

We can simplify both <span class="mathquill-embedded-latex">r_1 t</span> and <span class="mathquill-embedded-latex">r_2 g</span> to <span class="mathquill-embedded-latex">\rho I</span> using the horizon (2') and reflection conditions (3'):

<span class="display-latex">\left\langle \rho I t w - |d_1| t w \right\rangle_2 = \left\langle \rho I g w \right\rangle_2</span>

Rearranging to isolate the <span class="mathquill-embedded-latex">|d_1|</span> term gives

<span class="display-latex">|d_1| \left\langle t w \right\rangle_2 = \rho \left\langle I (t w - g w) \right\rangle_2</span>

Now rewriting in terms of dot and wedge products gives

<span class="display-latex">|d_1| t \wedge w = \rho I (g \cdot w - t \cdot w)</span>

We can take advantage of the known length <span class="mathquill-embedded-latex">|d_1|^2</span> derived as (4d) by taking the magnitude squared of both sides:

<span class="display-latex">|d_1|^2 |t \wedge w|^2 = \rho^2 \left(g \cdot w - t \cdot w\right)^2</span>

<span class="display-latex">|d_1|^2 = \rho^2 \frac{\left(g \cdot w - t \cdot w\right)^2}{|t \wedge w|^2}</span>

It will simplify further equations to introduce

<span class="display-latex">\epsilon^2 = \frac{(g \cdot w - t \cdot w)^2}{|t \wedge w|^2}</span>

which is written entirely in terms of known products of directions, so that

<span class="display-latex">|d_1|^2 = \rho^2 \epsilon^2</span>

Now substituting from (4d) for <span class="mathquill-embedded-latex">|d_1|^2</span> gives

<span class="display-latex">(\rho + \delta)^2 - \rho^2 = \rho^2 \epsilon^2</span>

and dividing through by <span class="mathquill-embedded-latex">\rho^2</span> gives

<span class="display-latex">\left(1 + \frac{\delta}{\rho}\right)^2 - 1 = \epsilon^2</span>

and finally, we are able to solve for <span class="mathquill-embedded-latex">\rho</span>, the radius of the earth{%marginnote 'positive-root' """I (and Vanderbei) have chosen a positive square root here. What, if anything, does the negative square root represent?"""%}

<span class="math-label">(5)</span> <span class="display-latex">\rho = \frac{\delta}{\sqrt{1 + \epsilon^2} - 1}</span>



We can recover Vanderbei's final answer by rewriting <span class="mathquill-embedded-latex">\epsilon^2</span> in terms of angles using the following relationships:

<span class="display-latex">t \cdot w = \cos(\beta)</span>
<span class="display-latex">t \wedge w = \sin(\beta) I</span>
<span class="display-latex">g \cdot w = \cos(\gamma) = \cos\left(\frac{\alpha + \beta}{2}\right)</span>
<span class="display-latex">\epsilon^2 = \frac{\left(\cos(\gamma) - \cos(\beta)\right)^2}{\sin(\beta)^2}</span>

From this and (5), it is a simple exercise in trigonometric identities to recover the form given on slide 28 in [Vanderbei's talk](http://orfe.princeton.edu/u/rvdb/tex/talks/sunset/sunsetTalk_RutgersREU_small.pdf), but there are two better forms that I will show instead.

First, a small angle form. Use the fact that <span class="mathquill-embedded-latex">\epsilon^2 \ll 1</span> and standard trigonometric small angle approximations to write

<span class="math-label">(5')</span> <span class="display-latex">\rho \approx  \frac{2}{\epsilon^2}\delta \approx \frac{8\beta^2}{\left(\beta^2 - \gamma^2\right)^2} \delta</span>

Because the angles involved are quite small, this approximation is accurate to better than one part in a million for the angles in Vanderbei's photo. It's also simpler than other small angle approximations previously given by Vanderbei. Since the uncertainty in the angles and camera height are each something like a part in ten, this small angle approximation is certainly sufficient.

In fact, when calculating with rounded (floating point) arithmetic, the small angle form is actually more accurate than the exact form given by Vanderbei. This counterintuitive fact occurs because the exact form suffers from "catastrophic cancellation," the result of subtracting approximately equal values that have been computed with rounding error.

We can get rid of one place such cancellation occurs by multiplying the numerator and denominator of our exact expression (5) by <span class="mathquill-embedded-latex">1 + \sqrt{1 + \epsilon^2}</span> to get

<span class="math-label">(5'')</span> <span class="display-latex">\rho = \frac{ \sqrt{ 1 + \epsilon^2 } + 1 }{\epsilon^2}\delta</span>

and we can get rid of another source of cancelation by replacing the difference of cosines in our expression for <span class="mathquill-embedded-latex">\epsilon^2</span> with a difference of sines using the trigonometric identity

<span class="display-latex">\cos(\theta) = 1-2\sin ^2\left(\frac{\theta}{2}\right)</span>

so that:

<span class="display-latex">\epsilon^2 = 4 \frac{\left(\sin^2\left(\frac{\gamma}{2}\right) - \sin^2\left(\frac{\beta}{2}\right)\right)^2}{\sin(\beta)^2}</span>

[[Something about the versine...]]

Plugging this expression for <span class="mathquill-embedded-latex">\epsilon^2</span> into the non-cancelling form for <span class="mathquill-embedded-latex">\rho</span> now allows computing <span class="mathquill-embedded-latex">\rho</span> without undue rounding issues.

Thank you to Steven Strogatz for first [pointing me to this problem](https://twitter.com/stevenstrogatz/status/800136462612201472) (and a related, fiendishly difficult pure [trigonometric functions problem](https://twitter.com/stevenstrogatz/status/799740091795120133)).