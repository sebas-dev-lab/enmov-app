import React from "react";
import { Layout } from "antd";
import { Form, Input, Button, Select } from "antd";

const { Content } = Layout;

const LoginAdmin = ({ onFinish, onFinishFailed }) => {
  const [form] = Form.useForm();

  const { Option } = Select;

  
  const onRoleChange = (value) => {
    switch (value) {
      case "admin":
        form.setFieldsValue({
          note: "Administrador",
        });
        return;

      case "moderator":
        form.setFieldsValue({
          note: "Moderador",
        });
        return;
      default:
        break;
    }
  };

  return (
    <Layout className="layout">
      <Content style={{ padding: "20px 100px", backgroundColor: "white" }}>
        <div className="site-layout-content">
          <Form
            name="basic"
            labelCol={{
              span: 8,
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
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Por favor introduce tu email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Introduce tu clave de seguridad",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="rol"
              label="Rol de usuario"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Selecciona el rol"
                onChange={onRoleChange}
                allowClear
              >
                <Option value="moderator">Moderador</Option>
                <Option value="admin">Administrador</Option>
              </Select>
            </Form.Item>

          
            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Ingresar
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    </Layout>
  );
};

export default LoginAdmin;
