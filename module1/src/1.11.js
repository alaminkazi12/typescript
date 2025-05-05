"use strict";
var _a, _b;
{
    // ternary operator || optional chaining || nullish coalescing operatior
    const age = 18;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("Not Adult");
    }
    const isAdult = age >= 15 ? "adult" : "not adult";
    console.log({ isAdult });
    //   nullish coallescing operatior
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    console.log({ result1 }, { result2 });
    const user = {
        name: "Maflar",
        address: {
            city: "brishal",
            road: "Kallu Para",
            presentaddress: "Sallu Mal",
        },
    };
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
    console.log({ permanentAddress });
    //
}
