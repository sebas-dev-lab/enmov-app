import React, { Fragment } from "react";
import { Input, Form } from "antd";

const { TextArea } = Input;

const Resume = ({ content, setContent }) => {
  const onChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      <Form
        name="basic"
        labelCol={{
          span: 3,
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
        <Form.Item label="Titulo" valuePropName="title" required={true}>
          <Input
            name="title"
            placeholder="Elige un titulo para tu post"
            allowClear
            onChange={onChange}
            bordered={false}
          />
        </Form.Item>
        <Form.Item label="Subtitulo" valuePropName="subtitle">
          <Input
            name="subtitle"
            placeholder="Puedes agregar un subtitulo"
            allowClear
            onChange={onChange}
            bordered={false}
          />
        </Form.Item>

        <Form.Item label="Resumen" valuePropName="resume" required={true}>
          <TextArea
            name="resume"
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
