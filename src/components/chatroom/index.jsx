import React from 'react'
import {Row,Col} from "antd"
import SideBar from './SideBar'
import ChatWindow from './ChatWindow'
import "./style.scss"
const Chatroom = () => {
    return (
   <Row>
       <Col span={6}> <SideBar/> </Col>
       <Col  span={18}><ChatWindow/></Col>
       
   </Row>
    )
}

export default Chatroom
