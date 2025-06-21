function fetchUserData(callback){
    console.log("Fetching user data...")
    setTimeout(()=>{
      callback()
    },1000)
  }
  function fetchUserPosts(callback){
    console.log("Fetching user posts...")
    setTimeout(()=>{
      callback()
    },1500)
  }
  function processUserData(){
    console.log("User data received")
  }
  function processPostData(){
    console.log("User posts received")
    console.log("All data loaded successfully!")
  }
  
  fetchUserData(processUserData)
  fetchUserPosts(processPostData)