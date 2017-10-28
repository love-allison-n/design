// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

//Read More after hawaii header
    var hit = document.getElementById('hit');
    var up = document.getElementById('up');
    hit.onclick = function() {myFunction()};

    function myFunction() {
      up.style.top = "-110%";
      hit.style.opacity = "0";
    }

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

// Navigation through page
    var tick01 = document.getElementsByClassName('tick01');
    var tick02 = document.getElementsByClassName('tick02');
    var tick1 = document.getElementsByClassName('tick1');
    var tick11 = document.getElementsByClassName('tick11');
    var tick12 = document.getElementsByClassName('tick12');
    var tick13 = document.getElementsByClassName('tick13');
    var header = document.getElementsByTagName('h2');
    var article = document.getElementsByTagName('article');

    tick01[0].onmouseover = function() {header[0].innerHTML = "Feet on Solid Ground";};
    tick01[0].onclick = function() {postOne()};
    tick02[0].onmouseover = function() {header[0].innerHTML = "Rangitoto Island";};
    tick02[0].onclick = function() {postTwo()};
    tick1[0].onmouseover = function() {header[0].innerHTML = "West Auckland";};
    tick1[0].onclick = function() {postThree()};
    tick11[0].onmouseover = function() {header[0].innerHTML = "Minor Discreponcies";};
    tick11[0].onclick = function() {postFour()};
    tick12[0].onmouseover = function() {header[0].innerHTML = "A City Escape";};
    tick12[0].onclick = function() {postFive()};
    tick13[0].onmouseover = function() {header[0].innerHTML = "By The Bay";};
    tick13[0].onclick = function() {postSix()};


    function postOne() {
      article[1].innerHTML = "<h1>Feet on Solid Ground</h1><p>It’s been seven days (not including the day I lost on the way here). I’ve been staying on the edge of the city where I have found some cute cafes for breakfast, done some shopping, and made good use of the free wifi at the library. I think I’m starting to blend in.</p><p>Apparently, I don’t sound out of place. One of the realtors I spoke with this week and the desk clerk at the hostel were surprised when I said I am from California. They don’t seem to think I have a very strong accent. The desk clerk even said he would have guessed I was from New Zealand. I’m still trying to figure out why Kiwis sound different to me if I don’t sound different to them, but I’ll take it.</p><p>The money system here is pretty easy to get used to. The paper money is gorgeous. It comes in multiple bright colors: orange, purple, blue, and green; and depicts the cute animals that are native to New Zealand as well as important historic and political figures. On each there is a small spot of transparent material so you can actually see right through the money. The coins range from 5 cents to 2 dollars. In other words, when the price tag says $19.99, it really does mean $20. But the best part about the way people buy and sell in New Zealand is that tax is included in the prices. It doesn’t feel like being taxed at all.</p><p>I’ve learned that it’s very expensive to live in Auckland. The population is rising rapidly, and most of the buildings are new or recently renovated. Not only is rent really high, but clothing, food, and entertainment are all more expensive in the center of the city than in more rural areas.  I’ll be staying in a boarding house in a quiet neighborhood with eight other flatmates about an hour from the city by bus. It’s far enough that I can afford it for a while, but close enough that I can get to the city whenever I want to. Someone I spoke to at the library mentioned that the big suburb near the boarding house is considered the bad part of Auckland. I laughed when I saw the area. It looked beautiful, quiet, and friendly to me.</p><p>I’ve applied to so many jobs that all of Auckland must know I’ve arrived. A few employers have gotten back to me, and after sifting through the offers that didn’t sound at all interesting or fun, I’ll be taking a job decorating commercial areas for the holidays. It’ll be low stress and entertaining. I can’t wait to find out what holiday decorations look like in a country where the holidays happen in the summer.</p><p>The people in Auckland are so kind. It seems part of the language is to talk with a smile. Almost every person you pass on the street will say “heya,” or “g’day.” Conversation seems to still be more prominent here than the phone huddling that goes on at home. If they get a chance they’ll tell you about whatever they’re excited about at the moment.</p><p>The accent is cutest on the kids. At the library I heard a girl and her mother singing a version of The Itsy Bitsy Spider that I had never heard before. In the accent they sang, “The itsy bitsy spider went up the water spout, down came the snow and clogged up the top.” I guess it really wouldn’t make sense for those to be the lyrics in California. Aside from having more dramatic weather, New Zealand really is laid-back friendly little country.</p>";
    }

    function postTwo() {
      article[1].innerHTML = "<h1>Rangitoto Island</h1><p>This week I moved into the boarding house where can I use Internet, cook, do laundry and perform all the basic functions that I couldn’t while at the hostel. I also got all the paperwork sorted out for my job, which I can start taking shifts for in mid October. After housing and work were figured out, I gave myself some time to explore the nature reserves around Auckland.</p><p>It rained on Friday, but I walked around to all the little beaches in Ponsonby anyway. Ponsonby is the suburb just north of Auckland’s Central Business district and borders the water. All the homes in Ponsoby have ocean views, if not direct access to a beach. The coast is actually mostly cliff, with short stretches of beach that have to be accessed by wooden stairs from residential roads. Though the beaches are small, they are good for sitting and watching the waves, as well as great views of Northshore across the bay.</p><p>On Saturday, I took a ferry ride to a volcanic island called Rangitoto. All along the ferry ride and the hike to the top of the volcano, there are great views of the Auckland city skyline. Around the warf where the ferry drops passengers off at the island there are little old homes called baches that were built by early settlers who were using the island as a getaway. Though some of the baches have been preserved, people no longer live on the island, and it has been restored as much as possible to it’s original state.</p><p>The Island is covered half in thick forest, and half in open expanses of large volcanic rocks. The areas of forest are filled with native birds and their calls. The Tui bird is a black bird with a small tuft of white feathers at its throat. It was the loudest bird in the forest and, fortunately, had the prettiest song. I also saw some Weka birds, which are small, flightless, brown birds that travel in pairs. I mistook them for kiwis at first, but their bills are much shorter and their bodies are less round. These birds don’t scare too easily and I was able to get some pictures as they foraged for food along the trail next to me.</p><p>At the top of the volcano, hikers can look into the bowl created by the center of the volcano. It is now filled with green vegetation, and only the shape is reminiscent of an active volcano. The top of the volcano also has the remains of an old military look out that was built in fear that New Zealand would come under attack during World War II.</p><p>On the way back down to the warf, a slight detour leads to a series of lava caves. These small openings in the rock go deeper than can be seen. Standing near one, I could feel the cool insulated air from under the earth, like a natural air conditioner.</p><p>There is a lot to see on Rangitoto and I’m sure I haven’t seen it all. Anytime I need to escape the city life, I’ll know where to go.</p>";
    }

    function postThree() {
      article[1].innerHTML = "<h1>West Auckland</h1><p>The location of the boarding house I’m staying at is very residential. It’s a 15-minute drive to anything interesting. I’ve been taking the bus most places, which can double that time. But that gives me plenty of commute time to enjoy the Auckland scenery of the cute old bungalow houses and some very modern buildings.</p><p>The first far off place I made it to was the Auckland Zoo. It was a very interactive experience with some educational value and of course lots of fun animals that I had never seen before.</p><p>On the way into the zoo, a family of swans was sitting peacefully in the parking lot. Throughout the zoo paths, chickens and their baby chicks roamed free. It seemed like their favorite spot to hang out was around the café, where people fed them fries and pieces of bread. I have seen people feeding birds throughout Auckland. The pigeons here are actually brightly colored and look plump and healthy, but I think the biggest difference is that they are much nicer to each other, I guess because there is much less competition for food and shelter.</p><p>Of course I got to see lions and tigers, zebra and giraffes, flamingos and elephants. But I was surprised at how many of the bird exhibits I could just walk into. After walking through a set of two doors to make sure the birds don’t come and go with the people, I got to stand inside the large nets that hold the different birds. In one exhibit of beautiful, big, green, native birds called Kea, one of the birds flew up behind me, so close I could feel its’ wings blow my hair around, and landed on the railing next to me. The signs warning that the Kea are known to bite almost got to me, but I stayed a while to snap a picture. Fortunately, the bird turned out to be very calm and very photogenic.</p><p>I was also surprised at how open the cages were for the Australian animals. When I say “cage,” I mean single wooden railing that I could have easily jumped. And this was all that separated me from the wallabies and the emu. If I was braver, I could have petted them, but the noises were interesting enough. I had no idea what sound an emu makes, but I found out that it is a deep sort of knocking sound. At first I mistook the noise for far off construction.  Emus are definitely unique birds.</p><p>I had to go to the kiwi exhibit twice to finally see one. I learned that kiwi birds are nocturnal, and becoming endangered due largely to dog attacks. The kiwis at the zoo are tucked away in a building that simulates nighttime. It was hard enough to see anything in the dark, let alone an animal I’d never seen before in an exhibit full of plants and other hiding places. Just before I left the zoo, though, the keepers put food out for the kiwis, and I got to see one come right up to the glass. I knew they are flightless birds, but they don’t look like they have wings at all. They have incredibly long bills and very small heads compared to their bodies. I couldn’t see the color of the kiwi in the dark, but the signs said it was a dark brown. I’m hoping that once I visit some more rural areas, I might get to see a wild kiwi, and gain a better understanding of New Zealand wildlife in general.</p>";
    }

    function postFour() {
      article[1].innerHTML = "<h1>Minor Discreponcies</h1><p>This week is Art Week in Auckland. Galleries and Museums have opened special exhibits all over the city, so I went to a couple.  New Zealand has some great artists doing some incredible things. Most notably, I saw large black panels of paper folded and carved, like 9-foot paper snowflakes. Instead of geometric patterns though, these panels contained intricate designs of vines, trees and some hidden animals.</p><p>Art Galleries were a good indoor choice for this week because it has been raining pretty constantly. On arriving in Auckland, I expected some rain before getting into the summer months, but the weather here is definitely different than in California. It has rained at least half of the days since I arrived. The weather often switches between sunshine and strong down pours many times in one day. The crazy rain patterns are only one of the many differences between Auckland and Oakland.</p><p>Of course there are the little things. Like the big warehouse store here is called Cosco, not Costco. And the thick wavy chips are called Sunbites, instead of Sun Chips.</p><p>Another thing that actually throws me off a little is the way kiwis great each other. Where I would say, “How are you doing” or “How’s it going,” people here ask, “How are you going?” At first I didn’t really know how to answer the question because I wasn’t exactly sure what they were asking. I later realized that most of the time they don’t actually expect an answer, and may not even stick around to here it anyway.</p><p>Then there are some bigger structural differences. Lacking states, the definitions of “area,” “city,” and “suburb” are different here. Particularly, providing a city name generally isn’t specific enough. Suburbs, therefore, divide cities into smaller increments so that people can keep better track of locations within these comparatively large cities.</p><p>I’ve also noticed, that in order to find the good shops, malls and restaurants, you have to wander away from the streets. Each block is two or three times as long and wide as the ones at home, which leaves a lot of room in the middle of a block. In the city and more commercial areas, the space is filled with alleys and walking paths off the streets which hold seating areas and more storefronts. It took me a couple weeks to realize how much I was missing by staying on the roads.</p><p>The large blocks also affect the architecture in the more residential areas. The houses and buildings are often three or four deep toward the middle of the block, and accessed via long driveways. This means that a lot of the buildings don’t sit along the street, and can’t be seen very easily from the outside. So lots of homes are very boring looking on the outside, and don’t really have a front, which leaves room for making the insides of buildings more interesting. Most homes in Auckland have very modern interiors with fancy appliances.  Though there aren’t as many streets here, they have made good use of the space that is available.</p><p>In a lot of ways, Auckland is just a small scale Bay Area, and I haven’t experienced much culture shock. But I have definitely also done a bit of getting used to in the last month.</p>";
    }

    function postFive() {
      article[1].innerHTML = "<h1>A City Escape</h1><p>Last weekend, I did something I had been scared to try; I went for a drive.</p><p>New Zealand’s miniature version of zipcar is called CityHop. CityHop accepts international licenses, so I registered and reserved a car for a few hours on Saturday.</p><p>I was nervous to drive in here for the first time for a few reasons. First, cars drive on the left side of the road in New Zealand. This comes with the obvious complications of remembering to turn into the left lane and not the right lane, remembering that it is legal to make a left turn on red lights, and not instinctually drifting over to the right side of the road on residential streets with no centerline. I was also nervous because most vehicles in New Zealand are manual. I do know how to drive a stick shift, but I haven’t had to in four years. I wouldn’t have a problem relearning at home, but added to the pressure of staying on the left side of the road, it seemed daunting. Finally, it seems like I have seen a lot of near car crashes here, especially in the city.</p><p>Luckily, the car was an automatic. And I picked a route that would take me away from the city for a little while to avoid crazy drivers and traffic.</p><p>I was able to focus on staying on the left side of the road, which didn’t turn out to be too hard. The bigger challenge was driving from the right side of the car. The perspective shift made it harder to stay in the middle of a lane. It didn’t take too long to get adjusted, though. It wasn’t nearly as scary as I thought it would be.</p><p>Afterward, I visited a famous park in Auckland. One Tree Hill Domain is another of the many volcanoes that make up Auckland. Around the bottom of the volcano are playgrounds, picnic tables, and a mini zip-line to ride down a small hill. Along the path to the peak, there are fences of cows and, of course, sheep. The peak holds a monument to the Moari people and the beautiful land of New Zealand.</p><p>From the top of the volcano, three other volcanic peaks are visible in the distance. There are great views of the suburbs surrounding the park. It was very serene to know that I was surrounded by the bustle of city life on all sides, yet still be far enough from it all for sheep to graze and to hear nothing but birds.</p><p>One Tree Hill Domain was a great place to relax after the anxiety I had built up over driving. Auckland is full of great little nature reserves, but this one is really incredible.</p>";
    }

    function postSix() {
      article[1].innerHTML = "<h1>By The Bay</h1><p>I moved out of the boarding house this week. My job decorating for the holidays isn’t keeping me very busy yet. I don’t want to sit around while I wait for the season to really start.</p><p>I spent a few days in Mangere, a suburb in south Auckland. The Bay borders Mangere on the west side. The area is more rural and has farmland along the water. Farmers grow strawberries and board horses and cattle.</p><p>There is a park full of cattle on the peak of yet another dormant volcano. The cattle roam free through the park which has a fence built around it. On the climb up to the top, hikers have to watch out for scattered cow pies. Though signs ask visitors not to bother the livestock, it wouldn’t be hard to interact with the cattle.</p><p>It is definitely worth the climb to the top. From the peak, I could see the One Tree Hill Monument standing on top of its own peak in the distance. And beyond that, I could see Sky Tower through the clouds and the fog.</p><p>I hadn’t seen a mosquito once while I was in Auckland. Mangere was full of them. I guess being so close to the water is all it takes. It is impossible to go for a walk without hearing buzzing in your ears. Leaving the windows open at night is a bad idea.</p><p>Mangere is another beautiful Auckland suburb. In many ways, though, it is just more of the same. Today I am on a flight to Sydney Australia. It is time for a change of scenery and some new things to see.</p>";
    }

  });
