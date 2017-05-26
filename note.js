 var counter = 3;
 var str = "";
 if (localStorage.getItem("list")) {
     str = localStorage.getItem("list")
 }

 

 function addnote() {
     var s = document.getElementById("notetext").value; //資料
     var x = document.getElementById("x").value; //x
     var y = document.getElementById("y").value; //y
     var data = document.getElementById("next").value;
     //var z=x+y;
     //alert((parseInt(x)+10))
     //alert(parseInt(temp)+parseInt(temp1));
     //  var str="";

     str += "<div id='gggggg' class='dragable'><img height='150' width='120' class='note' style='top:" + parseInt(x) + "px; left:" + parseInt(y) + "px; z-index:" + counter + "''; src='postIt.png' />";
     str += "<p class='notetext' style='top:" + (parseInt(x) + 10) + "px; left:" + parseInt(y) + "px; z-index:" + (parseInt(counter) + 1) + ";'>" + s + "<br/></p></div>";
     document.getElementById("next").innerHTML = str;
     counter += 2;
     localStorage.setItem("list", str);
     //"<p class='notetext' style='top:"+ Math.floor(x+10)+"px; left:"+ y+"; z-index:2;'>"+s+"<br/></p>"
     //"<img height='150' width='120' class='note' style='top:"+ x+"; left:"+ y+"; z-index:"+z+"; src='postIt.png' />"
 } //  <img src="blackboard.jpg" height="624" width="894" style="float:left; z-index:0;" />
 //<img height="150" width="120" class="note" style="top: 60px; left: 60px; z-index:2;" src="postIt.png" />
 //<p class="notetext" style="top: 70px; left: 60px; z-index:3;">Note範例2<br/>(純粹測試)</p>
 function clears() {
     alert("clear");
     counter = 3;
     str = " ";
     document.getElementById("next").innerHTML = str;
     localStorage.clear();
 }
 function display(){
  document.getElementById("next").innerHTML = str;
 }
display()