/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    document.getElementById("run").addEventListener("click",() =>{
        computers.forEach(element => {
            if (element.available==undefined){
                element.available = defaultProps.available;
            }
            if (element.user==undefined){
                element.user = defaultProps.user;
            }
            if(element.os==undefined){
                element.os=defaultProps.os;
            }
        });
        console.log(computers[0])
        console.log(computers[1])
        console.log(computers[2])
        console.log(computers[3])
        console.log(computers[4])
        console.log(computers[5])
        console.log(computers[6])
        console.log(computers[7])
        console.log(computers[8])
    })
    // your code here
})();
