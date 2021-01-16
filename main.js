function Add() {
    var result =
    Number(document.getElementById("firstno").value)+
    Number(document.getElementById("secondno").value);
    document.getElementById("btn1").value = result;
    }
    function Subtract() {
    var result =
    Number(document.getElementById("firstno").value)-
    Number(document.getElementById("secondno").value);
    document.getElementById("btn2").value = result;
    }
    function Multiply() {
    var result =
    Number(document.getElementById("firstno").value)*
    Number(document.getElementById("secondno").value);
    document.getElementById("btn3").value = result;
    }
    function Divide() {
    var result =
    Number(document.getElementById("firstno").value)/
    Number(document.getElementById("secondno").value);
    document.getElementById("btn4").value = result;
    }