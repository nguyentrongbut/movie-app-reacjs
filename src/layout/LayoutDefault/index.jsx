import { Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import "./LayoutDefault.scss"
const { Header, Content, Sider } = Layout;

const LayoutDefault = () => {
    return (
        <Layout>
            <Sider>
                <Menu
                    theme="dark"
                    className="menu"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',

                            label: 'nav 1',
                        },
                        {
                            key: '2',

                            label: 'nav 2',
                        },
                        {
                            key: '3',

                            label: 'nav 3',
                        },
                    ]}
                ></Menu>
            </Sider>
            <Layout>
                <Header className="custom-header"></Header>
                <Content>
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutDefault;
