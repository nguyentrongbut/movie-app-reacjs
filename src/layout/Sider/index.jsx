import { useState } from 'react';
import { ConfigProvider, Layout, Menu } from 'antd';
import { SIDERMENU } from '../../libs/constants.jsx';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const SiderCustom = () => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        darkItemBg: 'rgb(22, 22, 26)',
                        darkSubMenuItemBg: 'rgb(22, 22, 26)',
                        darkPopupBg: 'rgb(22, 22, 26)',
                        darkItemSelectedBg: "transparent",
                        collapsedIconSize: 18,
                        itemBorderRadius: 0,
                    }
                },
                token : {

                }
            }}
        >
            <Sider
                className={`${collapsed ? 'pr-16' : ""}`}
                collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}
            >
                <div className="sider">
                    <Link to="/" className="sider__logo">
                        <img
                            src="images/logo.png"
                            alt="fztruyen"
                            width="40px"
                            height="40px"
                        />
                    </Link>
                    <div className="sider__list">
                        <Menu
                            className="sider__menu"
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['menu-home']}
                            items={SIDERMENU}
                        ></Menu>
                    </div>
                </div>
            </Sider>
        </ConfigProvider>
    )
}

export default SiderCustom;