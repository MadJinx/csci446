function colorchange(num, id) {
	var inv = document.getElementById(id);
	var style = document.defaultView.getComputedStyle(inv, null);
	if (num == 0) {
		inv.style.color = "blue";
	}
	else {
		inv.style.color = "red";
	}
}

function check(id) {
	var text = document.getElementById(id).value;
	if (text==null || text=="") {
		alert("Surely you must feel something?");
	}
}