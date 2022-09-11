import React from 'react'
import {Row,Col} from "antd"
import UserInfo from './UserInfo'
import RoomList from './RoomList'
import AddRoomModal from '../../addRoomModal/AddRoomModal'
const SideBar = () => {
    return (
        <Row className="sideBar">
            <Col className="sideBar_userInfo" span={24}><UserInfo/></Col>
            <Col className="sideBar_roomlist" span={24}><RoomList/></Col>
            <AddRoomModal/>
        </Row>
    )
}

export default SideBar
