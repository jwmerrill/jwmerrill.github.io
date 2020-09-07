---
layout: post
title: Plotting 2D electric field lines
---

If you have an implicit plotter, it is fairly straightforward to plot equipotential curves for a two dimensional system of electrostatic charges. I had always believed that plotting electric field lines required additional technology---specifically, the ability to integrate a system of ordinary differential equations---but it turns out that there's a way to plot 2D field lines that's very similar to the technique for plotting equipotentials.

I used this technique to produce the following figure (click the image for an interactive version), and in the rest of this post, I'll explain how it works.

<figure class="mainfig">
  <a href="https://www.desmos.com/calculator/oeokklqzmp"><img style="width: 400px; border:1px solid #bbb;" alt="Plot of the electrostatic equipotentials and field streamlines for a system of three point charges in two dimensions" src="/img/plotting-electric-field/equipotentials-and-field-lines.png" /></a>
</figure>

The electrostatic potential <span class="mathquill-embedded-latex">\phi</span> at position <span class="mathquill-embedded-latex">r</span> due to a point particle at the origin in two dimensions is [[NOTE: Gaussian units]]

<div class="display-latex">
  \phi(r) = Q \ln\left(\frac{|r|}{|r_0|}\right).
</div>

where <span class="mathquill-embedded-latex">Q</span> is the charge of the particle, and <span class="mathquill-embedded-latex">r_0</span> is a reference location where the potential is taken to be 0.

[[NOTE: extension to 3D]]

For a system of particles with charges <span class="mathquill-embedded-latex">Q_i</span> and positions <span class="mathquill-embedded-latex">r_i</span>, the potential is

<div class="display-latex">
  \phi(r) = \sum_i Q_i \ln\left(\frac{|r-r_i|}{|r_0-r_i|}\right).
</div>

An equipotential line can be plotted as a level set of this function using an implicit plotter by plotting

<div class="display-latex">
  \phi(r) = \phi_0
</div>

for some constant <span class="mathquill-embedded-latex">\phi_0</span> [[TODO figure]], and a series of all equipotentials for which the potential takes on integer values can be produced by plotting

<div class="display-latex">
  \sin(2\pi\phi(r)) = 0.
</div>

[[TODO figure]].

For a single charge, the equipotentials form a series of concentric circles

[[TODO figure]].


