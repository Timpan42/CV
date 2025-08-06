	
Get info from the md file (index) then adds it when building
    </div>
		<p class="">{{ intro.summary }}</p>
		<a href="{{ intro.buttonUrl }}" class="button">{{ intro.buttonText }}</a>
	</div>
	<div class="">
		<img class="" src="{{ intro.image }}" alt="{{ intro.imageAlt }}" />
	</div>


Gets information, and then sets it in the ctaContent.
When including it uses the ctaContent for its layout.
Can use a md file for info, or a Json file.
{% set ctaContent = primaryCTA %}
{% include "partials/cta.html" %}


<ul>
	<li> this no work</li>

	{%- for post in collections.post -%}
	<li>
		<div>
			<a href="{{post.url}}">{{ post.data.title }}</a>
			<p>{{post.date.toLocaleString()}}</p>
		</div>
	</li>
	{%- endfor -%}
</ul>


{%- for post in collections.post -%}

{% set blogItemContent = post.data.blogItem %}
{% include "partials/blogItem.html" %}

{%- endfor -%}