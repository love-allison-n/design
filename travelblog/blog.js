// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

//Read More after hawaii header
    var hit = document.getElementById('hit');
    var up = document.getElementById('up');
    hit.onclick = function() {myFunction()};

    function myFunction() {
      up.style.top = "-200%";
      hit.style.opacity = "0";
    }

// Navigation across site
    var arrows = document.getElementsByTagName('img');
    var tri1 = document.getElementById('tri1');
    var stay = false;

    arrows[1].onmouseover = function() {topRight()};
    tri1.onmouseleave = function() {trout()};

    function topRight() {
      tri1.style.right = "-40px";
    }

    function trout() {
      tri1.style.right = "-600px";
    }

// Navigation through page
    var tick01 = document.getElementsByClassName('tick01');
    var tick02 = document.getElementsByClassName('tick02');
    var tick1 = document.getElementsByClassName('tick1');
    var tick11 = document.getElementsByClassName('tick11');
    var tick12 = document.getElementsByClassName('tick12');
    var tick13 = document.getElementsByClassName('tick13');
    var tick2 = document.getElementsByClassName('tick2');
    var tick21 = document.getElementsByClassName('tick21');
    var tick22 = document.getElementsByClassName('tick22');
    var tick23 = document.getElementsByClassName('tick23');
    var tick24 = document.getElementsByClassName('tick24');
    var tick3 = document.getElementsByClassName('tick3');
    var tick31 = document.getElementsByClassName('tick31');
    var tick32 = document.getElementsByClassName('tick32');
    var tick33 = document.getElementsByClassName('tick33');
    var tick4 = document.getElementsByClassName('tick4');
    var tick41 = document.getElementsByClassName('tick41');
    var tick42 = document.getElementsByClassName('tick42');
    var tick43 = document.getElementsByClassName('tick43');
    var tick44 = document.getElementsByClassName('tick44');
    var tick5 = document.getElementsByClassName('tick5');
    var tick51 = document.getElementsByClassName('tick51');
    var tick52 = document.getElementsByClassName('tick52');

    var header = document.getElementsByTagName('h2');
    var article = document.getElementsByTagName('article');

    function reset() {
      tick01[0].style.right = "55px"; tick01[0].style.color = "#ffece2";
      tick02[0].style.right = "55px"; tick02[0].style.color = "#ffece2";
      tick1[0].style.right = "55px"; tick1[0].style.color = "#ffece2";
      tick11[0].style.right = "55px"; tick11[0].style.color = "#ffece2";
      tick12[0].style.right = "55px"; tick12[0].style.color = "#ffece2";
      tick13[0].style.right = "55px"; tick13[0].style.color = "#ffece2";
      tick2[0].style.right = "55px"; tick2[0].style.color = "#ffece2";
      tick21[0].style.right = "55px"; tick21[0].style.color = "#ffece2";
      tick22[0].style.right = "55px"; tick22[0].style.color = "#ffece2";
      tick23[0].style.right = "55px"; tick23[0].style.color = "#ffece2";
      tick24[0].style.right = "55px"; tick24[0].style.color = "#ffece2";
      tick3[0].style.right = "55px"; tick3[0].style.color = "#000D13";
      tick31[0].style.right = "55px"; tick31[0].style.color = "#000D13";
      tick32[0].style.right = "55px"; tick32[0].style.color = "#000D13";
      tick33[0].style.right = "55px"; tick33[0].style.color = "#000D13";
      tick4[0].style.right = "55px"; tick4[0].style.color = "#000D13";
      tick41[0].style.right = "55px"; tick41[0].style.color = "#000D13";
      tick42[0].style.right = "55px"; tick42[0].style.color = "#000D13";
      tick43[0].style.right = "55px"; tick43[0].style.color = "#000D13";
      tick44[0].style.right = "55px"; tick44[0].style.color = "#000D13";
      tick5[0].style.right = "55px"; tick5[0].style.color = "#000D13";
      tick51[0].style.right = "55px"; tick51[0].style.color = "#000D13";
      tick52[0].style.right = "55px"; tick52[0].style.color = "#000D13";
    }

    function postOne() {
      article[1].innerHTML = "<h1>Feet on Solid Ground</h1><p>It’s been seven days (not including the day I lost on the way here). I’ve been staying on the edge of the city where I have found some cute cafes for breakfast, done some shopping, and made good use of the free wifi at the library. I think I’m starting to blend in.</p><p>Apparently, I don’t sound out of place. One of the realtors I spoke with this week and the desk clerk at the hostel were surprised when I said I am from California. They don’t seem to think I have a very strong accent. The desk clerk even said he would have guessed I was from New Zealand. I’m still trying to figure out why Kiwis sound different to me if I don’t sound different to them, but I’ll take it.</p><p>The money system here is pretty easy to get used to. The paper money is gorgeous. It comes in multiple bright colors: orange, purple, blue, and green; and depicts the cute animals that are native to New Zealand as well as important historic and political figures. On each there is a small spot of transparent material so you can actually see right through the money. The coins range from 5 cents to 2 dollars. In other words, when the price tag says $19.99, it really does mean $20. But the best part about the way people buy and sell in New Zealand is that tax is included in the prices. It doesn’t feel like being taxed at all.</p><p>I’ve learned that it’s very expensive to live in Auckland. The population is rising rapidly, and most of the buildings are new or recently renovated. Not only is rent really high, but clothing, food, and entertainment are all more expensive in the center of the city than in more rural areas.  I’ll be staying in a boarding house in a quiet neighborhood with eight other flatmates about an hour from the city by bus. It’s far enough that I can afford it for a while, but close enough that I can get to the city whenever I want to. Someone I spoke to at the library mentioned that the big suburb near the boarding house is considered the bad part of Auckland. I laughed when I saw the area. It looked beautiful, quiet, and friendly to me.</p><p>I’ve applied to so many jobs that all of Auckland must know I’ve arrived. A few employers have gotten back to me, and after sifting through the offers that didn’t sound at all interesting or fun, I’ll be taking a job decorating commercial areas for the holidays. It’ll be low stress and entertaining. I can’t wait to find out what holiday decorations look like in a country where the holidays happen in the summer.</p><p>The people in Auckland are so kind. It seems part of the language is to talk with a smile. Almost every person you pass on the street will say “heya,” or “g’day.” Conversation seems to still be more prominent here than the phone huddling that goes on at home. If they get a chance they’ll tell you about whatever they’re excited about at the moment.</p><p>The accent is cutest on the kids. At the library I heard a girl and her mother singing a version of The Itsy Bitsy Spider that I had never heard before. In the accent they sang, “The itsy bitsy spider went up the water spout, down came the snow and clogged up the top.” I guess it really wouldn’t make sense for those to be the lyrics in California. Aside from having more dramatic weather, New Zealand really is laid-back friendly little country.</p>";

      reset();

      tick01[0].style.right = "-65px"; tick01[0].style.opacity = "1"; tick01[0].style.color = "#000D13";
    }

    function postTwo() {
      article[1].innerHTML = "<h1>Rangitoto Island</h1><p>This week I moved into the boarding house where can I use Internet, cook, do laundry and perform all the basic functions that I couldn’t while at the hostel. I also got all the paperwork sorted out for my job, which I can start taking shifts for in mid October. After housing and work were figured out, I gave myself some time to explore the nature reserves around Auckland.</p><p>It rained on Friday, but I walked around to all the little beaches in Ponsonby anyway. Ponsonby is the suburb just north of Auckland’s Central Business district and borders the water. All the homes in Ponsoby have ocean views, if not direct access to a beach. The coast is actually mostly cliff, with short stretches of beach that have to be accessed by wooden stairs from residential roads. Though the beaches are small, they are good for sitting and watching the waves, as well as great views of Northshore across the bay.</p><p>On Saturday, I took a ferry ride to a volcanic island called Rangitoto. All along the ferry ride and the hike to the top of the volcano, there are great views of the Auckland city skyline. Around the warf where the ferry drops passengers off at the island there are little old homes called baches that were built by early settlers who were using the island as a getaway. Though some of the baches have been preserved, people no longer live on the island, and it has been restored as much as possible to it’s original state.</p><p>The Island is covered half in thick forest, and half in open expanses of large volcanic rocks. The areas of forest are filled with native birds and their calls. The Tui bird is a black bird with a small tuft of white feathers at its throat. It was the loudest bird in the forest and, fortunately, had the prettiest song. I also saw some Weka birds, which are small, flightless, brown birds that travel in pairs. I mistook them for kiwis at first, but their bills are much shorter and their bodies are less round. These birds don’t scare too easily and I was able to get some pictures as they foraged for food along the trail next to me.</p><p>At the top of the volcano, hikers can look into the bowl created by the center of the volcano. It is now filled with green vegetation, and only the shape is reminiscent of an active volcano. The top of the volcano also has the remains of an old military look out that was built in fear that New Zealand would come under attack during World War II.</p><p>On the way back down to the warf, a slight detour leads to a series of lava caves. These small openings in the rock go deeper than can be seen. Standing near one, I could feel the cool insulated air from under the earth, like a natural air conditioner.</p><p>There is a lot to see on Rangitoto and I’m sure I haven’t seen it all. Anytime I need to escape the city life, I’ll know where to go.</p>";

      reset();

      tick02[0].style.right = "-65px"; tick02[0].style.opacity = "1"; tick02[0].style.color = "#000D13";
    }

    function postThree() {
      article[1].innerHTML = "<h1>West Auckland</h1><p>The location of the boarding house I’m staying at is very residential. It’s a 15-minute drive to anything interesting. I’ve been taking the bus most places, which can double that time. But that gives me plenty of commute time to enjoy the Auckland scenery of the cute old bungalow houses and some very modern buildings.</p><p>The first far off place I made it to was the Auckland Zoo. It was a very interactive experience with some educational value and of course lots of fun animals that I had never seen before.</p><p>On the way into the zoo, a family of swans was sitting peacefully in the parking lot. Throughout the zoo paths, chickens and their baby chicks roamed free. It seemed like their favorite spot to hang out was around the café, where people fed them fries and pieces of bread. I have seen people feeding birds throughout Auckland. The pigeons here are actually brightly colored and look plump and healthy, but I think the biggest difference is that they are much nicer to each other, I guess because there is much less competition for food and shelter.</p><p>Of course I got to see lions and tigers, zebra and giraffes, flamingos and elephants. But I was surprised at how many of the bird exhibits I could just walk into. After walking through a set of two doors to make sure the birds don’t come and go with the people, I got to stand inside the large nets that hold the different birds. In one exhibit of beautiful, big, green, native birds called Kea, one of the birds flew up behind me, so close I could feel its’ wings blow my hair around, and landed on the railing next to me. The signs warning that the Kea are known to bite almost got to me, but I stayed a while to snap a picture. Fortunately, the bird turned out to be very calm and very photogenic.</p><p>I was also surprised at how open the cages were for the Australian animals. When I say “cage,” I mean single wooden railing that I could have easily jumped. And this was all that separated me from the wallabies and the emu. If I was braver, I could have petted them, but the noises were interesting enough. I had no idea what sound an emu makes, but I found out that it is a deep sort of knocking sound. At first I mistook the noise for far off construction.  Emus are definitely unique birds.</p><p>I had to go to the kiwi exhibit twice to finally see one. I learned that kiwi birds are nocturnal, and becoming endangered due largely to dog attacks. The kiwis at the zoo are tucked away in a building that simulates nighttime. It was hard enough to see anything in the dark, let alone an animal I’d never seen before in an exhibit full of plants and other hiding places. Just before I left the zoo, though, the keepers put food out for the kiwis, and I got to see one come right up to the glass. I knew they are flightless birds, but they don’t look like they have wings at all. They have incredibly long bills and very small heads compared to their bodies. I couldn’t see the color of the kiwi in the dark, but the signs said it was a dark brown. I’m hoping that once I visit some more rural areas, I might get to see a wild kiwi, and gain a better understanding of New Zealand wildlife in general.</p>";

      reset();

      tick1[0].style.right = "-65px"; tick1[0].style.opacity = "1"; tick1[0].style.color = "#000D13";
    }

    function postFour() {
      article[1].innerHTML = "<h1>Minor Discrepancies</h1><p>This week is Art Week in Auckland. Galleries and Museums have opened special exhibits all over the city, so I went to a couple.  New Zealand has some great artists doing some incredible things. Most notably, I saw large black panels of paper folded and carved, like 9-foot paper snowflakes. Instead of geometric patterns though, these panels contained intricate designs of vines, trees and some hidden animals.</p><p>Art Galleries were a good indoor choice for this week because it has been raining pretty constantly. On arriving in Auckland, I expected some rain before getting into the summer months, but the weather here is definitely different than in California. It has rained at least half of the days since I arrived. The weather often switches between sunshine and strong down pours many times in one day. The crazy rain patterns are only one of the many differences between Auckland and Oakland.</p><p>Of course there are the little things. Like the big warehouse store here is called Cosco, not Costco. And the thick wavy chips are called Sunbites, instead of Sun Chips.</p><p>Another thing that actually throws me off a little is the way kiwis great each other. Where I would say, “How are you doing” or “How’s it going,” people here ask, “How are you going?” At first I didn’t really know how to answer the question because I wasn’t exactly sure what they were asking. I later realized that most of the time they don’t actually expect an answer, and may not even stick around to here it anyway.</p><p>Then there are some bigger structural differences. Lacking states, the definitions of “area,” “city,” and “suburb” are different here. Particularly, providing a city name generally isn’t specific enough. Suburbs, therefore, divide cities into smaller increments so that people can keep better track of locations within these comparatively large cities.</p><p>I’ve also noticed, that in order to find the good shops, malls and restaurants, you have to wander away from the streets. Each block is two or three times as long and wide as the ones at home, which leaves a lot of room in the middle of a block. In the city and more commercial areas, the space is filled with alleys and walking paths off the streets which hold seating areas and more storefronts. It took me a couple weeks to realize how much I was missing by staying on the roads.</p><p>The large blocks also affect the architecture in the more residential areas. The houses and buildings are often three or four deep toward the middle of the block, and accessed via long driveways. This means that a lot of the buildings don’t sit along the street, and can’t be seen very easily from the outside. So lots of homes are very boring looking on the outside, and don’t really have a front, which leaves room for making the insides of buildings more interesting. Most homes in Auckland have very modern interiors with fancy appliances.  Though there aren’t as many streets here, they have made good use of the space that is available.</p><p>In a lot of ways, Auckland is just a small scale Bay Area, and I haven’t experienced much culture shock. But I have definitely also done a bit of getting used to in the last month.</p>";

      reset();

      tick11[0].style.right = "-65px"; tick11[0].style.opacity = "1"; tick11[0].style.color = "#000D13";
    }

    function postFive() {
      article[1].innerHTML = "<h1>A City Escape</h1><p>Last weekend, I did something I had been scared to try; I went for a drive.</p><p>New Zealand’s miniature version of zipcar is called CityHop. CityHop accepts international licenses, so I registered and reserved a car for a few hours on Saturday.</p><p>I was nervous to drive in here for the first time for a few reasons. First, cars drive on the left side of the road in New Zealand. This comes with the obvious complications of remembering to turn into the left lane and not the right lane, remembering that it is legal to make a left turn on red lights, and not instinctually drifting over to the right side of the road on residential streets with no centerline. I was also nervous because most vehicles in New Zealand are manual. I do know how to drive a stick shift, but I haven’t had to in four years. I wouldn’t have a problem relearning at home, but added to the pressure of staying on the left side of the road, it seemed daunting. Finally, it seems like I have seen a lot of near car crashes here, especially in the city.</p><p>Luckily, the car was an automatic. And I picked a route that would take me away from the city for a little while to avoid crazy drivers and traffic.</p><p>I was able to focus on staying on the left side of the road, which didn’t turn out to be too hard. The bigger challenge was driving from the right side of the car. The perspective shift made it harder to stay in the middle of a lane. It didn’t take too long to get adjusted, though. It wasn’t nearly as scary as I thought it would be.</p><p>Afterward, I visited a famous park in Auckland. One Tree Hill Domain is another of the many volcanoes that make up Auckland. Around the bottom of the volcano are playgrounds, picnic tables, and a mini zip-line to ride down a small hill. Along the path to the peak, there are fences of cows and, of course, sheep. The peak holds a monument to the Moari people and the beautiful land of New Zealand.</p><p>From the top of the volcano, three other volcanic peaks are visible in the distance. There are great views of the suburbs surrounding the park. It was very serene to know that I was surrounded by the bustle of city life on all sides, yet still be far enough from it all for sheep to graze and to hear nothing but birds.</p><p>One Tree Hill Domain was a great place to relax after the anxiety I had built up over driving. Auckland is full of great little nature reserves, but this one is really incredible.</p>";

      reset();

      tick12[0].style.right = "-65px"; tick12[0].style.opacity = "1"; tick12[0].style.color = "#000D13";
    }

    function postSix() {
      article[1].innerHTML = "<h1>By The Bay</h1><p>I moved out of the boarding house this week. My job decorating for the holidays isn’t keeping me very busy yet. I don’t want to sit around while I wait for the season to really start.</p><p>I spent a few days in Mangere, a suburb in south Auckland. The Bay borders Mangere on the west side. The area is more rural and has farmland along the water. Farmers grow strawberries and board horses and cattle.</p><p>There is a park full of cattle on the peak of yet another dormant volcano. The cattle roam free through the park which has a fence built around it. On the climb up to the top, hikers have to watch out for scattered cow pies. Though signs ask visitors not to bother the livestock, it wouldn’t be hard to interact with the cattle.</p><p>It is definitely worth the climb to the top. From the peak, I could see the One Tree Hill Monument standing on top of its own peak in the distance. And beyond that, I could see Sky Tower through the clouds and the fog.</p><p>I hadn’t seen a mosquito once while I was in Auckland. Mangere was full of them. I guess being so close to the water is all it takes. It is impossible to go for a walk without hearing buzzing in your ears. Leaving the windows open at night is a bad idea.</p><p>Mangere is another beautiful Auckland suburb. In many ways, though, it is just more of the same. Today I am on a flight to Sydney Australia. It is time for a change of scenery.</p>";

      reset();

      tick13[0].style.right = "-65px"; tick13[0].style.opacity = "1"; tick13[0].style.color = "#000D13";
    }

    function postSeven() {
      article[1].innerHTML = "<h1>The Definition of a City</h1><p>Being in Sydney has been wonderful. The city is full of life, energy, and art. The fashion game in Sydney is too strong, and I had to think about my bank account to keep myself from buying a whole new wardrobe (or two). Good food is everywhere. There are a millions things to do. Whether people have business or are just having fun, everyone has somewhere to be and something to be doing. Sydney is a truly vibrant city, and has shed some perspective on my time in New Zealand.</p><p>I grew up in an urban environment. The Bay Area is alive with the hustle and bustle of people living their lives. I thought I knew what made a city a city. I thought a city was a dense collection of people in a relatively small geographical area. And of course, to accommodate those people, structures start to form vertically, transportation becomes systematic, and entertainment is everywhere. Now I’ve learned, while all cities are dense collections of people, not all dense collections of people are really cities.</p><p>Auckland is confusing. It is a dense collection of people, and it has the buildings and infrastructure that come with it, but it’s missing something. One Million people live in Auckland. Though that may not seem like much, it’s one quarter of New Zealand’s entire population. When I arrived in Auckland, everything was new and exciting, but everyone I spoke to seemed bored. They insisted that they didn’t know what to do, or that Auckland didn’t have enough to do. As far as I could tell, however, there were plenty of things to do if you looked.</p><p>Everyone in New Zealand is very proud of the “laid back” nature of the people there. The people are extremely kind and helpful, and you feel safe knowing that the people rarely have a malicious thought. But another part of the people being so “laid back,” is that they wander through life following the path of least resistance. While I’m all for going with the flow, it seems like many of the people in Auckland lack big dreams and goals to drive them forward. The only times I’ve felt real passion from Kiwis is when they talk about rugby. As I applied for jobs and housing in Auckland, it took forever to hear back from people or get anything done. I think it’s less that there is nothing to do in Auckland and more that people don’t want to find things to do, or they have no one to do things with.</p><p>The difference is in the people. A true city, or at least a good one, is a dense collection of people who care about something. Sydney is full of people who care about something. People were advocating for equal marriage rights. Artists have made their marks all over the city. People dressed with dedication and walked around in hundreds celebrating Oktoberfest. Even if it is just the dedication with which many of the local shops decorated for Halloween, the people in Sydney do things like they mean it; they walk with a purpose.</p><p>I’ll have to remember, while I’m in New Zealand, to saver the relaxation and enjoy some down time between my own adventures. But I am happy that when I come home, I’ll be coming home to a place full of passion and energy.</p>";

      reset();

      tick2[0].style.right = "-65px"; tick2[0].style.opacity = "1"; tick2[0].style.color = "#000D13";
    }

    function postEight() {
      article[1].innerHTML = "<h1>Most Livable City</h1><p>Melbourne likes to boast that it is “the most livable city in the world.” I don’t know what the qualifications are, but I can see why people might think so.</p><p>Melbourne has been developing as a city for around 150 years. It grew up with great cities like London as its examples. It’s young enough to have learned from poor planning in older cities, and has time to build all the modern amenities that a great city needs.</p><p>The streets are easy to navigate. They follow a pretty strict grid system even out into the suburbs. Since arriving in Melbourne, I’ve hardly looked at a map while out and about. If I locate my destination on a map, the way is straight forward enough. I like to get a little lost in a new city and explore what’s off the beaten path, but not in Melbourne. Though, I’ve found many of the city’s nooks and crannies, I always knew where I was and how to get back to the main streets.</p><p>Surprisingly, Melbourne is not stingy about free wifi. Almost all café’s, bars, and shops offer free wifi. Most public monuments, museums, and parks have free wifi provided by the government. Melbournians hardly need data at all while out in the city.</p><p>There is also great food everywhere, and to fit any budget. Of course, Melbourne has its upscale and exotic cuisine to attract adventurous foodies. There is also lots of good cultural street food, for those who don’t want to break the bank. For pretty much anyone, there is a chain called Lentil as Anything that stays afloat through donations to serve vegetarian and vegan food on a pay what you like bases. Though food seems cheaper in Australia, the portions are smaller, so leftovers are not common. Even so, it would be hard to go hungry here.</p><p>But the most unique food experience I had was while indulging a traveling tradition. MacDonald’s has infested almost the entire world, but the experience is different based on where you are, so travelers often make a trip to MacDonald’s to compare. Though I tend to avoid fast food, I had lunch at a MacDonald’s in Melbourne out of respect for the tradition. The menu is pretty similar to that in the United States, but I was impressed to be able to order food digitally at a touch screen kiosk. It was like having a digital menu that does all the work of a cashier. Someone called out the number of the order, and that was all the interaction I had with the staff. While waiting for my food, I also noticed that drinks are served automatically. The cup drops into a conveyer belt and then stops under the soda fountain to be filled and a lid put on, all without anyone bothering to lift a finger. Pretty soon, fast food restaurants won’t have workers at all.</p><p>As far as art and technology are concerned, there is inspiration everywhere. Melbourne has the most extensive collection of art museums and art that I have ever seen, and most exhibits are free to the public. There is an entire alley of a few blocks with beautiful graffiti projects. The buildings are intricate and modern. Melbourne is relatively young, but definitely keeping up with the times, if not leading the way.</p><p>Melbourne has one of few observation decks and observation wheels in the world. It has a great zoo, and lots of places for wildlife sightings of kangaroos, penguins and other native creatures. There are great beaches and views of the ocean, cliffs, and mountains. Though I have enjoyed seeing Melbourne as a tourist, it may be the only place in the world besides the Bay Area that I could see myself living. By my standards Melbourne is, in fact, very livable.</p>";

      reset();

      tick21[0].style.right = "-65px"; tick21[0].style.opacity = "1"; tick21[0].style.color = "#000D13";
    }

    function postNine() {
      article[1].innerHTML = "<h1>Australian Wildlife</h1><p>Wildlife in Australia is different from wildlife in the US. But more surprisingly, it is also completely different from wildlife in New Zealand. Both have been isolated by ocean for so long, that evolution has had its chance to run wild.</p><p>Both Australia and New Zealand completely lack large mammals and natural predators. In New Zealand, mammals hardly exist at all. Bats and marine mammals, like dolphins, are New Zealand’s only persisting native mammals. Humans have now introduced rats, cats, dogs, cattle, sheep, etc. But there is still a distinct lack of predators for small animals, which is why the Kiwi, and many other relatively large and unique birds, insects, and amphibians have survived and flourished here.</p><p>In Australia, on the other hand, smaller mammals do exist naturally, but they are unlike anything in the US.  Cute little koalas and wombats are some of Australia’s bears, but neither gets to be larger than a dog. They are fat and cuddly and look nothing like our intimidating brown bears. Then there are Kangaroos, which seem closest to a small horse that jumps around on two legs. The wild kangaroos I saw on a hike were probably half my size again, but even that’s not very big. They move more like frogs than any mammal I’ve ever seen. They have the ears of a donkey, and the whiskers of a cat, not to mention their super weird biology. But kangaroos aren’t even as surprising as the platypus, which I can’t compare to anything at all. It’s just a really graceful swimmer whose head looks exactly like its tail. None of these animals have natural predators, so they have survived well despite being small and, in the case of a koala, sleeping for 22 hours a day. They just have to watch out for cars and bulldozers.</p><p>Australia also has a huge variety of birds. The macaw is a white bird with a yellow crown, and the call like a screeching child. Then there are all the colorful ducks and birds that stand out from the mostly brown birds we know. Emu’s, of course, are one of the craziest birds I have ever seen. But somehow, despite warm summers, south Australia is home to penguins. I got to see these penguins at the zoo, but I also got to see them in the wild at a small beach outside of Melbourne’s CBD. These penguins are small compared to empire penguins, and are mostly white and a dark iridescent blue. They are super cute, and also really great swimmers. Before leaving California, I never thought I’d see penguins in their natural habitat, but I also didn’t know they lived in Australia. Now I just have to find the New Zealand penguins.</p><p>Fortunately, because I stayed mostly in the city, I got to see the exciting wildlife without dealing with crazy insects or poisonous snakes or crocodiles. And no Dan, I didn’t see a cane toad; I was in the wrong area. But overall, I had great experiences and loved seeing some animals I had never seen before.</p>";

      reset();

      tick22[0].style.right = "-65px"; tick22[0].style.opacity = "1"; tick22[0].style.color = "#000D13";
    }

    function postTen() {
      article[1].innerHTML = "<h1>Spiraling</h1><p>What a week. I arrived back in Auckland seven days ago, and that’s all it took for me to go a little crazy.</p><p>I’d applied to some more jobs in the Auckland area, and got very close to accepting two part time jobs. As I went to interviews and meetings and filled out paper work and checked out housing near the work, jumping through all the hoops, my stress levels rose. I couldn’t make the math work. Everything I earned would go to food housing, and not even good food or comfortable housing. And the commitment of staying in Auckland for 6 months would eat up so much time that I could be traveling.</p><p>Though Auckland has been fun to explore and experience, I don’t think it’s the right place for me to live. I’m not into rugby and I’m not sure what else I would do for fun. Most people in Auckland, aside from travelers, go to work, run errands, and then go home.</p><p>Trying to find a way to be happy to stay in Auckland seemed impossible and the idea of staying here was making me dread the upcoming months. I started to feel like I would rather be looking for and finding these jobs back in California. Since that is totally an option, and likely my future anyway, I’ve decided living in New Zealand isn’t worth the stress. I had so much fun experiencing Australia like a tourist and I want to have that feeling about New Zealand as well. I’d rather travel New Zealand, even if for a short time, and stress about finding work when I come home.</p><p>I don’t have much else to say about this week, which is further proof to me that I am making the right decision. I’ll spend the next couple of days planning, and then I will be off to see the rest of New Zealand. I expect to have much more to say next week.</p>";

      reset();

      tick23[0].style.right = "-65px"; tick23[0].style.opacity = "1"; tick23[0].style.color = "#000D13";
    }

    function postEleven() {
      article[1].innerHTML = "<h1>Middle Earth</h1><p>I started reading the Hobbit a couple of weeks ago. I’ve been reading about Bilbo’s adventure along rivers and through mountain caves and forests. I hardly have to imagine any of it since Middles Earth is all around me.</p><p>In the last week, I’ve been on many great hikes through forests like the one Bilbo traveled through. The paths usually follow a stream that leads to the Bay of Islands. Tall trees cover the paths and block a lot of light, and when it rained, I could hear it, but the trees kept me from getting too wet. On a trail today, I saw a family of quail. At first it just looked like a male and a female, but as clumsy chicks started to topple around them, I could see that the mother had at least six chicks tucked under her wings hiding them from me. I stopped where I was to let them get off the path, and sure enough the mother jumped up and scurried into the brush, leaving 14 little chicks to stumble their way toward her calls. It was one of the most precious things I have ever seen.</p><p>New Zealand is essentially two large islands, so it’s covered in beaches. Probably the most notable is the 90-Mile Beach. This beach lies on the east side of the top of New Zealand, across the Tasman Sea from Sydney Australia. It’s actually closer to 50 miles, but it is still the largest beach I have ever seen or heard of. Backpackers take three days to walk from one end of the beach to the other. It’s also a registered road and four wheelers and tour buses drive right along the water.</p><p>Like all the beaches I’ve seen so far, the 90-Mile Beach is covered in seashells. Hundreds of shells wash up from the sea and pile on top of each other. The shells are all different shapes, colors, and sizes. The crazy quantities had me wondering how there is room in the sea for water.</p><p>Over hundreds of years, the wind has blown sand from the beach in to huge dunes. I was fortunate enough to partake in the sport that’s been created around them: dune surfing. I rode down the hills of sand on my stomach into the stream at the bottom. It was raining a bit at the time, but was so much fun and so worth it.</p><p>At the very tip of the North Island is Cape Reinga, where you can see the Tasman Sea meet the Pacific Ocean with white water. The Maori people consider Cape Reinga the Jumping Off Point. The spirits of the Maori descend the roots of a small tree into the water leaving New Zealand. They wave back at their loved ones from the three islands off the coast, and then return to their ancestral homeland. It’s fitting that such a beautiful place should be so sacred.</p><p>New Zealand is beautiful because you can see seas, oceans, lakes, rivers, creeks, waterfalls, forests, mountains, islands, rolling hills, caves, open fields, dolphins, birds, wild horses, and emus all in the same turn of your head. Most of it is even unobstructed by buildings. It’s no wonder that New Zealand was chosen to represent a mythical, beautiful world that existed long before this one.</p>";

      reset();

      tick24[0].style.right = "-65px"; tick24[0].style.opacity = "1"; tick24[0].style.color = "#000D13";
    }

    postEleven();

    tick01[0].onmouseover = function() {header[0].innerHTML = "Feet on Solid Ground";};
    tick01[0].onmouseout = function() {header[0].innerHTML = "";};
    tick01[0].onclick = function() {postOne()};
    tick02[0].onmouseover = function() {header[0].innerHTML = "Rangitoto Island";};
    tick02[0].onmouseout = function() {header[0].innerHTML = "";};
    tick02[0].onclick = function() {postTwo()};
    tick1[0].onmouseover = function() {header[0].innerHTML = "West Auckland";};
    tick1[0].onmouseout = function() {header[0].innerHTML = "";};
    tick1[0].onclick = function() {postThree()};
    tick11[0].onmouseover = function() {header[0].innerHTML = "Minor Discrepancies";};
    tick11[0].onmouseout = function() {header[0].innerHTML = "";};
    tick11[0].onclick = function() {postFour()};
    tick12[0].onmouseover = function() {header[0].innerHTML = "A City Escape";};
    tick12[0].onmouseout = function() {header[0].innerHTML = "";};
    tick12[0].onclick = function() {postFive()};
    tick13[0].onmouseover = function() {header[0].innerHTML = "By The Bay";};
    tick13[0].onmouseout = function() {header[0].innerHTML = "";};
    tick13[0].onclick = function() {postSix()};
    tick2[0].onmouseover = function() {header[0].innerHTML = "The Definition of a City";};
    tick2[0].onmouseout = function() {header[0].innerHTML = "";};
    tick2[0].onclick = function() {postSeven()};
    tick21[0].onmouseover = function() {header[0].innerHTML = "Most Livable City";};
    tick21[0].onmouseout = function() {header[0].innerHTML = "";};
    tick21[0].onclick = function() {postEight()};
    tick22[0].onmouseover = function() {header[0].innerHTML = "Australian Wildlife";};
    tick22[0].onmouseout = function() {header[0].innerHTML = "";};
    tick22[0].onclick = function() {postNine()};
    tick23[0].onmouseover = function() {header[0].innerHTML = "Spiraling";};
    tick23[0].onmouseout = function() {header[0].innerHTML = "";};
    tick23[0].onclick = function() {postTen()};
    tick24[0].onmouseover = function() {header[0].innerHTML = "Middle Earth";};
    tick24[0].onmouseout = function() {header[0].innerHTML = "";};
    tick24[0].onclick = function() {postEleven()};

  });
