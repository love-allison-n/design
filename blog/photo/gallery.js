// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

// Navigation across site
    var arrows = document.getElementsByTagName('img');
    var tri1 = document.getElementById('tri1');
    var tri2 = document.getElementById('tri2');
    var stay = false;

    arrows[1].onmouseover = function() {topRight()};
    tri1.onmouseleave = function() {trout()};
    arrows[2].onmouseover = function() {bottomRight()};
    tri2.onmouseleave = function() {brout()};

    function topRight() {
      arrows[1].style.opacity = "0";
      tri1.style.top = "-600px";
      tri1.style.right = "-450px";
    }

    function trout() {
      arrows[1].style.opacity = "1";
      tri1.style.top = "-800px";
      tri1.style.right = "-700px";
    }

    function bottomRight() {
      arrows[2].style.opacity = "0";
      tri2.style.bottom = "-600px";
      tri2.style.left = "-450px";
    }

    function brout() {
      arrows[2].style.opacity = "1";
      tri2.style.bottom = "-800px";
      tri2.style.left = "-700px";
    }

  // Navigation through images
    var back = document.getElementById('back');
    var next = document.getElementById('next');
    var heading = document.getElementsByTagName('h1');
    var describe = document.getElementsByTagName('p');
    var photo = document.getElementById('photo');
    var index = 0;

    var source = [
      "../../images/operaBridge.jpg",
      "../../images/fortune.jpg",
      "../../images/slitDrum.jpg",
      "../../images/cockatoo.jpg",
      "../../images/westfield.jpg",
      "../../images/ibis.jpg",
      "../../images/fountain.jpg",
      "../../images/mangere.jpg",
      "../../images/monument.jpg",
      "../../images/oneTree.jpg",
      "../../images/blackSheep.jpg",
      "../../images/woman.jpg",
      "../../images/man.jpg",
      "../../images/paperArt.jpg",
      "../../images/blue.jpg",
      "../../images/black.jpg",
      "../../images/red.jpg",
      "../../images/emu.jpg",
      "../../images/kea.jpg",
      "../../images/rino.jpg",
      "../../images/zebra.jpg",
      "../../images/swans.jpg",
      "../../images/swam.jpg",
      "../../images/weka.jpg",
      "../../images/peak.jpg",
      "../../images/bowl.jpg",
      "../../images/city.jpg",
      "../../images/skyline.jpg",
      "../../images/boardwalk.jpg",
      "../../images/island.jpg",
      "../../images/stairs.jpg",
      "../../images/swing.jpg",
      "../../images/shell.jpg",
      "../../images/northshore.jpg",
      "../../images/beachChair.jpg",
      "../../images/speedBump.jpg",
      "../../images/margaret.jpg",
      "../../images/marsh.jpg",
      "../../images/treeStruggles.jpg",
      "../../images/oa.jpg"
    ];
    var alternate = [
      "The Sydney Opera House",
      "Brass Boar",
      "Slit Drum",
      "A cockatoo",
      "Westfield Tower",
      "White Ibis",
      "Archibald Fountain",
      "View of Auckland",
      "One Tree Hill Monument",
      "One Tree Hill Domain",
      "Little Black Sheep",
      "Moari Portrait",
      "Moari Portrait",
      "Paper Art",
      "Blue Panels",
      "Free Fall",
      "Red Panels",
      "Emu",
      "Kea Bird",
      "Rino",
      "Zebra and Giraffe",
      "Swan Family",
      "Australasian Swamphen",
      "Weka Bird",
      "View From Rangitoto Peak",
      "Volcano Bowl",
      "View of Auckland",
      "Auckland Skyline",
      "Wairangi Warf",
      "Island and Sailboats",
      "Stairs to Beach",
      "A Beach Swing",
      "Beach Shell",
      "Bridge to Northshore",
      "Sentinel Beach Reserve",
      "Auckland Speed Bump",
      "Margaret Street Sign",
      "Hobson Bay",
      "The Struggling Tree",
      "Alli at the Oakland Airport"
    ];
    var height = [
      "333px",
      "333px",
      "500px",
      "333px",
      "500px",
      "333px",
      "333px",
      "333px",
      "500px",
      "333px",
      "333px",
      "500px",
      "500px",
      "333px",
      "333px",
      "250px",
      "333px",
      "333px",
      "333px",
      "333px",
      "333px",
      "333px",
      "333px",
      "333px",
      "333px",
      "333px",
      "333px",
      "333px",
      "333px",
      "333px",
      "333px",
      "500px",
      "333px",
      "333px",
      "333px",
      "333px",
      "333px",
      "500px",
      "333px",
      "500px"
    ];
    var width = [
      "500px",
      "500px",
      "333px",
      "500px",
      "333px",
      "500px",
      "500px",
      "500px",
      "333px",
      "500px",
      "500px",
      "423px",
      "425px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "333px",
      "500px",
      "500px",
      "500px",
      "500px",
      "500px",
      "333px",
      "500px",
      "333px"
    ];
    var headings = [
      "October 29, 2017",
      "October 29, 2017",
      "October 28, 2017",
      "October 28, 2017",
      "October 26, 2017",
      "October 26, 2017",
      "October 26, 2017",
      "October 23, 2017",
      "October 14, 2017",
      "October 14, 2017",
      "October 14, 2017",
      "October 5, 2017",
      "October 5, 2017",
      "October 5, 2017",
      "October 5, 2017",
      "October 5, 2017",
      "October 5, 2017",
      "September 28, 2017",
      "September 28, 2017",
      "September 28, 2017",
      "September 28, 2017",
      "September 28, 2017",
      "September 28, 2017",
      "September 22, 2017",
      "September 22, 2017",
      "September 22, 2017",
      "September 22, 2017",
      "September 22, 2017",
      "September 21, 2017",
      "September 21, 2017",
      "September 21, 2017",
      "September 21, 2017",
      "September 21, 2017",
      "September 21, 2017",
      "September 21, 2017",
      "September 21, 2017",
      "September 21, 2017",
      "September 18, 2017",
      "September 15, 2017",
      "September 12, 2017"
    ];
    var descriptions = [
      "The obligatory beautiful Sydney Opera House picture.",
      "Leaving a coin and rubbing this boar's nose is good fortune.",
      "A Slit Drum used on the island of Ambrym to transmit messages.",
      "These Sulfur Crested Cockatoos have a call like a scream.",
      "Every city needs a tall tower in it's skyline. This is Sydney's.",
      "White Ibis birds are as common as Pigeons in Sydney parks.",
      "This is the dramatic Archibald Fountain in Hyde Park Sydney.",
      "The view of Auckland from the suburb of Mangere.",
      "The One Tree Hill Monument sitting at the top of a volcano.",
      "The view of the city outside the park from One Tree Hill Domain.",
      "A happy little black sheep resting by the fence at One Tree Hill Domain.",
      "The Moari Portraits exhibit at the Auckland Central Art Gallery.",
      "The Moari Portraits exhibit at the Auckland Central Art Gallery.",
      "The New Zealand Artists exhibit at the Auckland Central Art Gallery.",
      "The New Zealand Artists exhibit at the Auckland Central Art Gallery.",
      "The New Zealand Artists exhibit at the Auckland Central Art Gallery.",
      "The New Zealand Artists exhibit at the Auckland Central Art Gallery.",
      "The huge flightless emu bird and the rail that contains it.",
      "This is the friendly little Kea bird that flew up to the rail next to me.",
      "Just a beautiful sleepy rino resting at the Auckland Zoo.",
      "Both my sisters' favorite animals in the same exhibit.",
      "A family of black swans chilling in the parking lot outside the Zoo.",
      "This is an Australasian Swamphen in the park outside the Auckland Zoo.",
      "One of the cute little Weka birds that live on Rangitoto.",
      "This is the view from the peak of Rangitoto Island Volcano.",
      "The bowl created by the center of the volcano is covered in plants.",
      "The view of Auckland from the trail to the peak of Rangitoto Volcano.",
      "The view of downtown Auckland from the ferry to Rangitoto Island.",
      "Wairangi Warf has great views from the middle of the bay.",
      "Sailers are fishing by a tiny island in the middle of the bay.",
      "Stairs lead from the streets down to Ponsonby beaches.",
      "A tree swing with great views on the Sentinel Beach Reserve.",
      "The beaches in Ponsonby are covered in seashells from the bay.",
      "A view of the bridge to Northshore from the Sentinel Beach Reserve.",
      "A cement lounge chair at the Sentinel Beach Reserve.",
      "In Auckland, the roads shrink and widen instead of speed bumps.",
      "This is clearly the sign for the greatest street on Earth.",
      "The view from the Hobson Bay Walkway of East Auckland.",
      "This poor tree needs crutches to keep its branches of the ground.",
      "It's me! Outide the Oakland Airport before my flight to Auckland."
    ];

    back.onclick = function () {backs()};
    next.onclick = function() {nexts()};

    function backs() {
      if (index < 39) {
        index++;
        console.log(index);
        heading[0].innerHTML = headings[index];
        describe[0].innerHTML = descriptions[index];
        photo.src = source[index];
        photo.alt = alternate[index];
        photo.style.height = height[index];
        photo.style.marginTop = "calc(-"+height[index]+"/2)";
        photo.style.width = width[index];
        photo.style.marginRight = "calc(-"+width[index]+"/2)";
      }
    }

    function nexts() {
      if (index > 0) {
        index--;
        console.log(index);
        heading[0].innerHTML = headings[index];
        describe[0].innerHTML = descriptions[index];
        photo.src = source[index];
        photo.alt = alternate[index];
        photo.style.height = height[index];
        photo.style.marginTop = "calc(-"+height[index]+"/2)";
        photo.style.width = width[index];
        photo.style.marginRight = "calc(-"+width[index]+"/2)";
      }
    }


  });
