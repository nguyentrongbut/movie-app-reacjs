import { Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import HeaderDefault from '../HeaderDefault/index.jsx';
const { Content, Sider } = Layout;

const LayoutDefault = () => {
    return (
        <Layout className="layout">
            <Sider>
                <Menu
                    theme="dark"
                    className="sider"
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
                <HeaderDefault></HeaderDefault>
                <Content>
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
};

export default LayoutDefault;
