/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const person =class person {
        constructor(firstname, lastname){
            this.firstname=firstname
            this.lastname=lastname
        }
    }
    
    const getter = new person('jean', 'durpulus')
    console.log(getter)
    document.getElementById('run').addEventListener('click',()=>{
        const setter =new person (prompt('First name'),prompt('Last name'))
        console.log(setter)
    })
})();r
