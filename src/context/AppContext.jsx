import React,{createContext,useMemo,useContext,useState} from "react"
import useFireStore from "../hook/useFireStore"
import {AuthContext} from "./AuthProvider"
export const AppContextGlobal = createContext();
const AppContext=({children})=>{
    const [visible,setVisible] =useState(false)
    const user = useContext(AuthContext);
    // cấu trúc của collection room:
    // {
    //   name:"sdasd",
    //   description:"ádasda",
    //   members:[uid1,uid2...]
    // }
    const condition = useMemo(() => {
      return {
        fieldName: "members",
        operator: "array-contains",
        compareValue: user.uid,
      };
    }, [user.uid]);
  
    const rooms = useFireStore("rooms", condition);
    return(
        <AppContextGlobal.Provider value={{rooms,visible,setVisible}}>
            {children}
        </AppContextGlobal.Provider>
    )
}
export default AppContext;