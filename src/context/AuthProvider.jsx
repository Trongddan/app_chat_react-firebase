import React,{createContext,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {Spin} from "antd"
import { auth } from '../firebase/config'

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [user,setUser] =useState({});
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate();
   useEffect(()=>{
    const unSubcribed = auth.onAuthStateChanged((user)=>{
        if(user){
            const {displayName,photoURL,email,uid}=user;
            setUser({displayName,photoURL,email,uid});
            setLoading(false);
            navigate("/");
        }else{
            navigate("/login");
        }
    })
    return()=>{
        unSubcribed();
    }
   },[navigate])
    
  return (
    <AuthContext.Provider value={user}>
        {loading?<Spin/>:children}
    </AuthContext.Provider>
  )
}

export default AuthProvider