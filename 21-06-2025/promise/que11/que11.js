function timer(duration, onComplete){
    let message=`Timer of ${duration} ms finished`
    setTimeout(()=>{
      onComplete(message)
      
    },duration)
  }
  let duration =2000;
  function onComplete(message){
      console.log(message);
  }
  
  timer(duration, onComplete)