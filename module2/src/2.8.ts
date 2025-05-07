{
  //
  // asynchronous typescript

  type User = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<User> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data: User = await response.json();

    console.log(data);
    return data;
  };

  getTodo();

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
