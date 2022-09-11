import firebase,{db} from "./config"
export const addDocument=(collection,data)=>{
    const query = db.collection(collection); // tạo ra 1 collection mới
    query.add( 
        {
        ...data,
        createdAt:firebase.firestore.FieldValue.serverTimestamp()
        }
    )
}