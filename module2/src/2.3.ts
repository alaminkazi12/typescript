{
  //

  // generic type

  // const rollNumber: number[] = [3, 5, 6];

  const rollNumber: Array<number> = [3, 5, 6];

  const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];

  const bollArray: Array<boolean> = [true, false, true, true];

  //   now dynamic (generect):

  type GenericArray<T> = Array<T>;

  const roolNuberUpdated: GenericArray<number> = [10, 20, 30];

  //   OBJECET

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Kalu",
      age: 400,
    },
    {
      name: "Kuddus",
      age: 500,
    },
  ];

  //   generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manus2: GenericTuple<string, string> = ["Mr Ghu", "Mr Chu"];

  const manus: [string, string] = ["Mr. X", ":Mr. Y"];

  //
}
