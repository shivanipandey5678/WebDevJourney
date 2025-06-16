
let age=12
function displayAge(){
    console.log("before change age",age)
    function changeAge(){
      age =13
      console.log("changed age",age)
    }
  changeAge()
}
displayAge()
