"use strict";
{
    // spread operatior
    const bros1 = ["Tanmoy", "Nahid", "Rahat"];
    const bros2 = ["Mir", "Firoz", "Mizan"];
    bros1.push(...bros2);
}
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
const mentorList = Object.assign(Object.assign({}, mentors), mentors2);
console.log(mentorList);
