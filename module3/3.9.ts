{
  // abstraction: 1. interface 2. abstract

  //   idea

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the car eng");
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am just testing`);
    }
  }
  abstract class Car2 implements Vehicle1 {
    startEngine(): void {
      console.log("I am starting the car eng");
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine`);
    }
    move(): void {
      console.log(`I am moving the car`);
    }
    test() {
      console.log(`I am just testing`);
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();
  toyotaCar.stopEngine();
  toyotaCar.move();
  toyotaCar.test();

  //   abstract class

  class Vechile2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing`);
    }
  }

  class ToyotaCar extends Car2 {
    startEngine(): void {
      console.log(`Starting the engine`);
    }
    stopEngine(): void {
      console.log(`Stopping the engine`);
    }
    move(): void {
      console.log(`Moving the car`);
    }
  }

  //
}
