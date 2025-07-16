//complete this code
class Animal {
    constructor(species) {
        this.species = species;
    }
    makeSound(){
        console.log(`the ${this.species} makes sound`)
    }
 }

 class Cat extends Animal {
     purr(){
        console.log("purr");
       }
    }

 class Dog extends Animal {
        bark(){
        console.log("woof");
       }
    }
 
    const myCat = new Cat("Siamese");
    const myDog = new Dog ("Golden Retriever");
     

    myCat.makeSound();
    myCat.purr();

    myDog.makeSound();
    myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
