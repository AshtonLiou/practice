let username: string = "NoTimeX";
let age: number = 15;
let isStudent: boolean = true;

let scores: number[] = [90, 85, 78];
let fruits: string[] = ["apple", "banana", "orange"];

let user: { name: string; age: number; isStudent: boolean } = {
    name: "Ashton",
    age: 15,
    isStudent: true,
};

function greet(name: string): string {
    return `Hello, ${name}!`;
};

console.log(greet("Ashton"));

interface User {
    name: string;
    age: number;
    isStudent: boolean;
};

let user1: User = {
    name: "Ashton",
    age: 15,
    isStudent: true,
};

function identity<T>(arg: T): T {
    return arg;
};

console.log(identity<number>(42));
console.log(identity<string>("Hello"));