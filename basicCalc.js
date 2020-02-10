function add(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    var total = x + y;
    document.getElementById("output").innerHTML = total; 
}
function sub(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    var total = x - y;
    document.getElementById("output").innerHTML = total; 
}
function mul(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    var total = x * y;
    document.getElementById("output").innerHTML = total; 
}
function div(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    var total = x / y;
    document.getElementById("output").innerHTML = total; 
}
function mod(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    var total = x % y;
    document.getElementById("output").innerHTML = total; 
}
function inc(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    var total = ++x + ++y;
    document.getElementById("output").innerHTML = total; 
}
function dec(){
    var x = Number(document.getElementById("num1").value);
    var y = Number(document.getElementById("num2").value);
    var total = --x + --y;
    document.getElementById("output").innerHTML = total; 
}
$(function () {
    $('[data-toggle="popover"]').popover()
  })