# Gawlik-Nakatsukasa composite rational approximation of x^{1/p}

Composite rational approximations to x^{1/p} on [0,1] for integer p >= 2,
built by iterating a scaled Newton/Heron step.

Paper: [arXiv:1906.11326](https://arxiv.org/abs/1906.11326)

Desmos graph (sqrt case): https://www.desmos.com/calculator/lsrcfmizye

## The iteration (p=2 specialization)

- f(x,0) = sqrt(a_0), f(x,k) = sqrt(a_k) * (f(x,k-1) + x/f(x,k-1))/2
- a_{k+1} = 2*sqrt(a_k)/(1+a_k) (ascending Landen transformation)
- Final scaling: g(x) = (2*sqrt(a_N)/(1+a_N)) * f(x,N)
- Composite rational is type (2^{N-1}, 2^{N-1}-1) with only N+2 free parameters

## Pole structure

- Poles all on negative real axis (p=2 only; off-axis for p>2)
- Poles don't shift between iterations; each iteration's zeros become the next iteration's poles
- Tree structure: one new pole per step, interlaced with existing ones
- Produces tapered exponential clustering (cf. Trefethen-Nakatsukasa-Weideman 2020, [arXiv:2007.11828](https://arxiv.org/abs/2007.11828))

## Zolotarev optimality

- Zolotarev's original problem: minimax approximation of sgn(x) on [-1,-k] ∪ [k,1]
- For sgn, |sgn(x)|=1 on the domain, so absolute and relative error coincide
- Change of variables transforms this into relative error optimality for sqrt on [k^2, 1]
- The "relative" for sqrt isn't an independent choice; it's inherited from the sign problem
- For p=2, composite IS the Zolotarev minimax approximant on [a_0^2, 1] (Gawlik 2018)
- Does NOT hold for p>2
- Does NOT hold for absolute error on [0,1] (equioscillation count is generic N+3, not 2^N+1)
- Absolute error result leans on the fact that relative and absolute are close on [a_0^2, 1]

## Root-exponential rate: where the sqrt comes from

- Degree n = 2^N after N iterations
- Landen recurrence converges quadratically (doubly exponential in iteration count)
- But iteration budget splits ~50/50 between two phases:
  - Growing a_k from small to O(1): costs ~log_2(log(1/a_0)) iterations
  - Refining error at x=1 from O(1) to small: costs ~log_2(log(1/eps)) iterations
- Balancing a_0 ~ eps gives N ~ 2*log_2(log(1/eps)), so n ~ (log(1/eps))^2, i.e. eps ~ exp(-C*sqrt(n))
- The 50/50 split is forced by Newman/Stahl optimality, not a suboptimality of the construction

## Suboptimality of the Gawlik-Nakatsukasa schedule for absolute error

- G-N balances crude bound 2*a_0 against (1-a_N)/(1+a_N) on [a_0^2, 1]
- Actual error at x=0 is a product: g(0) = (2*mu_N/(1+a_N)) * mu_0 * prod(mu_k/2)
- True E_0 ~ a_0/(2*log(1/a_0)), much smaller than 2*a_0 bound
- Endpoint-balanced schedule (replacing crude bound with exact product) gives 2-4x improvement
- Two sources of suboptimality: crude left-interval bound + relative-error criterion on right interval
- Interior optimization not yet seriously attempted

## Generalizing beyond p=2

- p = power of 2: compose sqrt iterations, poles stay on negative real axis
- General p: iteration involves f_k^{p-1}, creating branching pole structure off real axis
- Heron-like (type (1,1) in f_k) steps are locked to sqrt; escaping requires:
  - Different explicit x-dependence per step (e.g. x*f_k term in addition to x/f_k)
  - Multi-component state space
  - Factoring f_k^{p-1} into composed lower-type steps
- Geometric schedule a_k = a_0^{c^k} tested: much worse than Landen (can't give up quadratic acceleration)
