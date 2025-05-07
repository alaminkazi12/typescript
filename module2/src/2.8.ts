{
  //
  // asynchronous typescript
  // basic promise

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  //   calling create promise function

  const showData = async (): Promise<string> => {
    const data: string = await createPromise();
    return data;
  };

  showData();

  //   for object

  const createPromise2 = (): Promise<{ something: string }> => {
    return new Promise<{ something: string }>((reslove, reject) => {
      const data: { something: string } = { something: "Kutta" };
      if (data) {
        reslove(data);
      } else {
        reject("Nothing to load");
      }
    });
  };

  const showData2 = async (): Promise<{ something: string }> => {
    const data: { something: string } = await createPromise2();
    return data;
  };
  //
}
