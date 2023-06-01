var n1 = prompt("What is your name?");
var n2 = prompt("What is your crush name?");
document.querySelector(".name1").innerHTML=n1;
document.querySelector(".name2").innerHTML=n2;
var n = Math.random();
n = n * 100;
n = Math.floor(n);
document.querySelector(".btn").innerHTML=n+"%";
document.querySelector("body").addEventListener("click",function(){
    var audio = new Audio("Kali Kali Zulfon Ke - Madhur Sharma.mp3");
    audio.play();
}, {once : true});
