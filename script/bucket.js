// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var list = document.getElementsByTagName('section');
    var check = document.getElementsByTagName('h3');
    var desc = document.getElementById('desc');

    list[0].onmouseover = function () {check[0].innerHTML = "Check!"; desc.innerHTML = "I met eight elephants at the Elephant Jungle Sanctuary. We had lunch together and everything!"};
    list[1].onmouseover = function () {check[0].innerHTML = ""; desc.innerHTML = "I have yet to check this off my bucket list."};
    list[2].onmouseover = function () {check[0].innerHTML = ""; desc.innerHTML = "I have yet to check this off my bucket list."};
    list[3].onmouseover = function () {check[0].innerHTML = "Check!"; desc.innerHTML = "I took a surfing lesson in Dunedin, New Zealand on December 23, 2017."};
    list[4].onmouseover = function () {check[0].innerHTML = "Check!"; desc.innerHTML = "I saw the Merchant of Venice at the Sydney Opera House on October 29, 2017."};
    list[5].onmouseover = function () {check[0].innerHTML = "Check!"; desc.innerHTML = "I went to Niagra Falls with my family when I was eleven."};
    list[6].onmouseover = function () {check[0].innerHTML = "Check!"; desc.innerHTML = "I got to see a mother and daughter koala at the Melbourne Zoo on November 9, 2017."};
    list[7].onmouseover = function () {check[0].innerHTML = ""; desc.innerHTML = "I have yet to check this off my bucket list."};
    list[8].onmouseover = function () {check[0].innerHTML = "Check!"; desc.innerHTML = "I saw wild kangaroos in a Melbourne Suburb while on a hike on November 7, 2017."};
    list[9].onmouseover = function () {check[0].innerHTML = ""; desc.innerHTML = "I have yet to check this off my bucket list."};
    list[10].onmouseover = function () {check[0].innerHTML = "Check!"; desc.innerHTML = "I visited Queenstown, New Zealand in December 2017 and got to see the great mountains, valleys, and lakes."};
    list[11].onmouseover = function () {check[0].innerHTML = ""; desc.innerHTML = "I have yet to check this off my bucket list."};
    list[12].onmouseover = function () {check[0].innerHTML = "Check!"; desc.innerHTML = "I toured the Hobbiton Movie Sets where The Hobbit was filmed with my sister Ana on January 2, 2018."};
    list[13].onmouseover = function () {check[0].innerHTML = ""; desc.innerHTML = "I have yet to check this off my bucket list."};
    list[14].onmouseover = function () {check[0].innerHTML = ""; desc.innerHTML = "I have yet to check this off my bucket list."};
    list[15].onmouseover = function () {check[0].innerHTML = ""; desc.innerHTML = "I have yet to check this off my bucket list."};
    list[16].onmouseover = function () {check[0].innerHTML = "Check!"; desc.innerHTML = "I did a tandum sky dive in Hollister, California with some college friends in March, 2017."};

    list[0].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[1].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[2].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[3].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[4].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[5].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[6].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[7].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[8].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[9].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[10].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[11].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[12].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[13].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[14].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[15].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[16].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};


});
