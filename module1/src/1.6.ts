// funcation is typescript
function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 2);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> method

const poorUser = {
  name: "Mezba",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};

const arr: number[] = [1, 4, 6, 8];

const newArray: number[] = arr.map(
  (element: number): number => element * element
);
