import React,{useEffect,useState} from "react";
import {db} from "../firebase/config"
const useFireStore=(collection,condition)=>{
const [documents,setDocuments]=useState([]);

useEffect(()=>{
    let collectionRef = db.collection(collection).orderBy('createdAt');
    if(condition){
        if(!condition.compareValue || condition.compareValue.length<=0){
            return;
        }
        collectionRef=collectionRef.where(condition.fieldName, condition.operator,condition.compareValue)
    }
    const unUnsubcrise= collectionRef.onSnapshot(snapshot=>{
        console.log(snapshot.docs[0].data());
        const documents= snapshot.docs.map(doc=>({
            ...doc.data(),
            id:doc.id
        }));
        setDocuments(documents)
    })
    return unUnsubcrise
},[condition,collection])
return documents;
}
export default useFireStore;