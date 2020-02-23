function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = "Jane Doe";
document.body.textContent = greeter(user);
