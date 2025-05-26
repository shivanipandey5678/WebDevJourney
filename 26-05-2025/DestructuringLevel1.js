
const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ]



arr=[]
for (let i=0;i<people.length;i++){

  const {name:Person_name,address:{city,street:{name:cityname}}}=people[i];
  arr.push(`${Person_name} lives in ${city} on ${cityname}`)
  
}
console.log(arr)