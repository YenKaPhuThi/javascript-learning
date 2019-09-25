var emptyObject = {};

var personObject = {
  firstName: "John",
  lastName: "Smith"
}

// Fill more details for Person object
personObject.age = 23;
personObject["salary"] = 7500;

console.log("personObject", personObject);

//Check member in fact belongs to Person object
for(var member in personObject) {
  if (personObject.hasOwnProperty(member)) {
    console.log("The member " + member + " personObject is " + personObject[member]);
  }
}