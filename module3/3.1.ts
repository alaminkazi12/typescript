{
  // oop - class

  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const dog = new Animal("German Shepard Bhai", "dog", "Ghew Ghew");
  const cat = new Animal("Persian Bhai", "cat", "Meaw, meaw");
  cat.makeSound();
  dog.makeSound();

  class Bird {
    name: string;
    color: string;
    price: number;

    constructor(name: string, color: string, price: number) {
      this.name = name;
      this.color = color;
      this.price = price;
    }

    ShowPrice() {
      console.log(`This ${this.name} price is ${this.price}`);
    }
  }

  const craw = new Bird("Craw", "Black", 200);
  const parrot = new Bird("Parrot", "Green", 1000);

  craw.ShowPrice();
  parrot.ShowPrice();

  //   with parameter properties

  class Car {
    constructor(
      public name: string,
      public color: string,
      public price: number
    ) {}

    showPriceColorName() {
      console.log(
        `The car name is ${this.name}, the color is ${this.color} and the price is ${this.price}`
      );
    }
  }

  const jeep = new Car("Jeep", "Yeallow", 500);
  const truck = new Car("Truck", "Black", 700);

  //
}
