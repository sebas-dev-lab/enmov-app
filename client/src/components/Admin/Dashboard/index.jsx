import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  EditOutlined,
  DotChartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

const DashboardAdmin = () => {
  return (
    <Layout className="layout-adminDash">
      <Layout>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<EditOutlined />} title="Post">
                <Menu.Item key="1">Crear nuevo post</Menu.Item>
                <Menu.Item key="2">Mis Posts</Menu.Item>
                <Menu.Item key="3">Comentrios</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<DotChartOutlined />} title="Usuarios">
                <Menu.Item key="5">Usuarios</Menu.Item>
                <Menu.Item key="6">Preguntas</Menu.Item>
                <Menu.Item key="7">Soporte</Menu.Item>
                <Menu.Item key="8">Estadistica</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<UserOutlined />} title="Mi cuenta">
                <Menu.Item key="9">Mis datos</Menu.Item>
                <Menu.Item key="10">Seguridad</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardAdmin;
