// Liskov substitution principle

// A subclass should override the parent classs methods in a such way that does not break fuctionality from client's point of view

class Animal {
    eat() {
        console.log("Animal Eats!!");
    }
}

class Bird extends Animal {
    fly() {
        console.log("Birds Eat!!");
    }
}

class Ostrich extends Bird {
    fly() {
        console.log("With Liskov principle:  Ostrich do not fly!!")
    }
}
let parrot = new Bird();
parrot.eat();
parrot.fly();

let ostrich = new Ostrich();
ostrich.eat();
ostrich.fly();

// This violates the Liskov principle because ostriches cannot fly, potentially causing unexpected behavior.The optimal approach is to extend the Ostrich class from the Animal class instead:

// Ostrich class should be like

class Ostrich1 extends Animal{
    walk(){
        console.log("Without Liskov principle: Ostrich Walks!!")
    }
}

let ostrich1 = new Ostrich1();
ostrich1.eat();
ostrich1.walk();
