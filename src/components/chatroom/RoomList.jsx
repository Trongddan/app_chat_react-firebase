import React, { useContext, useMemo } from "react";
import { Button, Collapse, Typography } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import { AppContextGlobal } from "../../context/AppContext";
const { Panel } = Collapse;
const RoomList = () => {
 const {rooms,setVisible} =useContext(AppContextGlobal);
  return (
    <Collapse ghost defaultActiveKey={["1"]}>
      <Panel header="Danh sach cac phong" key="1">
        {rooms?.map((room, index) => (
          <Typography.Link className="room_item" key={room.id}>{room.name}</Typography.Link>
        ))}

        <Button onClick={()=>setVisible(true)} type="text" icon={<PlusSquareOutlined />} ghost>
          Thêm Phòng
        </Button>
      </Panel>
    </Collapse>
  );
};

export default RoomList;
