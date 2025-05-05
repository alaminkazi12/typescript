{
  //

  // function with generic
  const createArray = (param: string) => {
    return [param];
  };

  const res1 = createArray("Bangladesh");

  const CreateArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const resGeneric = CreateArrayWithGeneric<string>("Bangladesh");

  interface User {
    id: number;
    name: string;
  }

  const resGenObj = CreateArrayWithGeneric<User>({
    id: 222,
    name: "Mr Kutta",
  });

  //   with tuple
  const CreateArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resTuple = CreateArrayWithTuple<string, string>("Bangladesh", "Nepal");

  interface User {
    id: number;
    name: string;
  }

  const resTupleObj = CreateArrayWithTuple<User, string>(
    {
      id: 222,
      name: "Mr Kutta",
    },
    "Mofiz"
  );

  //

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Dev";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr Bal",
    email: "bal@gmail.com",
    devType: "NLWD",
  });

  //
}
