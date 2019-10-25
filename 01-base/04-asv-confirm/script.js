/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let Name, age, Ville,yon;
    yon = false;
    while ( yon== false) {
        Name = prompt ('Quel est votre nom ?');
        age = prompt ('Quel est votre age ?');
        Ville = prompt ('Quel est votre ville ?')
        yon = confirm( Name +" "+ age+" "+ Ville+" "+'es bien vos Informations ?');
    }
    // your code here
})();
