
//var grid = {x: 0, y: 0};
//grid.x = prompt("number of columns");
//grid.y = prompt("number of rows");
//console.log(grid);document.getElementById("table").onload = function() {loading()};

var stageOne = (function () {
    function loading() {
		 col = prompt("number of columns");
		 row = prompt("number of rows");
		 grid = {col, row};
		 var table = document.getElementById("table");
		 for (i = 0; i < grid.row; i++) {
		     var tr = document.createElement("tr");
		     table.appendChild(tr);
		     for (k = 0; k < grid.col; k++) {
		       var td = document.createElement("td");
		       var color = ["blue", "red", "yellow"];
		       td.style.backgroundColor = color[Math.round((Math.random()*2)+0)];
		       var txt = document.createTextNode("XX");
		       tr.appendChild(td);
		       td.appendChild(txt);
		     }
		 }
		 tr.appendChild(td);
		 table.appendChild(tr);
	 };
    return {
			loading : loading
   };
}( ));
stageOne.loading();


var stageTwo = (function () {
   function start(){
		 		x = prompt("x");
		 		y = prompt("y");
		    color = prompt("color");
				obj = {x, y, color};
		 	document.getElementById("target").innerHTML = x + "," + y + "," + color;
		 	document.getElementById("object").innerHTML = obj.x + "," + obj.y + "," + obj.color;
		 }
		function start(){
// start to paint


		}
    return {
        start : start   //return what should be public
   };
}( ));
document.getElementById("start").onclick = stageTwo.start;
