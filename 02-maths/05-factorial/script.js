/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {
    let n = document.getElementById("number").value;
    parseInt (n,10);
        function factorielle(n){
                    if (n == 0) {
                    return 1;
                    }
                    else {
                    return n * factorielle (n-1);
                    }
    }
    alert (factorielle (n))
        // your code here
    });
})();
