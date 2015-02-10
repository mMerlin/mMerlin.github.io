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
  * Samples from coursea
    * HTML5 Canvas
      * <a href="/udacity/canvas/memeMaker.html">Simple Meme Maker</a>

## Posts
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## To Do
* add sidebar to hold the extras
* refactor theme(s) to:
  * pull common header stuff out
  * provide insertion points to adding extra tags
    * site and page specific css and js
