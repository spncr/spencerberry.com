---
title: "Trick Library"
layout: "layouts/base.njk"
---
## trick library
<ul>
  {% for trick in collections.tricks %}
  <li><a href="{{ trick.url}}">{{ trick.data.name}}</a></li>
  {% endfor %}
</ul>