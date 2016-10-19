---
layout: post
title: Project Euler Problem 1
date: 2016-10-19 09:03:53 +0800
category: project euler
---


{% highlight python %}

angka = []
for n in range(1, 1000):
	if n % 3 == 0 or n % 5 == 0:
		angka.append(n)
print sum(angka)

{% endhighlight %}

<!-- more -->

![]({{ site.url }}/gambar/euler 1.jpg)