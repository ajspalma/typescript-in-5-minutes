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
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Jane",
    middleInitial: "M.",
    lastName: "Doe"
};
document.body.textContent = greeter(user);
// compiling using command: tsc greeter.ts
