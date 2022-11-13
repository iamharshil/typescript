// cSpell:words Herrington
let userName: string = "Jack";
let hasLoggedIn: boolean = true; //ctrl + k + ctrl + i => get type

userName += " Herrington";
console.log("userName :", userName);

let myNumber: number = 10;
let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");
const myValue: Array<number> = [1, 2, 3];

interface Person {
    first: string;
    last: string;
}

const Person: Person = {
    first: "Jack",
    last: "Herrington",
};

const myPerson: {
    first: string;
    last: string;
} = {
    first: "Jack",
    last: "Herrington",
};

const ids: Record<number, string> = {
    10: "a",
    20: "b",
};

ids[30] = "c";

// this will give error before even comparing it.
// if (ids[30] == 10) {

if (ids[30] == "10") {
    console.log("true");
}

// In both these cases ts infer type of it so no need to specify it.
for (let i = 0; i < 10; i++) {
    console.log(i);
}
[1, 2, 3].forEach((v) => console.log(v));
const out = [4, 5, 6].map((v) => v * 10);
// const out: number[] = [4, 5, 6].map((v) => `${v * 10}`); //error: map output is string and given type is number.

console.log("out :", out);
