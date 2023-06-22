class Dog {
	constructor(sound, age, name) {
		this.sound = sound;
		this.age = age;
		this.name = name;
	}

	makeSound() {
		console.log(this.sound);
	}

	updateSound(newSound) {
		this.sound = newSound;
	}

	checkNameTag() {
		console.log(this.name);
	}
}

let hanksDog = new Dog("woof", 1, "Titan");
let andrewDog = new Dog("woof", 1, "BiggerTitan");
hanksDog.makeSound();
andrewDog.makeSound();
hanksDog.updateSound("bark");
hanksDog.makeSound();
andrewDog.makeSound();
