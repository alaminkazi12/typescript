{
  //

  // interface

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };

  const userWithRole: UserWithRole1 = {
    name: "kasem",
    age: 40,
    role: "manager",
  };

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user1: User1 = {
    name: "kasem",
    age: 40,
  };

  const userWithRole2: UserWithRole2 = {
    name: "Saddam",
    age: 70,
    role: "Kasikhor",
  };

  //
}
