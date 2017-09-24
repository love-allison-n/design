// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var hit = document.getElementById('hit');
    var up = document.getElementById('up');
    hit.onclick = function() {myFunction()};

function myFunction() {
    up.style.opacity = ".0";
}


  });
