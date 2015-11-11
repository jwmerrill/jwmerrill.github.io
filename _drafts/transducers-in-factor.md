---
layout: post
title: Transducers In Factor
---

http://elbenshira.com/blog/understanding-transducers/

Note how map and filter can be defined in terms of reduce (or each...).

Look at how [ suffix ] appears in the definition of map and filter. Notice that suffix is just one example of a reducer, and when we compose things like map and filter together, intermediate results are also reducers.

Try to factor out usage of suffix so that we can replace it by a general reducer, i.e. a function of the form ( result input -- result ).

{% highlight factor %}
IN: scratchpad  USE: locals

IN: scratchpad  { 1 2 3 4 5 } [ 1 + ] map .
{ 2 3 4 5 6 }

IN: scratchpad  { 1 2 3 4 5 } { } [ 1 + suffix ] reduce .
{ 2 3 4 5 6 }

IN: scratchpad  { 1 2 3 4 5 } [ even? ] filter [ 1 + ] map .
{ 3 5 }

IN: scratchpad  { 1 2 3 4 5 } { } [ suffix ] reduce .
{ 1 2 3 4 5 }

IN: scratchpad  { 1 2 3 4 5 } { } [ suffix ] [ 1 + ] prepose reduce .
{ 2 3 4 5 6 }

IN: scratchpad : mapper ( reducer op -- reducer ) prepose ;

IN: scratchpad  { 1 2 3 4 5 } { } [ dup even? [ suffix ] [ drop ] if ] reduce .
{ 2 4 }

IN: scratchpad : filterer ( reducer pred -- reducer )
  [ dup ] prepose swap [ [ drop ] if ] curry compose ;
;

IN: scratchpad :: filterer ( reducer pred -- reducer )
  [ dup pred call reducer [ drop ] if ] ;
;

IN: scratchpad  { 1 2 3 4 5 } { } [ suffix ] [ even? ] filterer [ 1 + ] mapper reduce .
{ 2 4 6 }

IN: scratchpad  { 1 2 3 4 5 }
  [ [ 1 + ] mapper ]
  [ [ even? ] filterer ] prepose
  [ { } [ suffix ] ] prepose call
  reduce .
{ 2 4 6 }

IN: scratchpad  { 1 2 3 4 5 }
  [ [ 1 + ] mapper ]
  [ [ even? ] filterer ] prepose
  [ 0 [ + ] ] prepose call
  reduce .
12

{% endhighlight %}