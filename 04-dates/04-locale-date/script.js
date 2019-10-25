/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function affichage() {
        function dateFr(){
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
        function heure(){
        var date = new Date();
        var second =date.getSeconds();
        if(second<10)
            second="0"+second
        var heure = date.getHours();
        var minutes = date.getMinutes();
        if(minutes < 10)
            minutes = "0" + minutes;
        return heure + ":" + minutes+":"+second;
        }
document.getElementById("target").innerHTML = dateFr()+","+" "+heure();
}
    setInterval(affichage, 1000);

// alert(dateFr()+","+" "+heure())
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
})();
