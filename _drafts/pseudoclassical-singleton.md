---
layout: post
category : development
tags : [javacript, singleton, pseudoclassical]
title : "Creating a pseudoclassical singleton class in javascript"
---
Wrap the main class constructor function similar to the way pseudoclassical
subclassing is done.  Use the private data in the function closure scope
to hold the first/only instance created by the constructor

Since the wrapper is anonymous, there should be no reasonable way to call it multiple times.  What about if the script file is included multiple times?

Possible to use namespace to check for that sort of duplication, but was hoping to avoid global scope pollution.  Can not really avoid in the (range of) intended usage, since the constructor function needs to be visible, to create / get the instance.  If putting that in a namespace for access, the anonymous wrapper seems feasible / reasonable.
