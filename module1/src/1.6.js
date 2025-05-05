"use strict";
// funcation is typescript
function add(num1, num2) {
    return num1 + num2;
}
add(2, 2);
const addArrow = (num1, num2) => num1 + num2;
// object --> method
const poorUser = {
    name: "Mezba",
    balance: 0,
    addBalance(balance) {
        return this.balance + balance;
    },
};
const arr = [1, 4, 6, 8];
const newArray = arr.map((element) => element * element);
