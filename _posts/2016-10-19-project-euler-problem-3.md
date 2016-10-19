---
layout: post
title: Project Euler Problem 3
date: 2016-10-19 09:07:19 +0800
category: project euler
---

{% highlight python %}

n = 600851475143
i = 2
while i * i < n:
	while n % i == 0:
		n /= i
	i += 1
print n

{% endhighlight %}

<!-- more -->

![]({{ site.url }}/gambar/euler 3.jpg)