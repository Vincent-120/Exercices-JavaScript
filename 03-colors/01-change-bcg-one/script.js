/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("red").addEventListener ("click",()=>{
        document.body.style.background = 'red'
    });
    document.getElementById("green").addEventListener ("click",()=>{
        document.body.style.background = 'green'
    });
    document.getElementById("yellow").addEventListener ("click",()=>{
        document.body.style.background = 'yellow'
    });
    document.getElementById("blue").addEventListener ("click",()=>{
        document.body.style.background = 'blue'
    });
    // your code here
})();
