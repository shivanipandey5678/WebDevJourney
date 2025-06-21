function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let RANDOM_NUMBER=Math.floor(Math.random*10)+1;
            if(RANDOM_NUMBER>5){
                resolve("Fetched data successfully!");
            }else{
                reject("Network error: Failed to fetch data.")
            }
        },1000)
    })

    
}

async function  fetchDataHandler(){
    try {
         const result = await fetchData();
         console.log(result);  

    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

fetchDataHandler()