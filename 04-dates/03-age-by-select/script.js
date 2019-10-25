/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function getAge(date) {
        var diff = Date.now() - date.getTime();
        var age = new Date(diff);
        return Math.abs(age.getUTCFullYear() - 1970);
    }
    document.getElementById("run").addEventListener("click", ()=>{
        let Years, month, days;
        Years= document.getElementById("dob-year").value;
        month=document.getElementById("dob-month").value;
        days=document.getElementById("dob-day").value;
        parseInt(Years,10);
        parseInt(month,10);
        parseInt(days,10);

        alert (getAge(new Date(Years,month,days))+" "+'ans')
})
    // your code here
})();
