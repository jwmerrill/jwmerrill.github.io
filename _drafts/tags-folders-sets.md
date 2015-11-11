---
layout: post
title: Losing and Keeping Precision in Numerical Optimization
---

Differences betweeen tags and folders

1. UI metaphors. You can still draw little manilla looking things even if you’re using the “tag” concept according to the other points, so this is kind of orthogonal.
2. Nesting. Usually, tags don’t nest, but “folders” do. People kind of like nesting, even though they usually use it to make a big mess for themselves.
3. Identity/copy semantics. When I have a file in two different folders, it’s usually not “the same” file, (unless one or both of them is actually a shortcut which, I submit, most people don’t understand). When I have a file that has two tags, it’s the same file when I’m looking at it under one tag as when I’m looking at it under the other. Fewer independent copies of otherwise identical things is probably good (?)

Engineers have been trying to tell users that tags are better than folders since 3 days after folders were invented, and users are like “you can claw my folders out of my cold dead hands"

* Easiest operations with tags are intersection and union, which you can do in an add-hoc way.
* Folders give you a lot more guarantees about how things are partitioned. Each level of nesting is a subset of its parent. Folders have empty intersection with anything that is not a parent.
(is this really the right way to think of folders? are files that are "in" a folder also "in" its parent?)

In the folder model, files have a meaningful sense of "place." Not so with tags.

Could compare to relational databases vs document stores.

Wikipedia gets away with a flat namespace.

Use cases:

1. There are too many things on the screen right now!
  - Folders: make 1 or more folders, and divide the things between them
  - Tags: assign new tags to things *and then remember to usually use an intersection of tags from then on*, or remove this tag from some things (but then how will you find those thigns later), or use backslashes in the tag names to simulate folders.
2. Collect materials that will be useful to a particular project
  - Tags: put that project's tag on everything that's useful.
  - Folders: either move all the things that will be useful, or copy those things. This can be a hard choice.


