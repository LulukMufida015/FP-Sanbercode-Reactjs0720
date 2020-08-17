import React from 'react';
import { Link, Router, Route } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'antd';
import { YoutubeOutlined, AimOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Routes from './router'

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

const Nav = () => {
    return (
        <>
            <Layout>
                <Header className="header">
                    <Menu style={{ float: 'right' }} theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/login">Login</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/Register">Register</Link></Menu.Item>
                    </Menu>
                </Header>
                <Layout>
                    <Sider width={170} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub2']}
                            style={{ height: '100%', borderRight: 0 }}
                        >
                            <SubMenu key="sub1" icon={<YoutubeOutlined />} title="MOVIE">
                                <Menu.Item key="1"><Link to="/reviewListMovie">Movie Review</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/tableMovie">Movie Table</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/createMovie">Movie Create</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<AimOutlined />} title="GAME">
                                <Menu.Item key="4"><Link to="/reviewListGame">Game Review</Link></Menu.Item>
                                <Menu.Item key="5"><Link to="/tableGame">Game Table</Link></Menu.Item>
                                <Menu.Item key="6"><Link to="/createGame">Game Create</Link></Menu.Item>
                                <Menu.Item key="7"></Menu.Item>
                                <Menu.Item key="8"></Menu.Item>
                                <Menu.Item key="9"></Menu.Item>
                                <Menu.Item key="10"></Menu.Item>
                                <Menu.Item key="11"></Menu.Item>
                                <Menu.Item key="12"></Menu.Item>
                                <Menu.Item key="13"></Menu.Item>
                                <Menu.Item key="14"></Menu.Item>
                                <Menu.Item key="15"></Menu.Item>

                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
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
                            <Routes />
                        </Content>
                    </Layout>
                </Layout>
                <Layout>
                    <Footer style={{ background: "black", textAlign: "center", fontWeight: "bolder", color: "white" }} >Final Project SanberCode 2020</Footer>
                </Layout>
            </Layout>
        </>
    )
}

export default Nav
