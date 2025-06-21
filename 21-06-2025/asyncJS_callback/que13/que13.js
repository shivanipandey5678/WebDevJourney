interval=setInterval(()=>{
   console.log("loading...")
},1000)

setTimeout(()=>{
   clearInterval(interval);
   console.log("loaded succesfully!")
},5000)