import React,{useContext} from 'react'
import {Avatar,Button,Typography} from "antd"
import {auth} from "../../firebase/config"
import {AuthContext} from "../../context/AuthProvider"
const UserInfo = () => {
    const data = useContext(AuthContext)
    console.log(data)
    return (
        <div>
            <div>
                <Avatar style={{marginRight:12}} src={data.photoURL?data.photoURL:""}></Avatar>
                <Typography.Text>{data.displayName}</Typography.Text>
            </div>
            <Button type="link"  onClick={()=>auth.signOut()}  ghost={true}>Đăng xuất</Button>
        </div>
    )
}

export default UserInfo
