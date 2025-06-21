const deepClone = (obj) => {
  newobj= JSON.parse(JSON.stringify(obj))
  return newobj
}

newi=deepClone(obj2)
newi.info.no=101

console.log(newi)
console.log(obj2)



// deepClone(obj2)