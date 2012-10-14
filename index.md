---
layout: page
title: Hello Blog!
---

## About

![My avatar](https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/41504_100001834992045_5377853_n.jpg "Me")

See my [About](/pages/about.html) page for details.


## Posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>



