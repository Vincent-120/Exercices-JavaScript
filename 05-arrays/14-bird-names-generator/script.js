/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = [
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ];
    document.getElementById("run").addEventListener("click",()=>{
    function random (min,max){
        min=1;
        max=10;
        return Math.round(Math.random()*(max-min)+min)
    }
    function randome (min,max){
        min=1;
        max=10;
        return Math.round(Math.random()*(max-min)+min)
    }
        a = random()
        b = randome()
        //   condition de generation

        if(birds[a].fem==true && birds[b].fem ==true){
            document.getElementById("target").innerHTML= "la"+" "+birds[a].name+" "+adjectives[b]+" "+"mais"+" "+"la"+" "+birds[b].name+" "+adjectives[a]+"e";
        }
        else if(birds[a].fem==true){
            document.getElementById("target").innerHTML= "la"+" "+birds[a].name+" "+adjectives[b]+" "+"mais"+" "+"le"+" "+birds[b].name+" "+adjectives[a];
        }
        else if(birds[b].fem==true){
            document.getElementById("target").innerHTML= "le"+" "+birds[a].name+" "+adjectives[b]+" "+"mais"+" "+"la"+" "+birds[b].name+" "+adjectives[a]+"e";
        }
        else {
            document.getElementById("target").innerHTML= "le"+" "+birds[a].name+" "+adjectives[b]+" "+"mais"+" "+"le"+" "+birds[b].name+" "+adjectives[a];
        }
    })
    // your code here
})();
