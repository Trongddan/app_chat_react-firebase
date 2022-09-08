import React from "react";
import { Row, Col,Button,Typography } from "antd";
import firebase,{auth} from "../../firebase/config"
import {useNavigate} from "react-router-dom"
const {Title} =Typography;


const FbProvider = new firebase.auth.FacebookAuthProvider();

const Login = () => {
  const navigate = useNavigate();
  const handleFbLogin=()=>{
      auth.signInWithPopup(FbProvider)
  }
  auth.onAuthStateChanged(user=>{
      if(user){
        navigate("/")
      }
  })
  return (
    <div>
      <Row justify={"center"} style={{height:800}}>
        <Col span={8}>
        <Title style={{textAlign:"center"}} level={3} >Fun chat</Title>
          <Button style={{width:"100%",marginBottom:25}} >
              Đăng nhập bằng Google
          </Button>
          <Button onClick={handleFbLogin}  style={{width:"100%",marginBottom:25}} >
              Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
