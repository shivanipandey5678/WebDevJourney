
const userProfile = {

    name: "Alice",
 
    age: 28,
 
    details: function() {
 
    return `${this.name} is ${this.age} years old.`;
    },
 
    updateAge(newAge) {
 
    if (newAge <= 0 || typeof newAge!=="number" || !newAge) {
 
    console.log("Invalid age.");
 
    return; }
 
    this.age = newAge;
 
    console.log(this.details()); 
    return;
      } 
    };
 
    userProfile.updateAge(30);
 
    console.log(userProfile.details()); // Expected: "Alice is 30 years old."