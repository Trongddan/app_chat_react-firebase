import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../../firebase/config";
import {addDocument} from "../../firebase/service";
const { Title } = Typography;

const FbProvider = new firebase.auth.FacebookAuthProvider();

const Login = () => {
  const handleFbLogin = async () => {
    const data = await auth.signInWithPopup(FbProvider);
    console.log(data);
    const { additionalUserInfo,user } = data;
    if(additionalUserInfo?.isNewUser){
        addDocument("user",{
          displayName:user.displayName,
          email:user.email,
          photoURL:user.photoURL,
          uid:user.uid,
          providerId:additionalUserInfo.providerId
        })
    }
  };
  return (
    <div>
      <Row justify={"center"} style={{ height: 800 }}>
        <Col span={8}>
          <Title style={{ textAlign: "center" }} level={3}>
            Fun chat
          </Title>
          <Button style={{ width: "100%", marginBottom: 25 }}>
            Đăng nhập bằng Google
          </Button>
          <Button
            onClick={handleFbLogin}
            style={{ width: "100%", marginBottom: 25 }}
          >
            Đăng nhập bằng Facebook
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
