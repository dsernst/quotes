---
layout: page
title: All Posts
---

<div class="postsList">
{% for post in site.posts %}
  <p>{{ post.date | date_to_string }}: <a href="{{ post.url }}">{{ post.title }}</a></p>
{% endfor %}
</div>