// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    var up = document.getElementById('up');
    var down = document.getElementById('down');

    var greenDragon = {url:"greenDragon", date:"January 2, 2018", description:"While on a hike this is the view of Hahei Beach from the South."};
    var haheiBeach = {url:"haheiBeach", date:"January 3, 2018", description:"While on a hike this is the view of Hahei Beach from the South."};
    var kayaking = {url:"kayaking", date:"January 3, 2018", description:"Ana and I, kayaking on in and around Cathedral Cove."};
    var partTree = {url:"partTree", date:"January 2, 2018", description:"This is the large tree under which Bilbo has his 111th birthday party."};
    var bagend = {url:"bagend", date:"January 2, 2018", description:"Bagend seemed like the perfect little place to relax and read a book."};
    var ana = {url:"ana", date:"January 2, 2018", description:"Ana sitting on a bench bay an orchard in the Shire."};
    var farthings = {url:"farthings", date:"Januay 2, 2018", description:"When Ana and I walked into the Shire, this sign pointed out East and West Farthing."};
    var cone = {url:"cone", date:"December 26, 2017", description:"An example of the street art that is all over Christchurch."};
    var cathedral = {url:"cathedral", date:"December 25, 2017", description:"The earthquake damaged Cathedral of the Blessed Sacrament."};
    var soundFalls = {url:"soundFalls", date:"Decemebr 19, 2017", description:"A water fall in the mountains of Milford Sound."};
    var sealRock = {url:"sealRock", date:"Decemebr 19, 2017", description:"Teenage seals on Seal Rock in Milford Sound."};
    var mil = {url:"mil", date:"Decemebr 19, 2017", description:"A view of Milford Sound toward the Tasman Sea."};
    var whiteWater = {url:"whiteWater", date:"Decemebr 19, 2017", description:"A river through the mountains beteewn Queenstown and Milford Sound."};
    var ice = {url:"ice", date:"Decemebr 19, 2017", description:"Snow capped mountains behind some waterfalls."};
    var tempFalls = {url:"tempFalls", date:"Decemebr 19, 2017", description:"Some temporary waterfalls along the drive to Milford Sound."};
    var rock = {url:"rock", date:"December 20, 2017", description:"A rock along the edge of the lake in Queenstown."};
    var tiki = {url:"tiki", date:"December 20, 2017", description:"The View from the Tiki Trail lookout."};
    var frame = {url:"frame", date:"December 18, 2017", description:"A spectacular view of the lake and mountains from Queenstown Hill."};
    var hill = {url:"hill", date:"December 18, 2017", description:"A spectacular view of the lake and mountains from Queenstown Hill.",};
    var pet = {url:"pet", date:"December 16, 2017", description:"Someone's pet sheep in the middle of Franz Josef the town."};
    var creek = {url:"creek", date:"December 16, 2017", description:"A creek near Franz Josef the town."};
    var iceRiver = {url:"iceRiver", date:"December 16, 2017", description:"A creek near Franz Josef the town."};
    var manuka = {url:"manuka", date:"December 16, 2017", description:"The manuka blossoms that are responsible for New Zealand's manuka honey."};
    var nelsonBeach = {url:"nelsonBeach", date:"December 14, 2017", description:"The view from a beach in Nelson around sunset."};
    var welli = {url:"welli", date:"December 12, 2017", description:"The view of Wellington from the top of Mount Victoria."};
    var parlament = {url:"parlament", date:"December 12, 2017", description:"The Parlament Building and the Beehive building in Wellington."};
    var npIsland = {url:"npIsland", date:"December 11, 2017", description:"A view of one of the islands along the New Plymouth Coast."};
    var lonely = {url:"lonely", date:"December 11, 2017", description:"Mount Taranaki, or the Lonely Mountain as Bilbo knows it."};
    var jelly = {url:"jelly", date:"December 11, 2017", description:"A bright blue jellyfish-like creature that washed up on the beach."};
    var rockRivers = {url:"rockRivers", date:"December 11, 2017", description:"The water forms patterns in the sand as it flows around rocks toward the sea."};
    var eyes = {url:"eyes", date:"December 10, 2017", description:"In New Plymouth, the walls have eyes."};
    var deku = {url: "deku", date:"December 10, 2017", description:"Look Ana, I found the Great Deku tree. It's 2000 years old."};
    var mermaid = {url: "mermaid", date:"December 1, 2017", description:"The Mermaid Pools next to the ocean."};
    var lookout = {url:"lookout", date:"December 1, 2017", description:"This is the view from a hill along the Whangarei Coast."};
    var stream = {url:"stream", date:"November 30, 2017", description:"This stream is fed by the Whangarei Falls."};
    var falls = {url:"falls", date:"November 30, 2017", description:"The Whangarei Falls a short walk from where i was staying."};
    var qual = {url:"qual", date:"November 29, 2017", description:"A Mother quail and her 14 chicks stumbling across the forest path."};
    var crab = {url:"crab", date:"November 28, 2017", description:"I found this crab along the coast of the Bay of Islands."};
    var boi = {url:"boi", date:"November 28, 2017", description:"This is a view of part of the expansive Bay if Islands."};
    var jumpingOff = {url:"jumpingOff", date:"November 28, 2017", description:"This is the small tree at the Jumping Off Point where Maori spirits leave New Zealand."};
    var ninetyMile = {url:"ninetyMile", date:"November 28, 2017", description:"This is the vast Ninety-Mile Beach stretching beyond the horizon."};
    var basin = {url:"basin", date:"November 25, 2017", description:"A great waterfall in the Kerikeri Basin."};
    var rainbowFalls = {url:"rainbowFalls", date:"November 25, 2017", description:"The beatiful Rainbow Falls in Kerikeri."};
    var bunny = {url:"bunny", date:"November 25, 2017", description:"I saw multible bunnies along the Rainbow Falls track."};
    var treeTunnel = {url:"treeTunnel", date:"November 25, 2017", description:"This is the begining of one of the forest tracks completely shaded by trees."};
    var kangaroo = {url:"kangaroo", date:"November 9, 2017", description:"A Kangaroo at the Melbourne Zoo. The wild kagaroos I saw were much more gray."};
    var peccarie = {url:"peccarie", date:"November 9, 2017", description:"This peccarie at the Melbourne Zoo is like a small pig."};
    var tapir = {url:"tapir", date:"November 9, 2017", description:"This is a tapir at the Melbourne Zoo."};
    var wombat = {url:"wombat", date:"November 9, 2017", description:"A wombat sleeping through the morning at the Melbourne Zoo."};
    var butterfly = {url:"butterfly", date:"November 9, 2017", description:"In the Butterfly House at the Melbourne Zoo."};
    var koala = {url:"koala", date:"November 9, 2017", description:"This is Lily the koala having breakfast at the Melbourne Zoo."};
    var star = {url:"star", date:"November 8, 2017", description:"It's me riding the Melbourne star."};
    var nightTime = {url:"nightTime", date:"November 8, 2017", description:"Melbourne City at night."};
    var skydeck = {url:"skydeck", date:"November 8, 2017", description:"This is a view from the Melbourne Skydeck."};
    var streetArt = {url:"streetArt", date:"November 8, 2017", description:"This sculpture moves based on how the wind blows."};
    var tower = {url:"tower", date:"November 4, 2017", description:"One of the stops along the Great Ocean Road."};
    var bestBeach = {url:"bestBeach", date:"Novemebr 4, 2017", description:"One of the stops along the Great Ocean Road."};
    var gorge = {url:"gorge", date:"November 4, 2017", description:"One of the stops along the Great Ocean Road."};
    var twelve = {url:"twelve", date:"November 4, 2017", description:"One of the stops along the Great Ocean Road."};
    var queenVic = {url:"QueenVic", date:"November 3, 2017", description:"A statue of Queen Victoria in the Royal Botanical Gardens."};
    var warMemorial = {url:"warMemorial", date:"November 3, 2017", description:"Australia's Shrine of Rememberance."};
    var penguin = {url:"penguin", date:"November 2, 2017", description:"This is wild Little Penguin: the smallest penguin species."};
    var pengi = {url:"pengi", date:"November 2, 2017", description:"This is wild Little Penguin: the smallest penguin species."};
    var roses = {url:"roses", date:"November 2, 2017", description:"It's me, again, at the St Kilda Botanical Gardens."};
    var operaBridge = {url:"operaBridge", date:"October 29, 2017", description:"The obligatory beautiful Sydney Opera House picture."};
    var fortune = {url:"fortune", date:"October 29, 2017", description:"Leaving a coin and rubbing this boar's nose is good fortune."};
    var slitDrum = {url:"slitDrum", date:"October 28, 2017", description:"A Slit Drum used on the island of Ambrym to transmit messages."};
    var cockatoo = {url:"cockatoo", date:"October 28, 2017", description:"These Sulfur Crested Cockatoos have a call like a scream."};
    var westfield = {url:"westfield", date:"October 26, 2017", description:"Every city needs a tall tower in it's skyline. This is Sydney's."};
    var ibis = {url:"ibis", date:"October 26, 2017", description:"White Ibis birds are as common as Pigeons in Sydney parks."};
    var fountain = {url:"fountain", date:"October 26, 2017", description:"This is the dramatic Archibald Fountain in Hyde Park Sydney."};
    var mangere = {url:"mangere", date:"October 23, 2017", description:"The view of Auckland from the suburb of Mangere."};
    var monument = {url:"monument", date:"October 14, 2017", description:"The One Tree Hill Monument sitting at the top of a volcano."};
    var oneTree = {url:"oneTree", date:"October 14, 2017", description:"The view of the city outside the park from One Tree Hill Domain."};
    var blackSheep = {url:"blackSheep", date:"October 14, 2017", description:"A happy little black sheep resting by the fence at One Tree Hill Domain."};
    var woman = {url:"woman", date:"October 5, 2017", description:"The Moari Portraits exhibit at the Auckland Central Art Gallery."};
    var man = {url:"man", date:"October 5, 2017", description:"The Moari Portraits exhibit at the Auckland Central Art Gallery."};
    var paperArt = {url:"paperArt", date:"October 5, 2017", description:"The New Zealand Artists exhibit at the Auckland Central Art Gallery."};
    var blue = {url:"blue", date:"October 5, 2017", description:"The New Zealand Artists exhibit at the Auckland Central Art Gallery."};
    var black = {url:"black", date:"October 5, 2017", description:"The New Zealand Artists exhibit at the Auckland Central Art Gallery."};
    var red = {url:"red", date:"October 5, 2017", description:"The New Zealand Artists exhibit at the Auckland Central Art Gallery."};
    var emu = {url:"emu", date:"September 28, 2017", description:"The huge flightless emu bird and the rail that contains it."};
    var kea = {url:"kea", date:"September 28, 2017", description:"This is the friendly little Kea bird that flew up to the rail next to me."};
    var rino = {url:"rino", date:"September 28, 2017", description:"Just a beautiful sleepy rino resting at the Auckland Zoo."};
    var zebra = {url:"zebra", date:"September 28, 2017", description:"Both my sisters' favorite animals in the same exhibit."};
    var swans = {url:"swans", date:"September 28, 2017", description:"A family of black swans chilling in the parking lot outside the Zoo."};
    var swam = {url:"swam", date:"September 28, 2017", description:"This is an Australasian Swamphen in the park outside the Auckland Zoo."}
    var weka = {url:"weka", date:"September 22, 2017", description:"One of the cute little Weka birds that live on Rangitoto."};
    var peak = {url:"peak", date:"September 22, 2017", description:"This is the view from the peak of Rangitoto Island Volcano."};
    var bowl = {url:"bowl", date:"September 22, 2017", description:"The bowl created by the center of the volcano is covered in plants."};
    var city = {url:"city", date:"September 22, 2017", description:"The view of Auckland from the trail to the peak of Rangitoto Volcano."};
    var skyline = {url:"skyline", date:"September 22, 2017", description:"The view of downtown Auckland from the ferry to Rangitoto Island."};
    var boardwalk = {url:"boardwalk", date:"September 21, 2017", description:"Wairangi Warf has great views from the middle of the bay."};
    var island = {url:"island", date:"September 21, 2017", description:"Sailers are fishing by a tiny island in the middle of the bay."};
    var stairs = {url:"stairs", date:"September 21, 2017", description:"Stairs lead from the streets down to Ponsonby beaches."};
    var swing = {url:"swing", date:"September 21, 2017", description:"A tree swing with great views on the Sentinel Beach Reserve."};
    var shell = {url:"shell", date:"September 21, 2017", description:"The beaches in Ponsonby are covered in seashells from the bay."};
    var northshore = {url:"northshore", date:"September 21, 2017", description:"A view of the bridge to Northshore from the Sentinel Beach Reserve."};
    var beachChair = {url:"beachChair", date:"September 21, 2017", description:"A cement lounge chair at the Sentinel Beach Reserve."};
    var speedBump = {url:"speedBump", date:"September 21, 2017", description:"In Auckland, the roads shrink and widen instead of speed bumps."};
    var margaret = {url:"margaret", date:"September 21, 2017", description:"This is clearly the sign for the greatest street on Earth."};
    var marsh = {url:"marsh", date:"September 18, 2017", description:"The view from the Hobson Bay Walkway of East Auckland."};
    var treeStruggles = {url:"treeStruggles", date:"September 15, 2017", description:"This poor tree needs crutches to keep its branches of the ground."};
    var oa = {url:"oa", date:"September 12, 2017", description:"It's me! Outside the Oakland Airport before my flight to Auckland."};
    var domes = {url:"domes", date:"January 11, 2018", description:"The domes at the Gardens by the Bay with indoor gardens."};
    var sands = {url:"sands", date:"January 11, 2018", description:"The Marina Sands in Singapore. This is a side view from the Singapore Flyer."};
    var singMosque = {url:"singMosque", date:"January 10, 2018", description:"A mosque in the middle of Singapore."};
    var mushrooms = {url:"mushrooms", date:"January 11, 2018", description:"A colpex of cream colored buildings with red roofs that remind me of mushrooms."};
    var singPlants = {url:"singPlants", date:"January 11, 2018", description:"These are some of the unique plants inside Cloud Forest, one of the domes at the Gardens by the Bay in Singapore."};
    var superTrees = {url:"superTrees", date:"January 11, 2018", description:"A view of the Super Trees from right below them."};
    var littleIndia = {url:"littleIndia", date:"January 12, 2018", description:"I found these elephant sculptures in Little India in Singapore."};
    var plant = {url:"plant", date:"January 13, 2018", description:"One of the unique Asian plants at the Singapore Botanic Gardens."};
    var orchid = {url:"orchid", date:"January 13, 2018", description:"Some of the incredible orchid blooms at the Orchid Garden in Singapore."};
    var purpleOrchids = {url:"purpleOrchids", date:"January 13, 2018", description:"Some of the incredible orchid blooms at the Orchid Garden in Singapore."};
    var orchidGardens = {url:"orchidGardens", date:"January 13, 2018", description:"Some of the incredible orchid blooms at the Orchid Garden in Singapore."};
    var monkey = {url:"monkey", date:"January 14, 2018", description:"The monkey that walked past me on the park path about a foot away."};
    var mosque = {url:"mosque", date:"January 19, 2018", description:"The Melaka Straits Mosque, or the Floating Mosque, in Malaysia."};
    var melakaRiver = {url:"melakaRiver", date:"January 20, 2018", description:"A view of the river in Melaka and the shops and resteraunts that run along it."};
    var geometry = {url:"geometry", date:"January 27, 2018", description:"The geometric designs that make up the walls of a mosque in Kuala Lumpur"};
    var klBuilding = {url:"klBuilding", date:"January 27, 2018", description:"Interesting Malaysian architecture in downtown Kuala Lumpur."};
    var klBuild = {url:"klBuild", date:"January 27, 2018", description:"Interesting Malaysian architecture in downtown Kuala Lumpur."};
    var arc = {url:"arc", date:"January 27, 2018", description:"Interesting Malaysian architecture in downtown Kuala Lumpur."};
    var bank = {url:"bank", date:"January 27, 2018", description:"Interesting Malaysian architecture in downtown Kuala Lumpur."};
    var kualaLumpur = {url:"kualaLumpur", date:"January 27, 2018", description:"A view of Kuala Lumpur Tower and the Petronas Towers."};
    var thaiBoats = {url:"thaiBoats", date:"January 30, 2018", description:"Boats anchored at a beach near the Phuket Airport in Thailand."};
    var dragon = {url:"dragon", date:"February 1, 2018", description:"A dragon Sculpture in a park in Old Town Phuket."};
    var monkeyHill = {url:"monkeyHill", date:"February 1, 2018", description:"One of the many monkeys hanging out on and around the road to the top of Monkey Hill in Phuket."};
    var phuketChineseTemple = {url:"phuketChineseTemple", date:"February 1, 2018", description:"A Chinese Temple in Old Town Phuket."};
    var phuketView = {url:"phuketView", date:"February 1, 2018", description:"A view of Phuket from the lookout at the top of Rang Hill."};
    var hybiscus = {url:"hybiscus", date:"February 1, 2018", description:"A hybiscus flower, which are very common in the Counties I've visited."};
    var thaiSculp = {url:"thaiSculp", date:"February 2, 2018", description:"The Saphan Hin Mining Monument in OldTown Phuket."};
    var phuketWater = {url:"phuketWater", date:"February 2, 2018", description:"A view of the sea from a park on the shore or Phuket."};
    var thaitemp = {url:"thaitemp", date:"February 2, 2018", description:"A temple by the sea in Old Town Phuket."};
    var thaiArc = {url:"thaiArc", date:"February 2, 2018", description:"This is an example of the architecture that makes up most of Old Town Phuket's, shops and houses."};
    var baby = {url:"baby", date:"February 6, 2018", description:"A little baby elephant  hanging out in the sun."};
    var mama = {url:"mama", date:"February 6, 2018", description:"Me feeding an elephant at the elephant sactuary."};
    var jamesBond = {url:"jamesBond", date:"February 7, 2018", description:"This is an island in Thailand that apears in the James Bond movies."};

    var all = [jamesBond, mama, baby, thaiArc, thaitemp, phuketWater, thaiSculp, dragon, monkeyHill, phuketChineseTemple, phuketView, hybiscus, thaiBoats, geometry, klBuilding, klBuild, arc, bank, kualaLumpur, melakaRiver, mosque, monkey, orchidGardens, purpleOrchids, orchid, plant, littleIndia, superTrees, singPlants, domes, sands, mushrooms, singMosque, kayaking, haheiBeach, greenDragon, partTree, bagend, ana, farthings, cone, cathedral, soundFalls, sealRock, mil, whiteWater, ice, tempFalls, rock, tiki, frame, hill, pet, creek, iceRiver, manuka, nelsonBeach, welli, parlament, npIsland, lonely, jelly, rockRivers, eyes, deku, mermaid, lookout, stream, falls, qual, crab, boi, jumpingOff, ninetyMile, basin, rainbowFalls, bunny, treeTunnel, kangaroo, peccarie, tapir, wombat, butterfly, koala, star, nightTime, skydeck, streetArt, tower, bestBeach, gorge, twelve, queenVic, warMemorial, penguin, pengi, roses, operaBridge, fortune, slitDrum, cockatoo, westfield, ibis, fountain, mangere, monument, oneTree, blackSheep, woman, man, paperArt, blue, black, red, emu, kea, rino, zebra, swans, swam, weka, peak, bowl, city, skyline, boardwalk, island, stairs, swing, shell, northshore, beachChair, speedBump, margaret, marsh, treeStruggles, oa];

    var nz = [kayaking, haheiBeach, greenDragon, partTree, bagend, ana, farthings, cone, cathedral, soundFalls, sealRock, mil, whiteWater, ice, tempFalls, rock, tiki, frame, hill, pet, creek, iceRiver, manuka, nelsonBeach, welli, parlament, npIsland, lonely, jelly, rockRivers, eyes, deku, mermaid, lookout, stream, falls, qual, crab, boi, jumpingOff, ninetyMile, basin, rainbowFalls, bunny, treeTunnel, mangere, monument, oneTree, blackSheep, woman, man, paperArt, blue, black, red, emu, kea, rino, zebra, swans, swam, weka, peak, bowl, city, skyline, boardwalk, island, stairs, swing, shell, northshore, beachChair, speedBump, margaret, marsh, treeStruggles, oa];

    var aus = [kangaroo, peccarie, tapir, wombat, butterfly, koala, star, nightTime, skydeck, streetArt, tower, bestBeach, gorge, twelve, queenVic, warMemorial, penguin, pengi, roses, operaBridge, fortune, slitDrum, cockatoo, westfield, ibis, fountain];

    var sing = [monkey, orchidGardens, purpleOrchids, orchid, plant, littleIndia, superTrees, singPlants, domes, sands, mushrooms, singMosque];

    var malay = [geometry, klBuilding, klBuild, arc, bank, kualaLumpur, melakaRiver, mosque];

    var thai = [jamesBond, mama, baby, thaiArc, thaitemp, phuketWater, thaiSculp, dragon, monkeyHill, phuketChineseTemple, phuketView, hybiscus, thaiBoats];

    var pics = document.getElementById('pics');
    var h3 = document.getElementsByTagName('h3');
    var desc = document.getElementsByTagName('p');

    var menu = document.getElementById('menu');
    var nu = document.getElementById('nu');
    var al = document.getElementById('all');
    var n = document.getElementById('nz');
    var au = document.getElementById('aus');
    var sin = document.getElementById('sing');
    var mala = document.getElementById('malay');
    var tha = document.getElementById('thai');

    var i = 0;
    var j = all;

    nu.style.opacity = "0";
    nu.style.zIndex = "-1";

    menu.onclick = function () {if (nu.style.opacity == "0") {nu.style.opacity = "1"; nu.style.zIndex = "5";} else {nu.style.opacity = "0"; nu.style.zIndex = "-1";}};
    al.onclick = function() {i = 0; nu.style.opacity = "0"; nu.style.zIndex = "-1"; j = all; set();};
    n.onclick = function() {i = 0; nu.style.opacity = "0"; nu.style.zIndex = "-1"; j = nz; set();};
    au.onclick = function() {i = 0; nu.style.opacity = "0"; nu.style.zIndex = "-1"; j = aus; set();};
    sin.onclick = function() {i = 0; nu.style.opacity = "0"; nu.style.zIndex = "-1"; j = sing; set();};
    mala.onclick = function() {i = 0; nu.style.opacity = "0"; nu.style.zIndex = "-1"; j = malay; set();};
    tha.onclick = function() {i = 0; nu.style.opacity = "0"; nu.style.zIndex = "-1"; j = thai; set();};

    function set() {
      pics.style.backgroundImage = "url(images/" + j[i].url + ".jpg)";
      h3[0].innerHTML = j[i].date;
      desc[0].innerHTML = j[i].description;
    }

    set();
    up.onclick = function () {if (i>0) {--i; set(); console.log("fired");}};
    down.onclick = function () {if (i<(j.length-1)) {++i; set(); console.log("fired");}};
});
