function addNumbers(a: number, b: number): number {
    return a + b;
}

export default addNumbers;

export const addString = (str1: string, str2: string = ""): string =>
    `${str1} ${str2}`;

// union type (for arrow functions where it returns something)
export const format = (title: string, param: string | number): string =>
    `${title} ${param}`;

// type void when function doesn't return anything
export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
};

// for defining promise
export const fetchData = (url: string): Promise<string> =>
    Promise.resolve(`Data from ${url}`);

// for multiple arguments REST params
function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(" ")}`;
}

export function getName(user: { first: string; last: string }): string {
    // return `${user?.first} ${user?.last}`; //optional chaining operator
    return `${user?.first ?? "first"} ${user?.last ?? "last"}`; // null coalescing operator
    // if left side is null then use right side code
}
