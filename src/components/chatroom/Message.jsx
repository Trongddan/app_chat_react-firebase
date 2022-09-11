import React from 'react'
import {Avatar,Typography} from "antd"
const Message = ({text,displayName,photoUrl,createdAt}) => {
    return (
        <div className="message">
            <div className="message_auth">
                <Avatar src={photoUrl}></Avatar>
                <Typography.Text className="name">{displayName}</Typography.Text>
                <Typography.Text className="date">{createdAt}</Typography.Text>
            </div>
            <div className="message_content">
                <Typography.Text>{text}</Typography.Text>
            </div>
        </div>
    )
}

export default Message
