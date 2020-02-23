function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = "Jane Doe";

document.body.textContent = greeter(user);