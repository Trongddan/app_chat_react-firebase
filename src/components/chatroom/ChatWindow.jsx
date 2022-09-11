import { UserAddOutlined } from '@ant-design/icons'
import { Button,Avatar,Tooltip,Form,Input} from 'antd'

import React from 'react'
import Message from './Message'

const ChatWindow = () => {
    return (
        <div className="chatwindow">
           <div className="chatwindow_header">
               <div className="chatwindow_header_room">
                   <p className="room_title">Room 1</p>
                   <span className="room_description">Day la room 1</span>
               </div>
               <div className="groupButtonUser">
                   <Button type="text" icon={<UserAddOutlined/>}>Mời</Button>
                   <Avatar.Group size="small" maxCount={2}>
                       <Tooltip placement="top" title="A">
                           <Avatar>A</Avatar>
                       </Tooltip>
                       <Tooltip placement="top" title="B">
                           <Avatar>B</Avatar>
                       </Tooltip>
                       <Tooltip placement="top" title="C">
                           <Avatar>C</Avatar>
                       </Tooltip>
                   </Avatar.Group>
               </div>
           </div>
           <div className="chatwindow_content">
               <div className="list-message">
               <Message text={"dankedddddd sdfsdfs "} displayName={"danken"} photoUrl={"a"} createdAt={"12ham"}/>
               <Message text={"danken"} displayName={"danken"} photoUrl={"a"} createdAt={"12ham"}/>
               <Message text={"danken"} displayName={"danken"} photoUrl={"a"} createdAt={"12ham"}/>
               <Message text={"danken"} displayName={"danken"} photoUrl={"a"} createdAt={"12ham"}/>
               <Message text={"danken"} displayName={"danken"} photoUrl={"a"} createdAt={"12ham"}/>
               <Message text={"danken"} displayName={"danken"} photoUrl={"a"} createdAt={"12ham"}/>
              

               </div>
               <Form className="forminput_content">
                   <Form.Item>
                       <Input bordered={false} placeholder="Nhập nội dung"></Input>
                   </Form.Item>
                   <Button>Gửi</Button>
               </Form>
           </div>
        </div>
    )
}

export default ChatWindow
