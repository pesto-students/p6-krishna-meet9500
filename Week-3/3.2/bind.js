const personName = {
  firstName: "Meet",
  lastName: "Makadia",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const member = {
  firstName: "Demo",
  lastName: "Test",
};

var name = personName.fullName.bind(member);
console.log(name());
