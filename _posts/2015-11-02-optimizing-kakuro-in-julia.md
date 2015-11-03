---
layout: post
title: Optimizing (part of) a Kakuro puzzle solver in Julia
---

<div class="p">
  <figure class="sidefig">
    <a href="https://commons.wikimedia.org/wiki/File%3AKakuro_black_box_solution.svg">
      <img width="256" height="256" alt="Solved Kakuro puzzle" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Kakuro_black_box_solution.svg/256px-Kakuro_black_box_solution.svg.png"/>
    </a>
    <figcaption>A solved Kakuro puzzle.</figcaption>
  </figure>
</div>

[Kakuro](https://en.wikipedia.org/wiki/Kakuro) is a number puzzle that is a bit like a combination between Sudoku and a crossword puzzle. Imagine a crossword puzzle where, instead of words, blocks of boxes are filled with combinations of digits between 1 and 9, and instead of clues about words, you are given sums that a block of digits must add up to.

When you're solving a Kakuro puzzle, it's helpful to be able to generate all the combinations of *m* different digits that add up to a given sum. A [recent thread](https://groups.google.com/d/msg/julia-users/xJ7GpKAa16E/ZnaWuHZKBQAJ) on the julia-users mailing list considered how to implement this task efficiently on a computer.

In this post, I'd like to show a progression of a few different implementations of the solution of this same problem. I think the progression shows off one of Julia's core strengths: in a single language, you are free to think in either a high level way that is close to your problem domain and easy to prototype, or a low level way that pays more attention to the details of efficient machine execution. I don't know any other system that even comes close to making it as easy to switch back and forth between these modes as Julia does.

*Attention Conservation Notice*: If you're looking for information on how to solve Kakuro with a computer, you should probably look elsewhere. This post is a deep dive into a tiny, tiny subproblem. On the other hand, I'll show how to speed up the solution of this tiny, tiny subproblem by a factor of either ten thousand or a million, depending how you count, so if that sounds fun you're in the right place.

<!--more-->

### Step 1: Recursive enumeration

The original solution presented by Patrick Useldinger is based on the following decomposition of the problem:

Suppose, for example, that we want to find a set of 4 different digits between 1 and 9 that sum to 12. Each answer will either include 1 along with 3 other digits between 2 and 9 that sum to 11, or else it won't include 1, but will instead include 4 digits between 2 and 9 that sum to 12.

In general, a set of *m* different digits between *p* and 9 that sum to *s* either contains *p* along with a subset of *m*-1 digits between *p*+1 and 9 that sum to *s-p*, or it doesn't contain *p* and instead contains *m* digits between *p*+1 and 9 that sum to *s*. In either case, we've turned one problem into two new problems with digits drawn from smaller ranges. Like any good recursive algorithm, we're expressing the solution to the original problem as a simple combination of the solution to successively simpler problems.

To turn this insight into code, we need to make a few choices:

1. How will we represent and combine the solutions to subproblems?
2. In what order will we solve the subproblems, and how will we keep track of where we are in this order.

Early discussion focused on point (1), and the relative merits of storing the
solution digit sets in a `Set`, a `Vector`, or a linked list.

Here's an example that stores digit sets as a vector of integers, and organizes the process of enumerating solutions as a recursive depth-first search.

{%highlight julia%}
function decompose_rec(sum, m)
  # Container to hold all solutions
  solutions = Vector{Int}[]
  # Container to hold digits in a single solution
  partial_solution = Int[]
  lower = 1
  upper = 9
  decompose_rec!(
    solutions, partial_solution,
    sum, m, lower, upper
  )
  solutions
end

# Julia has a convention that functions that mutate
# one of their arguments should end with a "!". The
# argument that will be mutated is usually placed
# first.
function decompose_rec!(
  solutions, partial_solution,
  sum, m, lower, upper
)
  if sum == 0 && m == 0
    # In this case, partial_solution is in fact a
    # full solution. Push it onto solutions.
    push!(solutions, partial_solution)
  elseif sum > 0 && m > 0 && upper >= lower
    # Make an extended partial solution that
    # includes lower. The copy operation is
    # important because we don't want to mutate
    # existing partial solutions.
    extended = copy(partial_solution)
    push!(extended, lower)
    # Find solutions that include lower
    decompose_rec!(
      solutions, extended,
      sum - lower, m - 1, lower + 1, upper
    )
    # Find solutions that don't include lower
    decompose_rec!(
      solutions, partial_solution,
      sum, m, lower + 1, upper
    )
  else
    # stop searching
  end
end
{% endhighlight %}

This is a reasonably idiomatic Julia solution. It spells out the types of the `solutions` and `partial_solution` containers when they are created, but otherwise doesn't get overly bossy about annotations. I'm not really using any special features of Julia here, and you could write basically this same code in practically any language.

Let's see how the performance is looking so far. We'll benchmark finding the number that can be written in the most different ways as a sum of *m* different digits:

{%highlight julia%}
function benchmark_rec()
 nmax = 0
 solnmax = Vector{Int}[]
 for sum in 1:45, m in 1:9
   soln = decompose_rec(sum, m)
   if length(soln) > nmax
     nmax = length(soln)
     solnmax = soln
   end
 end
 solnmax
end
{% endhighlight %}

and the results:

{%highlight julia%}
julia> @time benchmark_rec(); @time benchmark_rec()
0.038101 seconds (194.83 k allocations: 13.916 MB, 26.53% gc time)
0.009737 seconds (182.40 k allocations: 13.293 MB, 26.66% gc time)
12-element Array{Array{Int,1},1}:
 [1,2,8,9]
 [1,3,7,9]
 [1,4,6,9]
 [1,4,7,8]
 [1,5,6,8]
 [2,3,6,9]
 [2,3,7,8]
 [2,4,5,9]
 [2,4,6,8]
 [2,5,6,7]
 [3,4,5,8]
 [3,4,6,7]
{% endhighlight %}

So there are 12 different subsets of 4 digits between 1 and 9 that sum to 20.

Note a few [good benchmarking practices](http://docs.julialang.org/en/release-0.4/manual/performance-tips/) here:

1. The benchmark is wrapped in a function. Julia currently does a poor job optimizing code that uses non-constant global variables. For this reason, benchmarks should be wrapped in functions so that they only use local variables.
2. The benchmark uses each result that is produced in the inner loop, and returns a result. This prevents the optimizer from just skipping the loop.
3. We run the benchmark multiple times. The first run includes time to compile all the code, which you typically want to ignore.

Other early solutions from the mailing list in Python, lisp, and Julia had runtimes of ~500ms to ~10s. At ~10ms, the solution above already compares pretty favorably. A couple reasons that the early Julia solutions were slower are that

1. Using a `Set` or using `union` on a `Vector` is slower than using `push!` on a `Vector`, because Julia needs to check whether the new element is already a member of the set before adding it. Our enumeration is constructed to make this check unnecessary.
2. Inner functions, anonymous functions, and closures are currently relatively slow in Julia{% marginnote 'mn-fast-anonymous' """[Anonymous functions will probably be fast some day](https://github.com/JuliaLang/julia/issues/1864).""" %}. If you're going for performance, just pass all the context you need using function arguments. You can make this more tidy by defining a type to hold the context that's relevant to a given problem. This is generally preferable to passing around half a dozen positional arguments as I've done above. As an added bonus, once you have a type, you will often see useful operations that you can define on it to further simplify and structure your code.

There is probably more room for improvement here. Using a linked list instead of a `Vector` to represent solutions would eliminate the need to copy partial solutions, because [linked lists can share tails](https://en.wikipedia.org/wiki/Persistent_data_structure#Linked_lists) with each other. Alternatively, memory usage could be reduced by storing digits in a `Vector{Int8}` instead of a `Vector{Int}`, since we're only storing digits between 1 and 9.

Rather than spend more time experimenting with different containers, I'd like to take a step back and consider some other solution strategies.

### Step 2: Filtering Combinations

Julia ships with built in routines for iterating through combinations of the elements of a collection{% marginnote 'mn-combinations-src' """If you're curious, you can see how the `combinations` iterator is implemented in [Julia's source code]("https://github.com/JuliaLang/julia/blob/d594954e299617fdf72af6a896a5ff89c5d831f1/base/combinatorics.jl#L172-L209").""" %}. Instead of recursively building combinations with the correct sum, we can just look at all combinations and keep only those that have the correct sum. The number of combinations of *m* digits between 1 and 9 is `binomial(9, m)`,

{%highlight julia%}
julia> [(m, binomial(9, m)) for m in 0:9]
10-element Array{Tuple{Int64,Int64},1}:
 (0,1)
 (1,9)
 (2,36)
 (3,84)
 (4,126)
 (5,126)
 (6,84)
 (7,36)
 (8,9)
 (9,1)
{% endhighlight %}

so we'll never need to look at more than 126 combinations for a given <code>(sum,&nbsp;m)</code> pair.

Here's a solution that uses this strategy:

{%highlight julia%}
function decompose_com(desired_sum, m)
  solutions = Vector{Int}[]
  for c in combinations(1:9, m)
    if sum(c) == desired_sum
      push!(solutions, c)
    end
  end
  solutions
end
{% endhighlight %}

Short and simple. It could be a one liner if we used `filter`, but higher order functions aren't as fast as they could be in Julia (yet).

Let's benchmark this version:

{%highlight julia%}
function benchmark_com()
  nmax = 0
  solnmax = Vector{Int}[]
  for sum in 1:45, m in 1:9
    soln = decompose_com(sum, m)
    if length(soln) > nmax
      nmax = length(soln)
      solnmax = soln
    end
  end
  solnmax
end
{% endhighlight %}

I'm running the benchmark repeatedly below because some runs invoke the garbage collector, and other runs don't.

{%highlight julia%}
julia> @time benchmark_com();
  0.042942 seconds (102.48 k allocations: 6.814 MB)
julia> @time benchmark_com();
  0.006712 seconds (70.39 k allocations: 5.357 MB, 45.27% gc time)
julia> @time benchmark_com();
  0.004499 seconds (70.39 k allocations: 5.357 MB)
julia> @time benchmark_com();
  0.005283 seconds (70.39 k allocations: 5.357 MB)
julia> @time benchmark_com();
  0.005495 seconds (70.39 k allocations: 5.357 MB)
julia> @time benchmark_com();
  0.005883 seconds (70.39 k allocations: 5.357 MB, 36.67% gc time)
julia> @time benchmark_com()
  0.002831 seconds (70.39 k allocations: 5.357 MB)
12-element Array{Array{Int,1},1}:
 [1,2,8,9]
 [1,3,7,9]
 [1,4,6,9]
 [1,4,7,8]
 [1,5,6,8]
 [2,3,6,9]
 [2,3,7,8]
 [2,4,5,9]
 [2,4,6,8]
 [2,5,6,7]
 [3,4,5,8]
 [3,4,6,7]
{% endhighlight %}

After the first couple runs, timing settles down to ~3 ms when the gc doesn't run, and ~6 ms when it does. That's a decent improvement over the recursive code, and as a bonus, it's much simpler.

Even so, we're doing a fair amount of repeated work in the benchmark since we form the same combinations of *m* digits over and over again for different target sums. Since there are so few total subsets of the digits between 1 and 9 (only 2<sup>9</sup>=512 of them), we could just precompute the sums of all of them, and store the relevant combinations in a look up table.

### Step 3: A lookup table

My first thought for the lookup table was to use a `Dict` that maps <code>(sum,&nbsp;m)</code> pairs to combinations stored as a vector of digits. But the possible values of `sum` are the integers between 1 and 45, and the possible values of *m* are the integers between 1 and 9, so we might as well just use a 2D array instead of a `Dict`. This saves a bit of time spent hashing pairs of integers.

{%highlight julia%}
function buildlut()
  # Preallocate empty containers for each
  # (sum, m) pair.
  lut = [Vector{Int}[] for i in 1:45, j in 1:9]

  for m in 1:9, c in combinations(1:9, m)
    push!(lut[sum(c), m], c)
  end

  lut
end

# Now decompose is just a table lookup
decompose_lut(lut, i, j) = lut[i, j]
{% endhighlight %}

Here's the corresponding benchmark

{%highlight julia%}
function benchmark_lut()
  lut = buildlut()
  nmax = 0
  solnmax = Vector{Int}[]
  for sum in 1:45, m in 1:9
    soln = decompose_lut(lut, sum, m)
    if length(soln) > nmax
      nmax = length(soln)
      solnmax = soln
    end
  end
  solnmax
end
{% endhighlight %}

{%highlight julia%}
julia> @time benchmark_lut(); @time benchmark_lut()
  0.048013 seconds (49.26 k allocations: 2.317 MB)
  0.000158 seconds (2.15 k allocations: 161.313 KB)
12-element Array{Array{Int,1},1}:
 [1,2,8,9]
 [1,3,7,9]
 [1,4,6,9]
 [1,4,7,8]
 [1,5,6,8]
 [2,3,6,9]
 [2,3,7,8]
 [2,4,5,9]
 [2,4,6,8]
 [2,5,6,7]
 [3,4,5,8]
 [3,4,6,7]
{% endhighlight %}

So with the look up table strategy, we're down to ~150 microseconds.

Note that this benchmark includes the time it takes to build the look up table. A real Kakuro solving program could just build the table at program startup time, and then it wouldn't be included in the time that it took to solve any particular puzzle.

With that in mind, let's build the table ahead of time instead of as part of the benchmark.

{%highlight julia%}
const lut = buildlut()

function benchmark_lut_precomputed()
  nmax = 0
  solnmax = Vector{Int}[]
  for sum in 1:45, m in 1:9
    soln = decompose_lut(lut, sum, m)
    if length(soln) > nmax
      nmax = length(soln)
      solnmax = soln
    end
  end
  solnmax
end
{% endhighlight %}

Here are the results:

{%highlight julia%}
julia> @time benchmark_lut_precomputed();
  0.006212 seconds (4.04 k allocations: 197.841 KB)
julia> @time benchmark_lut_precomputed()
  0.000007 seconds (5 allocations: 224 bytes)
12-element Array{Array{Int,1},1}:
 [1,2,8,9]
 [1,3,7,9]
 [1,4,6,9]
 [1,4,7,8]
 [1,5,6,8]
 [2,3,6,9]
 [2,3,7,8]
 [2,4,5,9]
 [2,4,6,8]
 [2,5,6,7]
 [3,4,5,8]
 [3,4,6,7]
{% endhighlight %}

So we're now down to ~7μs. That's probably close to the resolution of the timer used by `@time`, so you can't really trust times that small. Let's add an outer loop to the benchmark to bring the time back up to measurable levels.

{%highlight julia%}
function benchmark_lut_precomputed_x_1e6()
  nmax = 0
  solnmax = Vector{Int}[]
  for i in 1:1_000_000, sum in 1:45, m in 1:9
    soln = decompose_lut(lut, sum, m)
    if length(soln) > nmax
      nmax = length(soln)
      solnmax = soln
    end
  end
  solnmax
end
{% endhighlight %}

The results:

{%highlight julia%}
julia> @time benchmark_lut_precomputed_x_1e6();
  0.562733 seconds (6.12 k allocations: 292.998 KB)
julia> @time benchmark_lut_precomputed_x_1e6()
  0.546012 seconds (5 allocations: 224 bytes)
12-element Array{Array{Int,1},1}:
 [1,2,8,9]
 [1,3,7,9]
 [1,4,6,9]
 [1,4,7,8]
 [1,5,6,8]
 [2,3,6,9]
 [2,3,7,8]
 [2,4,5,9]
 [2,4,6,8]
 [2,5,6,7]
 [3,4,5,8]
 [3,4,6,7]
{% endhighlight %}

Dividing by our factor of a million, this shows that the benchmark runtime has been reduced to ~550ns. The original Python and lisp programs from the mailing list ran in ~1s.

I can't think of very many other times that I have been able to optimize a program by a factor of a million.

Depending on your sense of fairness, you might not like that I've lifted the computation of the table out of the benchmark (even though you can solve any number of puzzles with the same table). But remember, even computing the table took less than 200μs.

Even so, our representation of solution sets is not as efficient as it could be. As I mentioned before, we could represent the digits with an `Int8` instead of an `Int`. But we can actually do much better than that.

### Step 4: Bitmasks

We know that there are only 512 subsets of digits that we want to represent, and our lookup table actually contains each of these subsets. Instead of using a vector of digits, we could use a simple binary number as a bitmask, so that a 1 represents the presence of a certain digit in a subset, and a 0 represents the absence of that digit{% marginnote 'mn-bitarray' """Julia also has a built in `BitArray` type, so we could use a `BitArray{9}` to store our bitmask even more compactly, but there are advantages to staying aligned to bytes, so I'll proceed with an `Int16` mask.""" %}. An `Int16` has 16 binary digits, and we only need 9, so we can pack a bitmask representing any set of digits between 1 and 9 into an `Int16` with room to spare.

As an example, the number 23 is written as 10111 in binary, so you can also think of it as representing the set of digits {1,2,3,5}.

{%highlight julia%}
julia> bits(Int16(23))
"0000000000010111"
{% endhighlight %}

All we really need to switch our table over to this new representation is a way to convert an `Int16` bitmask into a set of digits. As an optimization, I'll also implement routines that count the digits and sum them without producing an intermediate array.

{%highlight julia%}
function bitmaskdigits(x::Integer)
  digits = Int[]
  n = 0
  while x > 0
    shift = 1 + trailing_zeros(x)
    n += shift
    x >>= shift
    push!(digits, n)
  end
  digits
end

function bitmasksum(x::Integer)
  sum = 0
  n = 0
  while x > 0
    shift = 1 + trailing_zeros(x)
    n += shift
    x >>= shift
    sum += n
  end
  sum
end

bitmaskcount(x::Integer) = count_ones(x)
{% endhighlight %}

With these operations defined, we can implement a very similar version of table-based decompose as before:

{%highlight julia%}
function buildlut_int()
  lut = [Int16[] for i in 1:45, j in 1:9]

  # Only 511 bitmasks because we're skipping the
  # empty set
  for i in 1:511
    push!(lut[bitmasksum(i), bitmaskcount(i)], i)
  end

  lut
end
{% endhighlight %}

Let's see how long it takes to build the look up table now:

{%highlight julia%}
julia> @time buildlut_int(); @time buildlut_int();
  0.022075 seconds (20.20 k allocations: 971.572 KB)
  0.000076 seconds (597 allocations: 32.766 KB)
{% endhighlight %}

With this new representation, we're down to only 80μs to build the look up table (twice as fast as before), and it also takes up less memory. We can also expect set operations like intersection and union to be faster on these bitmasks than they would be on a `Vector{Int}`.

We should probably expect the benchmark of finding the largest number of solutions to be the same as the previous look up table solution, since we've optimized it down to in-order array access in both cases, but let's check anyway:

{%highlight julia%}
decompose_lut_int(lut, i, j) = lut[i, j]

const lut_int = buildlut_int()

function benchmark_lut_int_precomputed_x_1e6()
  nmax = 0
  solnmax = Vector{Int}[]
  for i in 1:1_000_000, sum in 1:45, m in 1:9
    soln = decompose_lut_int(lut_int, sum, m)
    if length(soln) > nmax
      nmax = length(soln)
      solnmax = soln
    end
  end
  solnmax
end
{% endhighlight %}

{%highlight julia%}
julia> @time benchmark_lut_int_precomputed_x_1e6();
  0.561131 seconds (8.69 k allocations: 428.280 KB)
julia> @time benchmark_lut_int_precomputed_x_1e6()
  0.567186 seconds (5 allocations: 224 bytes)
12-element Array{Int16,1}:
 108
 114
 156
 170
 177
 198
 201
 282
 294
 297
 325
 387
{% endhighlight %}

As expected, the time to complete the benchmark is again ~550ns.

If we want to see a more friendly representation of the solutions, we can map `bitmaskdigits` over them:

{%highlight julia%}
julia> map(
    bitmaskdigits,
    benchmark_lut_int_precomputed_x_1e6()
  )
12-element Array{Array{Int,1},1}:
 [3,4,6,7]
 [2,5,6,7]
 [3,4,5,8]
 [2,4,6,8]
 [1,5,6,8]
 [2,3,7,8]
 [1,4,7,8]
 [2,4,5,9]
 [2,3,6,9]
 [1,4,6,9]
 [1,3,7,9]
 [1,2,8,9]
{% endhighlight %}

Unfortunately, this new representation has come at a cost in clarity and safety. It's annoying to have to call `bitmaskdigits` to see a human-friendly display, and changing the default display of `Int16` is out of the question. It would also be easy to perform inappropriate operations on these masks, like addition, negation, or multiplication, since all those operations are of course defined on integers.

Julia is a strongly typed language, but by mapping our data onto integers, we have been using it in a weakly typed way. We can make better use of Julia's type system to win back and actually improve clarity and safety with no loss of performance.

### Step 5: DigitSets

If we wrap our bitmask digit sets in an [immutable type](http://docs.julialang.org/en/release-0.4/manual/types/#immutable-composite-types), we can then restrict which operations can be performed on them, and even better, we can overload existing operations (e.g. `sum`, `length`, `union`, etc.) to perform differently on them than they do on integers.

{%highlight julia%}
immutable DigitSet
  d::Int16
end
{% endhighlight %}

With this definition, you can construct a `DigitSet` to wrap an `Int16` like this:

{%highlight julia%}
julia> DigitSet(1)
DigitSet(1)
{% endhighlight %}

The first operation we'll define is a way to get the individual digits out of a `DigitSet`. The logic we need is already contained in the `bitmaskdigits` function from before. However, rather than just returning a vector, we can do something more flexible by hooking into [Julia's iteration protocol](http://docs.julialang.org/en/release-0.4/manual/interfaces/#man-interfaces-iteration). To do that, we just need to define `start`, `next`, and `done` on `DigitSet`. We'll also override `length`, `in`, and `isempty`, although these are not strictly necessary for the iteration protocol.

{%highlight julia%}
# Allow iterating over the members of a digit set
Base.start(ds::DigitSet) = (ds.d, 0)
function Base.next(ds::DigitSet, state)
  (d, n) = state
  shift = 1 + trailing_zeros(d)
  n += shift
  d >>= shift
  return (n, (d, n))
end
Base.done(ds::DigitSet, state) = state[1] <= 0
Base.length(ds::DigitSet) = count_ones(ds.d)
Base.in(n, ds::DigitSet) = (ds.d & (1 << (n - 1))) != 0
Base.isempty(ds::DigitSet) = ds.d == 0
{% endhighlight %}

Then we can collect digits into whatever kind of container we want, or iterate over them in a streaming fashion. For example, here we collect a DigitSet into a `Vector{Int8}`:

{%highlight julia%}
julia> collect(Int8, DigitSet(100))
3-element Array{Int8,1}:
 3
 6
 7
{% endhighlight %}

Now let's define a way to construct digit sets from an array of digits, and a nicer way to display them:

{%highlight julia%}
function DigitSet(a::AbstractArray)
  d = Int16(0)
  # For each digit in a, set the corresponding
  # bit in d to 1.
  for n in a
    d |= 1 << (n - 1)
  end
  DigitSet(d)
end

function Base.show(io::IO, ds::DigitSet)
  print(io, "DigitSet")
  print(io, "([")
  print_joined(io, ds, ",")
  print(io, "])")
end
{% endhighlight %}

It's nice (but not strictly required) to define this constructor and this way of displaying a `DigitSet` together, so that the result that is displayed can also be parsed back in as a `DigitSet`.

As an aside, I wish I could define this constructor to work for any kind of iterable object instead of just for arrays, but there are two reasons that this is not possible:

1. Julia doesn't (yet) have a way of dispatching on interfaces like "iterable"; instead, you can only dispatch on type inheritance relationships. There is no `Iterable` supertype that all iterable types inherit from, and there probably shouldn't be.
2. Integers are iterable in Julia, so this would conflict with the raw `DigitSet(d::Int16)` constructor.

It sounds like both of these issues will probably be addressed at some point, but interface dispatch is still at the design stage (see [SimpleTraits](https://github.com/mauro3/SimpleTraits.jl) for a promising start, though).

Anyway, let's implement a few set operations on `DigitSet`:

{%highlight julia%}
# Set operations
Base.union(a::DigitSet, b::DigitSet) =
  DigitSet(a.d | b.d)
Base.intersect(a::DigitSet, b::DigitSet) =
  DigitSet(a.d & b.d)
Base.setdiff(a::DigitSet, b::DigitSet) =
  DigitSet(a.d & (~b.d))
Base.symdiff(a::DigitSet, b::DigitSet) =
  DigitSet(a.d $ b.d)
{% endhighlight %}

Couldn't be easier!

Let's see where we've gotten ourselves:

{%highlight julia%}
julia> a = DigitSet([1,2,7])
DigitSet([1,2,7])
julia> b = DigitSet([2, 5])
DigitSet([2,5])
julia> union(a, b)
DigitSet([1,2,5,7])
julia> intersect(a, b)
DigitSet([2])
julia> symdiff(a, b)
DigitSet([1,5,7])
julia> 7 in a
true
julia> 7 in b
false
{% endhighlight %}

Because we hooked into the iteration protocol, we also get implementations of `sum`, `minimum`, `maximum`, etc. for free:

{%highlight julia%}
julia> sum(a)
10
julia> minimum(a)
1
julia> maximum(a)
7
{% endhighlight %}

And for those of us who have worked with other people's code (or our own code, 3 months later) often enough to appreciate having boundaries:

{%highlight julia%}
julia> a+b
ERROR: MethodError: `+` has no method matching +(::DigitSet, ::DigitSet)
Closest candidates are:
  +(::Any, ::Any, ::Any, ::Any...)
julia> -a
ERROR: MethodError: `-` has no method matching -(::DigitSet)
{% endhighlight %}

This is all looking pretty convenient, but at what cost? At no cost, of course!

{%highlight julia%}
function buildlut_ds()
  lut = [DigitSet[] for i in 1:45, j in 1:9]

  for i in 1:511
    ds = DigitSet(i)
    push!(lut[sum(ds), length(ds)], ds)
  end

  lut
end
{% endhighlight %}

The time to build the look up table stays about the same at ~80μs:

{%highlight julia%}
julia> @time buildlut_ds(); @time buildlut_ds();
  0.015037 seconds (15.36 k allocations: 620.064 KB)
  0.000077 seconds (1.11 k allocations: 40.750 KB)
{% endhighlight %}

The time to run the benchmark once the lookup table is built is also again ~550ns.
{%highlight julia%}
decompose_lut_ds(lut, i, j) = lut[i, j]

const lut_ds = buildlut_ds()

function benchmark_lut_ds_precomputed_x_1e6()
  nmax = 0
  solnmax = Vector{DigitSet}[]
  for i in 1:1_000_000, sum in 1:45, m in 1:9
    soln = decompose_lut_ds(lut_ds, sum, m)
    if length(soln) > nmax
      nmax = length(soln)
      solnmax = soln
    end
  end
  solnmax
end
{% endhighlight %}

{%highlight julia%}
julia> @time benchmark_lut_ds_precomputed_x_1e6();
  0.585304 seconds (9.46 k allocations: 465.916 KB)
julia> @time benchmark_lut_ds_precomputed_x_1e6()
  0.558804 seconds (5 allocations: 224 bytes)
12-element Array{DigitSet,1}:
 DigitSet([3,4,6,7])
 DigitSet([2,5,6,7])
 DigitSet([3,4,5,8])
 DigitSet([2,4,6,8])
 DigitSet([1,5,6,8])
 DigitSet([2,3,7,8])
 DigitSet([1,4,7,8])
 DigitSet([2,4,5,9])
 DigitSet([2,3,6,9])
 DigitSet([1,4,6,9])
 DigitSet([1,3,7,9])
 DigitSet([1,2,8,9])
{% endhighlight %}

### In conclusion

I think this progression of implementations is a nice illustration of some of Julia's strengths.

When you're prototyping solutions to a problem, you can write high level code without thinking much about types or how things are laid out in memory. Julia code written in this way feels similar to Python. But once you have a correct solution, you sometimes want to make it fast.

In other high level languages that are pleasant for prototyping, the general strategy for making important parts of your programs fast is to rewrite them in a lower level language like C. This strategy works for some people, but it involves a very sharp change in the slope of the learning curve. Many smart programmers, and certainly most scientists, never make it to the "rewrite it in C" part of the process, although they do benefit from using libraries written by those sage few who do.

Julia lets you transition more gradually from high level thinking about your problem to low level thinking about how computers work. And critically, you don't have to learn a new syntax, new build systems, or arcane language bindings for communicating between the high level and low level parts of your code.

Then, once you have a fast, low level implementation, Julia's type system lets you structure and clarify it by assigning additional meaning to collections of bits, without losing performance. Even though a `DigitSet` "is" just an `Int16` (and performs like one), we can make it print however we want and restrict or rename operations on it however we want. This process is sometimes called "zero cost abstraction." It's highly valued in languages like C++ that are used to implement games and other performance intensive, polished, professional software. But C++ is a very complex language that is infamously difficult to learn, and it isn't pleasant for prototyping.

One thing that Julia generally won't do is save you completely from having to know some details about how computers represent data. At least not if you want to write code that performs up to your hardware's potential. Newcomers are occasionally disappointed that direct translations of their code from Matlab or Python into Julia don't always run much faster than they did in the original languages (they may even run slower, though usually not by a lot). Julia isn't the mythical "sufficiently smart compiler" that turns a high level specification of any problem into an efficiently implemented solution. Instead, it's a single language that lets you decide whether you want to think at a high level or a low level, and it gives you a smooth path between these two.

Thanks to Patrick Useldinger for presenting this problem and the other contributers on julia-users for an interesting conversation. It was fun for me to think about.

### Appendix: Version Info
{%highlight julia%}
julia> versioninfo()
Julia Version 0.4.0
Commit 0ff703b* (2015-10-08 06:20 UTC)
Platform Info:
  System: Darwin (x86_64-apple-darwin13.4.0)
  CPU: Intel(R) Core(TM) i7-4850HQ CPU @ 2.30GHz
  WORD_SIZE: 64
  BLAS: libopenblas (USE64BITINT DYNAMIC_ARCH NO_AFFINITY Haswell)
  LAPACK: libopenblas64_
  LIBM: libopenlibm
  LLVM: libLLVM-3.3
{% endhighlight %}