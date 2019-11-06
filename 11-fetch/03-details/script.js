/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let i = 0;
    document.getElementById("run").addEventListener("click", async () => {
        try {
            const id                 = document.getElementById("hero-id").value;
            const request            = await fetch("http://localhost:3000/heroes");
            const arrObjetXmen       = await request.json();
            const target             = document.getElementById("target");
            let   indexOfRequestXmen = arrObjetXmen.findIndex( objetXmen => objetXmen.id == id );
            let   objetXmen          = arrObjetXmen[indexOfRequestXmen];
            i++;
            let template             = document.getElementById("tpl-hero").cloneNode(true);
            let cloneTemplateContent = document.importNode(template.content, true);
            target.appendChild(cloneTemplateContent);
            document.querySelector(`.hero:nth-child(0n+${i})>.title>strong.name`).innerHTML  = objetXmen.name;
            document.querySelector(`.hero:nth-child(0n+${i})>.title>em.alter-ego`).innerHTML = objetXmen.alterEgo;
            document.querySelector(`.hero:nth-child(0n+${i})>p.powers`).innerHTML            = objetXmen.abilities;
        }catch (error){
            console.error(error); 
        }
    })
    // your code here
})();
