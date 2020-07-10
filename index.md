---
layout: page
title: Main μMerlin Github page
---
{% comment %}
tagline: Supporting tagline
{% endcomment %}## References

* #### Markdown

  * <a href="https://help.github.com/articles/markdown-basics">Basics</a>
  * <a href="https://help.github.com/articles/github-flavored-markdown/">GitHub Flavored Markdown</a>

## Projects

* <a href="https://www.udacity.com/">Udacity</a> Frontend Web Developer NanoDegree
  * <a href="/mug-mockup/">Project 1:</a> mug-mockup
  * <a href="/resume/">Project 2:</a> résumé
  * <a href="/frontend-nanodegree-arcade-game/">Project 3:</a> Frogger (work in progress)
  * Samples from courses
    * HTML5 Canvas
      * <a href="/udacity/canvas/memeMaker.html">Simple Meme Maker</a>

## Posts{% capture junk %}

  {% assign goodlines = nil %}
  {% for post in site.posts %}
    {% capture goodlines %}{{ goodlines }}
  <li>{{ post.date | date_to_string }} &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>{% endcapture %}
  {% endfor %}
{% endcapture %}
<ul class="posts">{{ goodlines }}
</ul>

## Random

* Fritzing
  * Sketch for [Arduino Uno as FTDI](fritzing/ESP8266%20Serial%20Via%20Arduino.fzz) to program ESP8266 ESP-01 module

## To Do

* add sidebar to hold the extras
* refactor theme(s) to:
  * pull common header stuff out
  * provide insertion points to add extra tags
    * site and page specific css and js
  * look at jekyll / liquid code to see about suppressing blank output lines where only liquid templating exists on the source line
    * need? extra wrapper to show when to suppress?  {&zwnj;%[%-] ?
    * alternate (less pretty) idea: allow the opening "{&zwnj;%" to be on the previous line from the tag content
  * add "{&zwnj;% capture junk %}…{&zwnj;% endcapture %}" wrappers around (non-outputting) code blocks
  * restructure to assign value to variables in code blocks then emit after end of block
    * do nested capture blocks work?
      * yes, though some care is needed
    * JB/pages_list is done with very good results.
  * provide optional indent level information to called / included procedures, to help beautify the generated html.
    * JB/pages_list currently has a hard-coded indent prefix.  Some added logic could change that to use what was provided by the caller, using the same general logic as the group variable.  Use it when it exists; use a default value when it does not.
