function markdown(x){
	document.getElementById(x).innerHTML = marked(document.getElementById(x).innerHTML);
}
markdown('markdown');
