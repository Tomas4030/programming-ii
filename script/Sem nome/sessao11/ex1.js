class Animal {

    constructor(name) {
        this.name = name;

    }

    speak() {
        return `${this.name} makes a noise.`;
    }
    static info() {
        return "Eu sou uma classe animal";
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name); // Call parent constructor
    }

    speak() {
        return `${super.speak()} ${this.name} barks!`;
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name); // Call parent constructor
    }

    speak() {
        return `${super.speak()} ${this.name} Miau!`;
    }
}

const dog = new Dog("Rex");
console.log(dog.speak()); // "Rex makes a noise. Rex barks!"
const cat = new Cat("Cat");
console.log(cat.speak()); // "Rex makes a noise. Rex barks!"
console.log(Animal.info());
