
function outerfun(){
  message="it is hard but i will do it"
  function innerfun(){
    console.log(message)
  }
  return innerfun
}
var fun=outerfun()
fun()