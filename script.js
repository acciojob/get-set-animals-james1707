//complete this code
class Animal {
    constructor(species) {
        this.species = species;
    }
    makeSound(){
        console.log(`the ${this.species} makes sound`)
    }
 }

 class Dog extends Animal {
       bark(){
        console.log("bark");
       }
    }

 class Cat extends Animal {
        purr(){
        console.log("purr");
       }
    }
 
    let myCat = new Cat("persion");

    myCat.makeSound();
    myCat.purr();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
