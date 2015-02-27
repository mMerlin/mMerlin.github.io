---
layout: post
category : development
tags : [javascript, pseudoclassical, object, properties, getter, setter]
title : "Using getter and setter properties for pseudoclassical instances"
---
Working on the Frogger game for project 3 (arcade game) of the Udacity FrontEnd Web Developer NanoDegree, I got tired or making sure to update dependent object properties when changing values on instances.  A bit of research lead to Object.defineProperties, and the javaScript getters and setters.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters

Object.create() using the optional second parameter looks like a another alternative, although the example may need some adjustment to work in a pseudoclassical constructor function.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Example:_Using_propertiesObject_argument_with_Object.create
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
http://stackoverflow.com/questions/5222209/getter-setter-in-constructor
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Defining_getters_and_setters

All information seems to say that it is not possible to use the literal syntax to create a class (instance) property with getter / setter functionality in the constructor function.  Use Object.definePropery(this, ...) instead.

// Psuedoclassical class with private data/functions in a wrapper function (closure) scope
var TestClass = (function () {
  var TestClass;

  function getFirstProperty () {
    return this.otherPropery + 1;
  }// end private closure scope function definition

  TestClass = function () {
    this.otherProperty = 1;
    Object.defineProperty(this, "firstProperty", {
      get : getFirstProperty
    });
  };// end wrapped class constructor function
  return TestClass;
}());// End wrapper that hides things in the function scope
test = new TestClass();
console.log(test.firstPropery);

The above works.  The getFirstProperty() function is the closure scope, so it can be accessed from inside the constructor function.  When firstProperty is accessed for an created instance, it is prefixed with the instance reference, so 'this' becomes a reference to the the instance.

Effectively, get : getFirstProperty is something like return getFirstPropery.call(this)


 it is accessed from the created instance, it