/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        sayHello() {
            return `${this.greeting}! I'm ${this.name}!`;
        }
    }
    class Dog extends Animal{
        constructor(name, greeting){
            super();
            this.name = name;
            this.greeting = greeting;
        } 
    }
    const monChien = new Dog (prompt('quel est le nom de votre chien ?'), "Hello")
    console.log(monChien.sayHello()) 

    // your code here
})();
