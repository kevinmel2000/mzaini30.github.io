---
layout: post
title: Download Komik dengan Linux
date: 2016-11-05 08:25:47 +0800
category: linux
gambar: manga.jpg
---

![]({{ site.url }}/gambar/manga.jpg)

# Tools yang Dibutuhkan

1. [Internet](http://internetpositif.uzone.id/)
2. [Linux](https://www.linux.or.id/)
3. [Sublime Text](https://www.sublimetext.com/)
4. [Sublime HTML Prettify](https://github.com/victorporof/Sublime-HTMLPrettify)
5. [Mozilla Firefox](https://www.mozilla.org/id/firefox/new/)
6. [Add-ons ImageBlock](https://addons.mozilla.org/en-US/firefox/addon/image-block/)

# Langkah Pengerjaan

<!-- more -->

1. Buat folder `komik 2`

	![]({{ site.url }}/gambar/komik/1.png)

2. Nonaktifkan gambar pada Firefox

	![]({{ site.url }}/gambar/komik/2.png)

3. Pilih [chapter manga](http://www.mangacanblog.com/baca-komik-black_rock_shooter_the_game-1-2-bahasa-indonesia-black_rock_shooter_the_game-1-terbaru.html) yang akan kamu download dari situs [mangacanblog.com](http://mangacanblog.com) lalu klik `Baca Mode Full Page`

	![]({{ site.url }}/gambar/komik/3.png)

4. Tekan `Ctrl + S` untuk menyimpan halaman. Pilih folder `komik 2` dan buatlah folder baru sesuai dengan judul manga dan chapter manga. Di sini saya membuat folder `black rock shooter the game` lalu membuat folder `1`. Simpan halaman dengan nama `data.html` dan pilih `Web Page, HTML Only` pada pilihan penyimpanan. Klik `Simpan`

	![]({{ site.url }}/gambar/komik/4.png)

5. Buka file `data.html` yang sudah kita download tadi dengan menggunakan `Sublime Text`

	![]({{ site.url }}/gambar/komik/5.png)

6. Kamu bisa menggunakan `Ctrl + Shift + H` untuk menjalankan `HTML Prettify`

7. Cari `<div id="imgholder">` lalu hapus dari bagian tersebut hingga ke atas

	![]({{ site.url }}/gambar/komik/7.png)

8. Cari `</div>` yang terletak setelah `</center>` lalu hapuslah dari bagian tersebut hingga akhir

	![]({{ site.url }}/gambar/komik/8.png)

9. Gunakan `HTMl Prettify` untuk merapikan script

	![]({{ site.url }}/gambar/komik/9.png)

10. Blok `terbaru-1` lalu tekan `Ctrl + H`. Di bagian `Find What`, ubah `terbaru-1` menjadi `terbaru-\d{1,}` dan jangan lupa untuk mengaktifkan regex dengan menekan `Alt + R`. Untuk bagian `Replace With`, kosongkan saja. Tekan `Ctrl + Alt + enter` untuk menjalankan find and replace

	![]({{ site.url }}/gambar/komik/10.png)

11. Blok `Terbaru 0` lalu tekan `Ctrl + H`. Di bagian `Find What`, ubah `Terbaru 0` menjadi `Terbaru \d{1,}` dan jangan lupa untuk mengaktifkan regex dengan menekan `Alt + R`. Untuk bagian `Replace With`, kosongkan saja. Tekan `Ctrl + Alt + enter` untuk menjalankan find and replace

	![]({{ site.url }}/gambar/komik/11.png)

12. Salin bagian

    ```html

	<center>
	    <a href="http://www.mangacanblog.com/baca-komik-black_rock_shooter_the_game-1-2-bahasa-indonesia-black_rock_shooter_the_game-1-.html">
	        <div id='manga'><img alt="Dilarang COPAS - situs resmi www.mangacanblog.com - Komik black rock shooter the game 001 - boot up BRS 2 Indonesia black rock shooter the game 001 - boot up BRS |Baca Manga Komik Indonesia|Mangacan" src=

    ```

	dengan menggunakan `Ctrl + C` lalu tekan `Ctrl + H` dan tempelkan yang kita salin tadi menggunakan `Ctrl + V` di bagian `Find What`. Matikan regex dengan menekan `Alt + R`. Lalu tekan `Ctrl + Alt + enter` untuk menjalankan find and replace

	![]({{ site.url }}/gambar/komik/12.png)

13. Salin bagian

    ```html

	 width="990" class="picture" /></div>
	    </a>
	</center>

    ```

	dengan menggunakan `Ctrl + C` lalu tekan `Ctrl + H` dan tempelkan yang kita salin tadi menggunakan `Ctrl + V` di bagian `Find What`. Lalu tekan `Ctrl + Alt + enter` untuk menjalankan find and replace

	![]({{ site.url }}/gambar/komik/13.png)

14. Hapus bagian yang tidak diperlukan

	![]({{ site.url }}/gambar/komik/14.png)

15. Buka find and replace lalu di bagian `Find What`, isilah dengan `(.+)` dan di bagian `Replace With`, isi dengan `wget \1`

	![]({{ site.url }}/gambar/komik/15.png)

16. Buka folder. Buka Terminal di folder tersebut. Lalu, ketikkan `mv data.html data.sh`. Setelah itu, ketikkan `sh data.sh`

	![]({{ site.url }}/gambar/komik/16a.png)
	
	![]({{ site.url }}/gambar/komik/16b.png)

17. Proses mengunduh

	![]({{ site.url }}/gambar/komik/17.png)

18. Ketikkan `ls > baca.html`

	![]({{ site.url }}/gambar/komik/18.png)

19. Buka `baca.html` dengan `Sublime Text`, hapus bagian yang tidak perlu. Lalu, buka find and replace. Di bagain `Find What`, isi dengan `(.+)` dan di bagian `Replace With`, isi dengan `<img src=\"\1\"/>`. Kemudian ketik `<link rel="stylesheet" href="../../style.css">` di bagian atas script

	![]({{ site.url }}/gambar/komik/19a.png)
	
	![]({{ site.url }}/gambar/komik/19b.png)

20. Kembali ke folder dan menuju `komik 2`. Buka Terminal dan ketikkan `touch style.css` lalu bukalah `style.css` dengan `Sublime Text` dan isilah dengan script di bawah ini:

    ```css

	* {
		margin: 0;
		padding: 0;
	}
	body {
		background: #202020;
	}
	img {
		max-width: 80%;
		display: block;
		margin: auto;
	}

    ```

	![]({{ site.url }}/gambar/komik/20.png)

21. Komik siap dinikmati

	![]({{ site.url }}/gambar/komik/21.png)