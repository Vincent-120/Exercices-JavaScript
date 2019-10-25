/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function heure()
{
    var date = new Date();
    var heure = date.getHours();
    var minutes = date.getMinutes();
    if(minutes < 10)
        minutes = "0" + minutes;
    return heure + "h" + minutes;
}
heure()
    if(heure()>="17h30"){
    document.getElementById("target").innerHTML = "Bonsoir";
    }
    else{
        document.getElementById("target").innerHTML = "Bonjour";
    }
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
})();
