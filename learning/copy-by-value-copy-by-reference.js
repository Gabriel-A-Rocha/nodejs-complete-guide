// Understanding copies of primitive/reference types

let name = "Gabriel";
let copyName = name;

name = "Paula";

console.log(name); // Paula
console.log(copyName); // Gabriel

let person = { name: "Gabriel" };
let copyPerson = person;

person.name = "Paula";

console.log(person.name); // Paula
console.log(copyPerson.name); // Paula

const changeName = (inputName) => {
  inputName = "Other name";
};
changeName(name);
console.log(name); // Paula

const ChangePersonName = (personObject) => {
  personObject.name = "Other name";
};
ChangePersonName(person);
console.log(person.name); // Other name
