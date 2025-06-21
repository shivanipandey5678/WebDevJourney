

console.log("Begin");
setTimeout(()=>{
    console.log("Timeout Task")
},0)

Promise.resolve().then(() => { console.log("Promise Task"); });
console.log("End");


//while any asyn task come to js it send to the web api .web api handle that task until the duration of exicution is completes.
//right after time completion on the basis of there nature they send to micro,macro task queue.
//there they wait for their exicution by call stack 
//evenet loop kept on looking in stack and queue.
//when ever event loop found that now stack is completly empty and task queue is not empty it start pushing microtask first into call stack.
//after exicution of each task from micro queue if their is any task in macro queue they start exicuting those task.
//one macro task at a time .
//make sure micro,macro task exicute after completion of each syn task.
//with the help of this cycle js make sure to run everything but in non blocking manner