const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };
const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

const {age:updatedage,address:{zipcode:updatedzip,country:newcountrykey}}=updates;

const mergerd={...profile,age:updatedage,address:{...profile.city,zipcode:updatedzip,country:newcountrykey}}

console.log(mergerd)