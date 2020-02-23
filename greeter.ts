/**
 * using Classes with
 * a constructor and a few
 * public fields.
 * 
 * Notice combination of 
 * Classes and Interfaces
 * play well together, letting
 * the programmer decide on the right 
 * level of absctraction.
 * 
 * The use of `public` on argument to 
 * the constructor is a shorthand that allows 
 * us to automatically create properties with 
 * that name.
 */
class Student {
    fullName: string;
    constructor(
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


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
    middleInitial: "M.",
    lastName: "Doe"
}

document.body.textContent = greeter(user);

// compiling using command: tsc greeter.ts