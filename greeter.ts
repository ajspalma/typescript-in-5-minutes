/**
 * Type annotations
 * used string type annotation 
 * to only accept string for 
 * person argument
 * 
 * @param person string 
 */
function greeter(person: string) {
    // Initial commit must be like this only
    return "Hello, " + person;
}

// this wont work because `person` argument
// only accepts String not array or any 
// other types
// let user = [0, 1, 2];

// This will work
let user = "Jane Doe";

document.body.textContent = greeter(user);

// compiling using command: tsc greeter.ts