import React,{useState,useContext} from 'react';
import {AppContextGlobal} from "../context/AppContext"
import {AuthContext} from "../context/AuthProvider"
import {Form,Modal,Input} from "antd";
import {addDocument} from "../firebase/service"
const AddRoomModal = () => {
    const [form] = Form.useForm();
    const user = useContext(AuthContext);
    const {visible,setVisible} = useContext(AppContextGlobal);
    const handleOk=()=>{
        const {name,description} = form.getFieldValue();
        addDocument("rooms",{
            name:name,
            description:description,
            members:[user.uid]
        })

        //reset form
        form.resetFields();
        setVisible(false);
    }
    const handleCancle=()=>{
        setVisible(false);
    }
    return (
        <div>
            <Modal
            visible={visible}
            title="Tạo phòng"
            onOk={handleOk}
            onCancel={handleCancle}
            >
                <Form form={form} layout="vertical">
                    <Form.Item  label="Tên phòng: " labelCol={12} name='name'>
                        <Input placeholder="nhập tên phòng"/>
                    </Form.Item>
                    <Form.Item labelCol={12} label="Mô tả: " name='description'>
                        <Input.TextArea placeholder="nhập mô tả"/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddRoomModal
