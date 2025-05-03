{
  // ternary operator || optional chaining || nullish coalescing operatior

  const age: number = 18;

  if (age >= 18) {
    console.log("adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 15 ? "adult" : "not adult";

  console.log({ isAdult });

  //   nullish coallescing operatior

  const isAuthenticated = "";

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";

  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentaddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Maflar",
    address: {
      city: "brishal",
      road: "Kallu Para",
      presentaddress: "Sallu Mal",
    },
  };

  const permanentAddress =
    user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({ permanentAddress });

  //
}
