{
  // spread operatior

  const bros1: string[] = ["Tanmoy", "Nahid", "Rahat"];
  const bros2: string[] = ["Mir", "Firoz", "Mizan"];

  bros1.push(...bros2);

  const mentors = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors,
    ...mentors2,
  };

  console.log(mentorList);

  // learn rest operator

  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend} `));
  };

  greetFriends("Abul", "Kabul", "Babul", "Ubul", "Labul");
}
