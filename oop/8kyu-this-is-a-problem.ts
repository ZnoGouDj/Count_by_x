function NameMe1(first, last) {
  this.firstName = first;
  this.lastName = last;
  return {
    name: this.firstName + ' ' + this.lastName,
    firstName: this.firstName,
    lastName: this.lastName,
  };
}

//! or

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = first + ' ' + last;
}

var n = new NameMe('John', 'Doe');
console.log(n.firstName); //Expected: John
console.log(n.lastName); //Expected: Doe
console.log(n.name); //Expected: John Doe
