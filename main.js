console.log("haha");
var fish1 = {
title: "まぐろ",
description: "Maguro(まぐろ), is the Japanese term for bluefin tuna, perhaps the best known and most commonly eaten fish in all of sushi dining.",
image: "http://kindaifish.com/frame/images/picture_book/maguro/main_fish.png"
};
var fish2 = {
    title: "サーモン",
    description: "Salmon(サーモン), or sake(鮭), which is the Japanese word for salmon, is a sweet and succulent fish loaded with omega-3 fatty acids and protein. Unlike the majority of sushi items, salmon sushi does not originate from Japan. This means that the majority of rolls are created and tailored to western tastes, as is apparent when one hears the names of the most popular sake sushi rolls and their ingredients.",
    image: "https://radish-pocket.com/wp-content/uploads/14743281091vh3c9kh46.jpg"
};
var fish3 = {
    title: "ブリ",
    description: "Buri(Yellowtail) has been favored as a sushi ingredient since the Edo period, and the best specimens are to be found in Toyama Bay on the northern shores of Honshu. In the winter months, buri is regarded as the fattiest and most flavorful shiromi (white fish) - its taste and depth of flavor can equal the best maguro, especially when carefully aged for a few days to allow for naturally occurring enzymes to break down the fish's proteins and fats into amino acids such as glutamate.",
    image: "http://kindaifish.com/frame/images/picture_book/buri/main_fish.png"
};
var fish4 = {
    title: "タイ",
    description: "Tai(鯛) season begins in the winter time, but doesn't reach its peak until the first week of April. The fish is then called sakura-dai (cherry blossom sea bream) and fetches high prices at market. The fish is usually served raw but can also be served aburi (with the skin slightly seared) or using the  kawashimozukuri method of splashing the skin with boiling water to tenderize it, then quickly chilling it with ice. ",
    image: "http://kindaifish.com/frame/images/picture_book/madai/main_fish.png"
};
var fish5 = {
    title: "フグ",
    description: "Fugu (foo-goo) is a dish made from the Puffer fish (blowfish) or Porcupine fish that has achieved an almost mythological status in western cuisine. It has become synonymous with risk taking, a culinary Russian roulette, due to that, if incorrectly prepared, a diner risks death from even a single bite due to a potent neurotoxin found in the fish. While the meat itself is not innately poisonous, the organs contain lethal amounts of a particular tetrodotoxin which may contaminate the meat if the fish is not prepared by a chef skilled in the art of fugu preparation. ",
    image: "http://kindaifish.com/frame/images/picture_book/torafugu/main_fish.png"
};

function maguro(){
    var container = document.querySelector(".display");
    var title = document.createElement("h2");
    var description = document.createElement("p");
    var maguroImage = document.createElement("img");

    title.innerHTML = fish1.title;
    description.innerHTML = fish1.description;
    maguroImage.src = fish1.image;

    title.className = "fishTitle";
    description.className = "fishDescription";
    maguroImage.className = "fishImage";

    container.appendChild(maguroImage);
    container.appendChild(title);
    container.appendChild(description);

}

function sake(){
    var container = document.querySelector(".display");
    var title = document.createElement("h2");
    var description = document.createElement("p");
    var sakeImage = document.createElement("img");

     title.innerHTML = fish2.title;
    description.innerHTML = fish2.description;
    sakeImage.src = fish2.image;

    title.className = "fishTitle";
    description.className = "fishDescription";
    sakeImage.className = "fishImage";

    container.appendChild(sakeImage);
    container.appendChild(title);
    container.appendChild(description);

}
function buri(){
    var container = document.querySelector(".display");
    var title = document.createElement("h2");
    var description = document.createElement("p");
    var buriImage = document.createElement("img");

     title.innerHTML = fish3.title;
    description.innerHTML = fish3.description;
    buriImage.src = fish3.image;

    title.className = "fishTitle";
    description.className = "fishDescription";
    buriImage.className = "fishImage";

    container.appendChild(buriImage);
    container.appendChild(title);
    container.appendChild(description);

}
function tai(){
    var container = document.querySelector(".display");
    var title = document.createElement("h2");
    var description = document.createElement("p");
    var taiImage = document.createElement("img");

     title.innerHTML = fish4.title;
    description.innerHTML = fish4.description;
    taiImage.src = fish4.image;

    title.className = "fishTitle";
    description.className = "fishDescription";
    taiImage.className = "fishImage";

    container.appendChild(taiImage);
    container.appendChild(title);
    container.appendChild(description);

}
function fugu(){
    var container = document.querySelector(".display");
    var title = document.createElement("h2");
    var description = document.createElement("p");
    var fuguImage = document.createElement("img");

     title.innerHTML = fish5.title;
    description.innerHTML = fish5.description;
    fuguImage.src = fish5.image;

    title.className = "fishTitle";
    description.className = "fishDescription";
    fuguImage.className = "fishImage";

    container.appendChild(fuguImage);
    container.appendChild(title);
    container.appendChild(description);

}

