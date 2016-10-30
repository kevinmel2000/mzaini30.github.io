---
layout: post
title: Project Euler Problem 4
date: 2016-10-30 21:25:32 +0800
category: project euler
gambar: no-error.png
---

{% highlight python %}

satu = dua = range(100, 1000)[::-1]
hasil_kali = []
hasil_kali_palindrom = []

for x in satu:
	for y in dua:
		kali = x * y
		hasil_kali.append(kali)
for x in hasil_kali:
	if str(x) == str(x)[::-1]:
		hasil_kali_palindrom.append(x)
hasil_kali_palindrom.sort(reverse = True)
print hasil_kali_palindrom[0]

{% endhighlight %}

<!-- more -->

![]({{ site.url }}/gambar/no-error.png)