---
layout: post
title: Program Menghitung Tagihan Listrik
date: 2016-10-17 12:29:55 +0800
category: python
---

{% highlight python %}

tdl = 250
subsidi = 0
bayar = 0
total = 0

nama = input("Masukkan nama: ")
alamat = input("Masukkan alamat: ")
kw_lalu = input("Masukkan kW bulan lalu: ")
kw_sekarang = input("Masukkan kW bulan ini: ")
tegangan = input("Masukkan tegangan (450, 900, 1200): ")

if tegangan == 450 or tegangan == 900 or tegangan == 1200 and nama is not None and alamat is not None and kw_lalu is not None and kw_sekarang is not None:
	
	print "Nama: %r" % nama
	print "Alamat: %r" % alamat
	print "Tegangan: %r" % tegangan

	bayar = (kw_sekarang - kw_lalu) * tdl

	print "Tarif pokok: %r" % bayar

	if tegangan == 450:
		subsidi = bayar * 0.1
		total = bayar - subsidi
		print "Subsidi: %r" % subsidi
		print "Total tagihan: %r" % total
	if tegangan == 1200:
		tambahan = bayar * 0.1
		total = bayar + tambahan
		print "Biaya tambahan: %r" % tambahan
		print "Total tagihan: %r" % total

{% endhighlight %}

<!-- more -->

![]({{ site.url }}/gambar/koding.jpg)

[Baca Juga: Si Cantik Linux Mint]({{ site.url }}/2016/10/12/si-cantik-linux-mint)