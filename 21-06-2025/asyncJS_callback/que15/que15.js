function taskOne(){
    console.log("Task 1 completed")
}

function taskTwo(callback){
    console.log("Task 2 completed")
    setTimeout(()=>{callback()},1000)
}

taskTwo(taskOne)