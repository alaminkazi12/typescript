{
  // inheritence in oop

  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }
  }

  class Student extends Parent {
    // name: string;
    // age: number;
    // address: string;
    constructor(name: string, age: number, address: string) {
      super(name, age, address);

      //   this.name = name;
      //   this.age = age;
      //   this.address = address;
    }
    // getSleep(numOfHours: number) {
    //   console.log(`${this.name} will sleep for ${numOfHours}`);
    // }
  }

  const student1 = new Student("Mr Saddam", 50, "Uganda");

  class Teacher extends Parent {
    // name: string;
    // age: number;
    // address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      //   this.name = name;
      //   this.age = age;
      //   this.address = address;
      super(name, age, address);
      this.designation = designation;
    }

    getSleep(numOfHours: number) {
      console.log(`${this.name} will sleep for ${numOfHours}`);
    }

    takeClass(numOfClass: number) {
      console.log(`${this.name} will take ${numOfClass}`);
    }
  }

  const teacher = new Teacher("Mr Saddam", 50, "Uganda", "Professor");

  //
}
