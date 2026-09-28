class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + " издаёт звук")
    }
}

class Cat extends Animal {
    speak() {
        console.log(this.name + " говорит: Мяу")
    }
}

class Dog extends Animal {
    speak() {
        console.log(this.name + " говорит: Гав")
    }
    fetch() {
        console.log(this.name + " принёс палку")
    }
}



const animals = [
    new Animal("Животяка"),
    new Cat("Добрий"),
    new Cat("Лучевой"),
    new Dog("Чуча")
]

animals.forEach((item) => {
    if (item.fetch) {
        item.fetch()
    } else {
        item.speak()
    }
});