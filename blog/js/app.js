// deklarasi fungsi
random = function(array) {
    array.sort(function() {
        return Math.random() - .5
    })
}

// duplikat array
arraybaru = blog.slice(0)
arrayacak = blog.slice(0)

// baru
for (nama in arraybaru) {
    arraybaru[nama] = arraybaru[nama].split(", ")
}
baru = function(x) {
    document.writeln("<a href='" + arraybaru[x][1] + "' class='list-group-item'>" + arraybaru[x][0] + "</a>")
}

// acak
random(arrayacak)
for (nama in arrayacak) {
    arrayacak[nama] = arrayacak[nama].split(", ")
}
acak = function(x) {
    document.writeln("<a href='" + arrayacak[x][1] + "' class='list-group-item'>" + arrayacak[x][0] + "</a>")
}