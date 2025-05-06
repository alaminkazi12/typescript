{
  //

  const addCourseToStudent = <
    T extends { id: number; name: string; email: string }
  >(
    student: T
  ) => {
    const course = "Next Level Web Dev";
    return {
      ...student,
      course,
    };
  };

  const student3 = addCourseToStudent({
    id: 444,
    name: "Kuddus",
    email: "Kuddus@gmail.com",
    emni: "emni",
  });

  const student1 = addCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
  }>({
    id: 222,
    name: "Mr Bal",
    email: "bal@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 222,
    name: "Mr Y",
    email: "Y@gmail.com",
    hasWatch: "Apple Watch",
  });

  //
}
