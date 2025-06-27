let div=document.getElementById("div");
let colorChangeInput=document.getElementById("colorChangeInput");
let textChangeInput=document.getElementById("textChangeInput");
let colorChangebtn=document.getElementById("colorChange");
let textChangebtn=document.getElementById("textChange");
div.style.width="100px";
div.style.height="100px";
div.style.backgroundColor="pink";


colorChangebtn.addEventListener("click", () => {
    let color = colorChangeInput.value.trim();

    if(color){
        const temp=new Option().style;
        temp.color = color;
        if (temp.color !== "") {
            div.style.backgroundColor = color; 
        } else {
            alert("Invalid color name!");
        }
    }else {
        alert('Please enter a color!');
    }
})






textChangebtn.addEventListener("click",()=>{
   
    if(textChangeInput.value){
         
        let newtext=textChangeInput.value;
        return div.innerText=newtext;
        

    }else{
        alert('Please enter some text!')
    }
})