let inputBox=document.getElementById("taskInput");
let addBtn=document.getElementById("taskAdd");
let ul=document.getElementById("ul");
addBtn.addEventListener("click",()=>{
    if(inputBox.value){

        let newDiv=document.createElement("div");
        let newLi=document.createElement("li");
        let deletebtn=document.createElement("button");
        let completebtn=document.createElement("button");
        completebtn.id="completebtn";
        newDiv.append(newLi,deletebtn,completebtn);
        
        deletebtn.innerText="Delete";
        completebtn.innerText="Completed";
        newLi.textContent=inputBox.value;
        ul.append(newDiv)
        inputBox.value=""

        completebtn.addEventListener("click",()=>{
            newLi.style.textDecoration="line-through"
        })

        deletebtn.addEventListener("click",()=>{
            newDiv.remove()
        })
    }else{
       alert("please enter the task first")
    }
    
})

completebtn.addEventListener("click",()=>{
    let key = newLi.getAttribute("data-key");
    

})