import React, { Fragment } from "react";
import { Input, Form, Button } from "antd";

const { TextArea } = Input;

const Resume = ({ phases, onFinish, onFinishFailed }) => {
  const [form] = Form.useForm();

  // const onChange = (e) => {
  //   setContent({ ...content, [e.target.name]: e.target.value });
  // };
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
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Titulo"
          name="title"
          rules={[
            {
              required: true,
              message: "Escribe un titulo para tu post",
            },
          ]}
        >
          <Input
            placeholder="Elige un titulo para tu post"
            allowClear
            bordered={false}
          />
        </Form.Item>
        <Form.Item label="Subtitulo" name="subtitle">
          <Input
            placeholder="Puedes agregar un subtitulo"
            allowClear
            bordered={false}
          />
        </Form.Item>

        <Form.Item
          label="Resumen"
          name="resume"
          rules={[
            {
              required: true,
              message: "Escribe un resumen de tu post",
            },
          ]}
        >
          <TextArea
            placeholder="Agrega un resumen a tu post. Atrae a tus lectores con un resumen deslumbrante"
            allowClear
            autoSize={{ minRows: 2, maxRows: 6 }}
            bordered={false}
          />
        </Form.Item>
        {!phases.step_1 && (
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Crear post
            </Button>
          </Form.Item>
        )}
      </Form>
    </Fragment>
  );
};

export default Resume;
