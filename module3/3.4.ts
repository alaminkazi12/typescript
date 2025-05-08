{
  //
  // type guard in opp --instanceof guard ;

  class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }

    makeSound() {
      console.log("I am makeing sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeGheu() {
      console.log("I am Gheuing");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMeaw() {
      console.log("I am mewaing");
    }
  }

  //   smart way te handle korar jonno

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  //   const getAnimal = (animal: Animal) => {
  //     if (animal instanceof Dog) {
  //       animal.makeGheu();
  //     } else if (animal instanceof Cat) {
  //       animal.makeMeaw();
  //     } else {
  //       animal.makeSound();
  //     }
  //   };

  const getAnimal = (animal: Animal) => {
    if (isDog) {
      animal.
    } else if (isCat) {
      animal.makeMeaw();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dong Bhai", "Dog");
  const cat = new Cat("Cat Bhai", "cat");
  const kutta = new Animal("Kutta", "Dog");

  getAnimal(dog);
  getAnimal(cat);
  getAnimal(kutta);

  //
}
