let btn=document.querySelector("button");
let ul=document.querySelector('ul');

btn.addEventListener('click',()=>{
    let count=ul.getElementsByTagName("li").length+1;
    let newList=document.createElement("li");
    newList.innerText="New Item";
    if(count%2==0){
        newList.style.fontWeight = "bold";
        newList.style.color = "blue";
    }else{
        newList.style.fontStyle = "italic";
        newList.style.color = "red";
    }


    ul.appendChild(newList)
})

