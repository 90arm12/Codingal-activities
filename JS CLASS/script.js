class Animal {
    // Class variable
    static kingdom= "Animal kingdom";
    constructor(n,s) {
        // Instance Variables
        this.name=n;
        this.sound=s;
    }
    makeSound() {
        document.write("Animal " + this.name+ " makes sound " + this.sound);
    }
}

//Child class
class Dog extends Animal {
    constructor(n,s,b) {
        super(n,s);
        this.breed = b;
    }
    getDetail() {
        document.write("Name: " +this.name+ ", Breed: " +this.breed);
    }
}
class Cat extends Animal {
    constructor(n, s, c) {
        super(n, s);
        this.color = c;
    }
    getDetail() {
        document.write("Name: " + this.name + ", Color: " + this.color);
    }
}
//Create object
//const dog = new Animal("Star Crunch","Barking");
//document.write(dog.kingdom + "<br>")
//dog.makeSound();

const dog = new Dog("Star Crunch", "Woof","Akita");
document.write(Dog.kingdom + "<br>")
dog.makeSound();
document.write("<br>");
dog.getDetail();
document.write("<br>");
const cat = new Cat("Hello Kitty", "Meow", "Yellow");
document.write("<br>")
cat.makeSound();
document.write("<br>");
cat.getDetail();
document.write("<br>");
document.write(Cat.kingdom + "<br>")