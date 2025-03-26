import { Col, ConfigProvider, Input, Layout, Row, Tooltip } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { CATEGORYSFILTER } from '../../libs/constants.jsx';
import { useEffect, useState } from 'react';

const { Search } = Input;

const { Header } = Layout;
const HeaderDefault = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        activeBg: 'transparent',
                        activeBorderColor: 'transparent',
                        hoverBorderColor: 'none',
                    },
                    Button: {
                        defaultHoverColor: 'none'
                    },
                    Tooltip: {
                        borderRadius: 8
                    }
                },
                token : {
                    colorBorder: 'none',
                    borderRadius: 100,
                    colorBgContainer: 'rgba(255, 255, 255, .08)',
                    colorPrimaryHover: 'none',
                    lineWidth: 0,
                }
            }}
        >
            <Header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
                <div className="header__right">
                    <Search
                        placeholder="Nhập tên phim để tìm kiếm..."
                        className="search"
                    ></Search>
                    <Tooltip
                        classNames={{ root: 'tooltip-header' }}
                        title={
                            <div>
                                <div className="tooltip-header__title">
                                    Lọc theo danh mục
                                </div>
                                <div className="tooltip-header__list">
                                    <Row>
                                        {CATEGORYSFILTER.map((category) => (
                                            <Col key={category.name} span={8}>
                                                <Link
                                                    to={category.href}
                                                    className="tooltip-header__item"
                                                >
                                                    {category.name}
                                                </Link>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                                <Link to="/phim-bo" className="btn__dark">
                                    Nhiều bộ lọc chi tiết hơn
                                </Link>
                            </div>
                        }
                    >
                        <Link to="/" className="btn__opacity">
                            <FilterOutlined />
                            <span className="btn__opacity--title">Bộ lọc</span>
                        </Link>
                    </Tooltip>
                </div>
            </Header>
        </ConfigProvider>
    );
};

export default HeaderDefault;
