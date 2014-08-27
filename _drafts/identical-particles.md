---
layout: post
title: Identical Particles Don't Matter
---

*Gibbs paradox*: If we naively calculate the entropy of particles in a partitioned box, then it appears that removing the partition decreases the entropy of the system as a whole. The Second Law of Thermodynamics suggests that it shouldn't be possible to decrease the entropy of a closed system like this.

<aside>When the entropy is extensive, it means that if we have twice as much of the same stuff, then we have twice the entropy.</aside>

This scenario poses a problem for any entropy function that is not *extensive*, such that

<span class="mathquill-embedded-latex">S(\alpha U, \alpha V, \alpha N) = \alpha S(U, V, N)</span>

The textbook resolution of this difficulty is to point out that the atoms or molecules in a gas are *identical particles*. For this reason, we should count states related by a permutation of the particles as a single state only.

...Divide original entropy by <span class="mathquill-embedded-latex">N!</span>

This does indeed restore extensivity, but at the expense of limiting Statistical Mechanics to giving reasonable results only for systems of identical particles. If we're treating a box full of colloids---mesoscopic particles that are still large in number, but are certainly not *identical* to one another in any fundamental sense---we would still like to preserve the Second Law.

<aside style="min-width: 310px">
  <div style="text-align: center;">Particle probability densities</div>
  <img src="/img/particle_probabilities.png"/>
</aside>

As an alternative to demanding extensivity, we could concede that we never knew which particles were in which box to begin with. Consider the figure aside. The naïve calculation implicitly assumes that the probability densities for the particles look like the first column, with each particle either definitely residing on the left, or definitely residing on the right.

But which particles should we group onto the left side, and which onto the right side? If we don't know which particle is on which side of the partition, then for each particle, there is an equal probability for it to be on the left side or the right side of the partition, as represented in the right column of the same figure. In this case, raising or lowering the partition has no influence at all on the single particle probability densities.

