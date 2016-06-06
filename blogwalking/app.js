acak = function(array){
	array.sort(function(){
		return Math.random() - .5
	})
}
acak(blog)
for (nama in blog){
	blog[nama] = blog[nama].split(", ")
}
tulis = function(x){
	document.writeln("<a target='_blank' href='"+blog[x][1]+"'><h1>"+blog[x][0]+"</h1></a>")
}