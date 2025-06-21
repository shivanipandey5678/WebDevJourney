let newpomise=new Promise((resolve,reject)=>{
    resolve("promise fullfill")
})
console.log( (newpomise))

// learning1 : promise variable holds the Object.not a function 

let delivery = new Promise((resolve,reject)=>{
    let placed=true;
    if(placed){
        setTimeout(()=>{
            resolve("order placed")
         },5000)
    }
    else{
        reject("order cancelled")
    }

})
delivery
.then((param)=>{
    console.log(param)
})
.catch((err)=>{
console.log(err)
})
.finally(()=>{
    console.log("everytime ")
})
// console.log(delivery)

// learning2: if u directly console out as a basic nature of js it will exicute the console line first a sit will show u pending state.
// so u have to handle it with the help of .then .catch .final all are micro task the text which is present inside resolve and reject ()
// it is consider as parameter in our .then and .catch.if it resolve properly it will comes under .then in reject state it comes under .catch and if you 
// want to print it in any case it will comes under .finally


const DB = [
    { id: 1, name: "Aarav" },
    { id: 2, name: "Diya" },
    { id: 3, name: "Kabir" },
    { id: 4, name: "Meera" },
    { id: 5, name: "Vivaan" },
    { id: 6, name: "Anaya" },
    { id: 7, name: "Ishaan" },
    { id: 8, name: "Saanvi" },
    { id: 9, name: "Reyansh" },
    { id: 10, name: "Tanya" }
  ];
let database_promise  = new Promise((resolve,reject)=>{
   let server=true;
   if(server){
      resolve(DB)
   }
   else{
      reject("unable to fetch")
   }
});

database_promise
.then((data)=>{
   let userList=data.map((e)=>{
       console.log(e.name)
   })
})
.catch(()=>{
    reject("unable to fetch")
})

// leraning3: after resolve ,reject rest of the line will not ba consider or exicute

function uploadFile(callback){
    setTimeout(()=>{
      console.log("settimeout1")
      callback()
    },1000)
  }
  
  function readFile(callback){
    setTimeout(()=>{
      console.log("settimeout2")
      callback()
    },1000)
  }
  
  function analyzeFile(callback){
    setTimeout(()=>{
      console.log("settimeout3")
      callback()
    },1000)
  }
  
  function compileFile(callback){
    setTimeout(()=>{
      console.log("settimeout4")
      callback()
    },1000)
  }
  
  uploadFile(()=>{
    readFile(()=>{
      analyzeFile(()=>{
        compileFile(()=>{
          console.log("done")
        })
      })
    })
  })

  //callback hell

  function uploadFile() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("settimeout1");
        resolve();
      }, 1000);
    });
  }
  
  function readFile() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("settimeout2");
        resolve();
      }, 1000);
    });
  }
  
  function analyzeFile() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("settimeout3");
        resolve();
      }, 1000);
    });
  }
  
  function compileFile() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("settimeout4");
        resolve();
      }, 1000);
    });
  }
  

  uploadFile()
  .then(() => readFile())
  .then(() => analyzeFile())
  .then(() => compileFile())
  .then(() => {
    console.log("done");
  });
