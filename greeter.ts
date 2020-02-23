/**
 * using Interfaces 
 * with Type annotations
 * to describe the objects 
 * that have firstName and 
 * lastName field
 */
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}


let user = {
    firstName: "Jane",
    lastName: "Doe"
}

document.body.textContent = greeter(user);

// compiling using command: tsc greeter.ts