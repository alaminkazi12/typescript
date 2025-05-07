{
  // Mapped types

  const arrofNumbers: number[] = [1, 4, 5];

  const arrofStrings: string[] = ["1", "2", "3"];

  const arrofStrings2: string[] = arrofNumbers.map((number) => {
    return number.toString();
  });

  console.log(arrofStrings2);

  type AreaNumber = {
    height: number;
    width: number;
  };

  //   type AreaString = {
  //     height: string;
  //     width: string;
  //   };

  //   lookup
  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{
    height: string;
    width: number;
  }> = {
    height: "120",
    width: 200,
  };

  //
}
