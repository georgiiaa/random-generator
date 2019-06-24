var song = ["Older by Sasha Sloan", "Delicate by Taylor Swift", "Alaska by Maggie Rogers", "Love Song by Zak Abel", "Hundred by Khalid", "Hey Jude by The Beatles", "Dreams by Fleetwood Mac", "Thick and Thin by LANY", "Love It If We Made It by The 1975", "Vroom Vroom by Charli XCX", "all the good girls go to hell by Billie Eilish", "I Know A Place by MUNA", "Self Care by Emmalyn", "Holiday by The Aces", "Neon Moon (feat. Kacey Musgraves) by Brooks & Dunn", "Talia by King Princess", "Exhale by Sabrina Carpenter", "Rocket Man by Elton John", "Amsterdam by Coldplay", "Supercut by Lorde", "Peach by Broods", "The Wire by HAIM"]

document.getElementById("button").innerHTML = "Get Song";
var button = document.getElementById("button");

button.addEventListener ("click" , function (){
    var randomNum = Math.random();
    var randomNumBig = randomNum * song.length;
    var randomRound = Math.floor(randomNumBig);
    console.log(randomNum);
    console.log(randomNumBig);
    console.log(song [randomRound]);
    document.querySelector("h2").innerHTML = (song[Math.floor(Math.random() * 22)]);
});
