function createCounter(){
    let count =0;
    function increment(){
      count+=1;
      return count;
    }
    function getCount(){
      return count;
    }
    return {increment,getCount}
  }
  
  const counter = createCounter();
  console.log(counter.increment());
  console.log(counter.increment());
  console.log(counter.getCount());
  