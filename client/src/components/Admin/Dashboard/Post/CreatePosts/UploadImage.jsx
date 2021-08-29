import React from "react";
import { Form, Button, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const formItemLayout = {
  labelCol: {
    span: 3,
  },
  wrapperCol: {
    span: 14,
  },
};

const normFile = (e) => {
  console.log("Upload event:", e);

  if (Array.isArray(e)) {
    return e;
  }

  return e && e.fileList;
};

const UploadImage = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
      initialValues={{
        "input-number": 3,
        "checkbox-group": ["A", "B"],
        rate: 3.5,
      }}
    >
      <Form.Item
        name="image"
        label="Portada"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra=""
        required={true}
      >
        <Upload name="portada" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Subir imagen</Button>
        </Upload>
      </Form.Item>
    </Form>
  );
};

export default UploadImage;
