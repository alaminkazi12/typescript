{
  // utility type

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type NameAge = Pick<Person, "name" | "age">;

  //  omit

  type ContactInfo = Omit<Person, "name" | "age">;

  //   required

  type personRequired = Required<Person>;

  // partial
  type PersonPartial = Partial<Person>;

  // readonly
  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "Mr. X",
    age: 200,
    contactNo: "014123",
  };

  person1.name = "Mr Kutta";

  // Record
  // type MyObj = {
  //   a: string;
  //   b: string;
  // };

  type MyObj = Record<string, string>;

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
    d: "5",
  };

  type EmptyObje = Record<string, unknown> = {};

  //
}
