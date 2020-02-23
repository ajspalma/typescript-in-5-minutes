function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Jane",
    lastName: "Doe"
};
document.body.textContent = greeter(user);
// compiling using command: tsc greeter.ts
