/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        let n;
        n=1;
        while (n<21) {
        if (n%2==0){
            alert (Math.pow(n,2));
        }
        n+=1;
        // your code here
        }
    });
})();
