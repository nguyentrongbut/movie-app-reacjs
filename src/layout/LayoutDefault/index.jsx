import { Outlet } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import HeaderDefault from '../HeaderDefault/index.jsx';
import SiderCustom from '../Sider/index.jsx';

const { Content } = Layout;

const LayoutDefault = () => {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Layout: {
                        siderBg: "rgb(22, 22, 26)",
                        triggerBg: "rgb(22, 22, 26)",
                    },
                },
                token : {
                    fontSize: 16
                }
            }}
        >
            <Layout>
                <SiderCustom></SiderCustom>
                <Layout>
                    <HeaderDefault></HeaderDefault>
                    <Content style={{height: 1000}}>
                        <Outlet></Outlet>
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    );
};

export default LayoutDefault;
