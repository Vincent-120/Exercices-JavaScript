/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let target = document.getElementById("target")
    function dateFr()
{
     // les noms de jours / mois
     var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi");
     var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
     // on recupere la date
     var date = new Date();
     // on construit le message
     var message = jours[date.getDay()] + " ";   // nom du jour
     message += date.getDate() + " ";   // numero du jour
     message += mois[date.getMonth()] + " ";   // mois
     message += date.getFullYear();
     return message;
}
function heure()
{
     var date = new Date();
     var heure = date.getHours();
     var minutes = date.getMinutes();
     if(minutes < 10)
          minutes = "0" + minutes;
     return heure + "h" + minutes;
}
 if(heure()=="10h49"){
     document.getElementById("target").innerHTML = "le texte change a 10h48";
     
 }
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
})();

//Indices :
// - Fonction date();
// - Conditions If, Else ou Switch
