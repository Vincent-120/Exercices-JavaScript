/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click",()=>{
        const person={
            printIntroduction : function(){
                console.log('je m\'appel'+" "+this.name+" "+this.lastName+"\n"+"je suis agé de"+" "+this.age+"\n"+"je vis en"+" "+this.country);
            }
        }
        const me = Object.create(person);
        me.name ="Vincent"
        me.lastName = "Vissers"
        me.age = "23"
        me.country = "Belgique"
        me.printIntroduction()
    })
    // your code here
})();

//indice utilisation

/*const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  
  const me = Object.create(person);
  
  me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();*/