((In fact, it doesn't make sense to talk about the entropy of the left box or the right box separately, because each particle could be in the left box or the right box as far as we know.))

*Extensivity* From an information-theoretic point of view, entropies of independent sets of propositions ((systems??)) add. If we have idependent but identical systems, then the entropy is proportional to the number of systems. In Thermodynamics, extensivity is usually stated as a scaling law for the entropy in terms of the energy, volume, and number of particles in a system.

<span class="mathquill-embedded-latex">S(\alpha U, \alpha V, \alpha N) = \alpha S(U, V, N)</span>

But according to the information-theoretic model, this scaling should only hold if seperate pieces of the system are *independent*. This doesn't just mean that they don't interact. It means that no piece of information about one of the subsystems is relevant to determining the state of another of the subsystems. Consider the following propositions:

* There are 10 particles in the left half of the box
* Particle 1 is on the left half of the box
* There are 10 particles on the left half of the box, and particle 1 is on the left half of the box

If the entropy is to be extensive, all of these propositions should be irrelevant to determining the state of the right half of the box.


There are several further interesting points to consider.
* Independent probabilities for each particle to be on one side or the other vs. fixed number on the two sides. Different processes suggest different choices: e.g. starting with an unpartitioned box and partitioning it suggests the first; somehow doing a number measurement on the boxes would move us to the second. Could even consider the "Grand Canonical Ensemble", as a limit of a large system where most particles are in neither box, but each particle has a small and equal probability to be either on the left half or the right half, and a much larger probability to be in neither box.
* Partition doesn't make a difference in state counting, but it does make a difference in dynamics. Do the dynamics matter for the entropy? *Spoiler*: no.
* Odd duality between exchange between boxes and exchange between particles in a single box.
* What if Jones has a box of gas in his lab that he didn't tell us about? If the entropy isn't extensive, does this mean that we can't compute the entropy of our boxes without knowing about his? Again, processes might matter some. Are states of his box independent from ours? What lead us to believe that there are N particles in our box in the first place.
* Entropy seems to be really only determined up to some additive functions. Equilibrium predictions typically depend on a few derivatives of the entropy, rather than the absolute numerical value of the entropy.
* If identical particles trick isn't necessary, why does it seem to work at all?

*Quantum Syllogism of Statistical Mechanics*: Quantum mechanics is strange and confusing. I found a part of Statistical Mechanics that is strange and confusing. Therefore, it must be explained by Quantum Mechanics.

Review some literature:
* Ben Naim (and other authors) suggest that this example shows that physical particles are identical particles, and that we should limit the scope of Statistical Mechanics to treating only identical particles.
* Swendsen says we should modify the combination law for the entropy of separate systems. There was an interesting back and forth with ((someone))
* Hestenes says something or other about filters
* Van Kampen (?)
* I'm in agreement with Jaynes, as far as I can tell

AJP articles:

American Journal of Physics -- February 1958 -- Volume 26, Issue 2, pp. 80
Note on a Problem Concerning the Gibbs Paradox
Martin J. Klein
http://dx.doi.org/10.1119/1.1996106

American Journal of Physics -- May 1965 -- Volume 33, Issue 5, pp. 391
Gibbs vs Boltzmann Entropies
E. T. Jaynes
http://dx.doi.org/10.1119/1.1971557

American Journal of Physics -- July 1970 -- Volume 38, Issue 7, pp. 840
Entropy and Indistinguishability
David Hestenes
http://dx.doi.org/10.1119/1.1976480

American Journal of Physics -- April 1973 -- Volume 41, Issue 4, pp. 509
“Gibbs Paradox” Paradox
Barry M. Casper and Susan Freier
http://dx.doi.org/10.1119/1.1987279
  Nice discussion of microscopic preparation vs macroscopic preparation. Basically gets it right, I think. 1 citation.

American Journal of Physics -- May 1988 -- Volume 56, Issue 5, pp. 430
Another look at the quantum mechanical entropy of mixing
Dennis Dieks and Vincent van Dijk
http://dx.doi.org/10.1119/1.15571
  Claims that mixing paradox is equally a parodox (or not?) in QM, since entropy of mixing isn't well defined if states aren't orthogonal.

American Journal of Physics -- November 1991 -- Volume 59, Issue 11, pp. 971
The principle of identicality and the foundations of quantum theory. I. The Gibbs paradox
Peter D. Pešić
http://dx.doi.org/10.1119/1.16653
  Close reading of Gibbs, similar to Jaynes. Thanks Jaynes for showing him unpublished work.

American Journal of Physics -- November 1991 -- Volume 59, Issue 11, pp. 975
The principle of identicality and the foundations of quantum theory. II. The role of identicality in the formation of quantum theory
Peter D. Pešić
http://dx.doi.org/10.1119/1.16654
  History of science perspective on indistinguishability in QM. Mentions van Kampen's point of view that there are no reversible processes that change the number of particles, so entropy's dependence on N is not fully defined.

American Journal of Physics -- December 2006 -- Volume 74, Issue 12, pp. 1126
The entropy of mixing and assimilation: An information-theoretical perspective
Arieh Ben-Naim
http://dx.doi.org/10.1119/1.2338545

American Journal of Physics -- March 2006 -- Volume 74, Issue 3, pp. 187
Statistical mechanics of colloids and Boltzmann’s definition of the entropy
Robert H. Swendsen
http://dx.doi.org/10.1119/1.2174962

American Journal of Physics -- April 2011 -- Volume 79, Issue 4, pp. 342
How physicists disagree on the meaning of entropy
Robert H. Swendsen
http://dx.doi.org/10.1119/1.3536633

American Journal of Physics -- July 2011 -- Volume 79, Issue 7, pp. 741
The Gibbs paradox and the distinguishability of identical particles
Marijn A. M. Versteegh and Dennis Dieks
http://dx.doi.org/10.1119/1.3584179
  Cites Hestenes 1970

American Journal of Physics -- February 2012 -- Volume 80, Issue 2, pp. 170
Comment on “The Gibbs paradox and the distinguishability of identical particles,” by M. A. M. Versteegh and D. Dieks [Am. J. Phys. 79, 741–746 (2011)]
David S. Corti
http://dx.doi.org/10.1119/1.3657773
  Cites Swendsen

  Why quantum mechanics is irrelevant to the resolution of the Gibbs paradox is also discussed in detail by N. G. van Kampen, “The Gibbs paradox,” in Essays in Theoretical Physics, edited by W. E. Parry (Pergamon, New York, 1984), pp. 303–312.

---
Choosing a Definition of Entropy that Works
Robert H. Swendsen, Foundations of Physics 42, 582 (2012)
http://dx.doi.org/10.1007/s10701-012-9627-y
  Cites Versteegh, 2011

J. F. Nagle, “Regarding the entropy of distinguishable particles,”
J. Stat. Phys. 117, 1047–1062 (2004)
http://dx.doi.org/10.1007/s10955-004-5715-5
  Cites Swendsen



American Journal of Physics -- December 1999 -- Volume 67, Issue 12, pp. 1091
An invertibility paradox
P.-M. Binder, J. M. Pedraza, and S. Garzón
http://dx.doi.org/10.1119/1.19087
  Apparently about chaotic dynamical systems. Not sure this is relevant, but it Klein and Pesic

  Suggests original reversibility paradox was formulated by Kelvin, and resolved by Boltzmann
