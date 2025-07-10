
const checkAccess = (roles) => {
  console.log("checkAccess1")
    return (req, res, next) => {
      console.log(req.user)
      console.log("checkAccess2")
      if (req.user) {
        if(roles.includes(req.user.role)){
          // console.log(roles.includes(req.user.role))
          console.log("checkAccess3")
          next();
        }else {
          console.log("checkAccess4")
          return res.status(403).json({ message: "Access denied" });
        }
       
      } 
    };
  };
  
  module.exports = checkAccess;

  // console lines are part of debugging!!
  