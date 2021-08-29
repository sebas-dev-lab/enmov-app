import React, { Fragment } from "react";
import { Input, Form } from "antd";

const { TextArea } = Input;

const Resume = () => {
  const onChange = (e) => {
    console.log(e);
  };
  return (
    <Fragment>
      <Form
        name="basic"
        labelCol={{
          span:3,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="title"
          label="Titulo"
          valuePropName="title"
          required={true}
        >
          <Input
            placeholder="Elige un titulo para tu post"
            allowClear
            onChange={onChange}
            bordered={false}
          />
        </Form.Item>
        <Form.Item name="subtitle" label="Subtitulo" valuePropName="subtitle">
          <Input
            placeholder="Puedes agregar un subtitulo"
            allowClear
            onChange={onChange}
            bordered={false}
          />
        </Form.Item>

        <Form.Item
          name="resume"
          label="Resumen"
          valuePropName="resume"
          required={true}
        >
          <TextArea
            placeholder="Agrega un resumen a tu post. Atrae a tus lectores con un resumen deslumbrante"
            allowClear
            onChange={onChange}
            autoSize={{ minRows: 2, maxRows: 6 }}
            bordered={false}
          />
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default Resume;
