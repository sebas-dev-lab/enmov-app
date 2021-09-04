import React from "react";
import { Modal } from "antd";
import UploadImage from "./UploadImage";
const ModalUpImage = ({ isModalVisible, handleOk, handleCancel }) => {
  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <UploadImage/>
    </Modal>
  );
};

export default ModalUpImage;
