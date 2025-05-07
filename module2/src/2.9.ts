{
  // conditional type - if the value of one type is depeds on the another type

  type a1 = number;
  type b1 = undefined;

  type x = a1 extends null ? true : false; //conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  //   keyof

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type Hasbike = CheckVehicle<"bike">;
  type hasShip = CheckVehicle<"Ship">;

  //
}
