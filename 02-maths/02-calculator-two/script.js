/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        let opone,optwo;
        opone=document.getElementById("op-one").value;
        optwo=document.getElementById("op-two").value;
    switch (operation){
        case "addition":
                alert (parseInt(opone)+parseInt( optwo));
                break;
        case "substraction":
                alert (parseInt(opone)-parseInt( optwo));
                break;
        case "multiplication":
                alert (parseInt(opone)*parseInt( optwo));
                break;
        case "division":
                alert (parseInt(opone)/ parseInt( optwo));
                break;
    }
        // perform the operation
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
