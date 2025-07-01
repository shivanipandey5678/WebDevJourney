let newName="myApp_simpleJS"
let count=0
let titleChange=()=>{
     ++count;

     document.title=newName;
     document.getElementById("counter").innerText=`Title updated ${count} times`
   }

