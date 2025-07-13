import React, { useEffect ,useState,createContext} from 'react'
import axios from 'axios';
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [isAuth,setIsAuth]=useState(null);
    const [userData, setUserData] = useState({});
    const [authBooks,setAuthBooks]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8099/api/auth/me',{withCredentials:true})
      
        .then((res)=>{
            setIsAuth(true);
            setUserData(res.data.user)
        })
        .catch((err)=>{
            setIsAuth(false);
            setUserData({})
        });

    },[])

   
  return <AuthContext.Provider value={{isAuth,setIsAuth,userData, setUserData,authBooks,setAuthBooks}}>
    {children}
  </AuthContext.Provider>
}

export default AuthProvider;