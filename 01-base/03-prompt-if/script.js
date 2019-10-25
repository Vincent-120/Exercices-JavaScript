/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let myFunc = () => {
    var ans = prompt ("Veux tu du gateau ?")
    if (ans === 'oui'){
        alert ("felicitation, il est bon !")
    } else {
        alert ("mais mais ! c\'est trop bon le gateau !")
    }
}

myFunc()
//var age = prompt("What is your age?")
//if(age < 13) {
//console.log("You may play ONLY with your PARENTS PERMISSION")
//} else {
//console.log("Play on!")
//}
