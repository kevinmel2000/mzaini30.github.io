var blog2 = blog.slice(0)
for (nama in blog2) {
    blog2[nama] = blog2[nama].split(", ")
}
baru = function(x) {
    document.writeln("<a href='" + blog2[x][1] + "' class='list-group-item'>" + blog2[x][0] + "</a>")
}


random = function(array) {
    array.sort(function() {
        return Math.random() - .5
    })
}
random(blog)
for (nama in blog) {
    blog[nama] = blog[nama].split(", ")
}
acak = function(x) {
    document.writeln("<a href='" + blog[x][1] + "' class='list-group-item'>" + blog[x][0] + "</a>")
}
