import React from 'react'
import { NavLink } from 'react-router-dom';
import { Layout, Menu, } from 'antd';
import {
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    PlusOutlined,
    UnorderedListOutlined,
    DollarOutlined,
    StarOutlined,
} from '@ant-design/icons';



const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderWebsite = () => {
    return (
        <>
            <Sider>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <SubMenu title="Products" icon={<DollarOutlined />}>
                        <Menu.Item key="1" icon={<UnorderedListOutlined />}>
                            <NavLink to="/admin/product">List Product</NavLink>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<PlusOutlined />}>
                            <NavLink to="/admin/product/add">Add Product</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu title="Category" icon={<StarOutlined />}>
                        <Menu.Item key="3" icon={<UnorderedListOutlined />}>
                            <NavLink to="/admin/category">List Category</NavLink>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<PlusOutlined />}>
                            <NavLink to="/admin/category/add">Add Category</NavLink>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                        <Menu.Item key="5">Tom</Menu.Item>
                        <Menu.Item key="6">Bill</Menu.Item>
                        <Menu.Item key="7">Alex</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                        <Menu.Item key="8">Team 1</Menu.Item>
                        <Menu.Item key="9">Team 2</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="10" icon={<FileOutlined />}>
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
        </>
    )
}

export default SiderWebsite
