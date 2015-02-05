---
layout: page
title: Main μMerlin Github page
---
<!-- tagline: Supporting tagline -->
{% include JB/setup %}

Simple shell for now, to enable github pages for projects

### https://www.udacity.com/ Udacity
* Frontend Web Developer NanoDegree projects
  * Project 1: http://mmerlin.github.io/mug-mockup/ mug-mockup
  * Project 2: http://mmerlin.github.io/resume/ résumé

### Markdown
* Basics https://help.github.com/articles/markdown-basics
* GitHub Flavored Markdown https://help.github.com/articles/github-flavored-markdown/

## Posts
<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
