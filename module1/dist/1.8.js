"use strict";
// destructuring
{
    const user = {
        id: 345,
        contactNo: "015234324325",
        name: {
            firstName: "Mezbaul",
            middleName: "Abedin",
            lastName: "persian",
        },
        address: "Uganda",
    };
    const { contactNo, name: { middleName }, } = user;
}
// array destructuring
const myFriends = ["chandler", "joey", "ross", "rachel", "monica"];
const [a, b, c] = myFriends;
const [, , d, ...rest] = myFriends;
