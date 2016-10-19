---
layout: post
title: Project Euler Problem 10
date: 2016-10-19 09:11:12 +0800
category: project euler
---

{% highlight python %}

hi = 2000000

numbers = set(xrange(3, hi + 1, 2))

for number in xrange(3, int(hi ** 0.5) + 1):
	if number not in numbers:
		continue

	num = number
	while num < hi:
		num += number
		if num in numbers:
			numbers.remove(num)

print 2 + sum(numbers)

{% endhighlight %}

<!-- more -->

![]({{ site.url }}/gambar/euler 10.jpg)