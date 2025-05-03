{
  // union types and intersection type

  // union types

  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FulstackDeveloper = "fontendDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FulstackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "Male" | "Female";
    bloodGroup: "O+" | "A+" | "AB+";
  };

  const user1: User = {
    name: "persian",
    email: "Kasembalarprem@gmail.com",
    gender: "Male",
    bloodGroup: "O+",
  };

  //   intersection

  //
}
