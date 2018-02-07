document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var list = document.getElementsByTagName('section');
    var check = document.getElementsByTagName('h3');
    var desc = document.getElementById('desc');

    list[0].onmouseover = function () {check[0].innerHTML = "California is a Bubble"; desc.innerHTML = "California is very serious about being environmentally responsible. Leaving California has been an eye opener about other parts of the world. I've seen a lot of littering and lack of recycling. The extent of the environmental problem is no longer a mystery to me."};
    list[1].onmouseover = function () {check[0].innerHTML = "I like Mornings"; desc.innerHTML = "Now that I'm exploring the world, I'm excited for everyday, and it's easy to wake up in the mornings. My personal schedule has changed and I learned to be a morning peron."};
    list[2].onmouseover = function () {check[0].innerHTML = "Traveling Light"; desc.innerHTML = "As I'm moving around, I'm decicively carrying around less stuff to make traveling a little easier. Having less stuff with me has gottenn rid of a lot of distractions and simplified my life a little. The one thing I haven't been able to part with is my computer. Though I imagine that would make a huge difference in my life, I don't think I could handle it."};

    list[0].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[1].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};
    list[2].onmouseout = function () {check[0].innerHTML = ""; desc.innerHTML = ""};

});
