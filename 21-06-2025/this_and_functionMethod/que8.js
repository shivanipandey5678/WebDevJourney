function personInfo(){
  console.log(this.name)
  console.log(this.age)
}

object1={
  name:'shiv',
  age:23
}
personInfo.call(object1)
