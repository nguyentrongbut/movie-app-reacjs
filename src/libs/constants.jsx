import {
    AppstoreOutlined, ClockCircleOutlined,
    DesktopOutlined, GlobalOutlined,
    HomeOutlined,
    PlayCircleOutlined,
    SmileOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const CATEGORYSFILTER = [
    {
        name: "Phim bộ",
        href: '/phim-bo'
    },
    {
        name: "Phim lẻ",
        href: '/phim-le'
    },
    {
        name: "TV shows",
        href: '/tv-shows'
    },
    {
        name: "Hoạt hình",
        href: '/hoat-hinh'
    },
    {
        name: "Sắp chiếu",
        href: '/sap-chieu'
    },
]

export const SIDERMENU = [
    {
        key: 'menu-home',
        icon: <HomeOutlined />,
        label: <Link to="/">Trang chủ</Link>,
    },
    {
        key: 'menu-series',
        icon: <VideoCameraOutlined />,
        label: <Link to="/phim-bo">Phim bộ</Link>,
    },
    {
        key: 'menu-movie',
        icon: <PlayCircleOutlined />,
        label: <Link to="/phim-le">Phim lẻ</Link>,
    },
    {
        key: 'menu-tvshows',
        icon: <DesktopOutlined />,
        label: <Link to="/tv-show">TV shows</Link>,
    },
    {
        key: 'menu-animation',
        icon: <SmileOutlined />,
        label: <Link to="/hoat-hinh">Hoạt hình</Link>,
    },
    {
        key: 'menu-category',
        icon: <AppstoreOutlined />,
        label: 'Thể loại',
        children: [
            {
                key: 'category-action',
                label: <Link to="/the-loai/hanh-dong">Hành Động</Link>,
            },
            {
                key: 'category-romance',
                label: <Link to="/the-loai/tinh-cam">Tình Cảm</Link>,
            }
        ],
    },
    {
        key: 'menu-country',
        icon: <GlobalOutlined />,
        label: 'Quốc gia',
        children: [
            {
                key: 'country-cn',
                label: <Link to="/quoc-gia/trung-quoc">Trung Quốc</Link>,
            },
            {
                key: 'country-kr',
                label: <Link to="/quoc-gia/han-quoc">Hàn Quốc</Link>,
            },
        ],
    },
    {
        key: 'menu-upcoming',
        icon: <ClockCircleOutlined />,
        label: <Link to="/sap-chieu">Sắp chiếu</Link>,
    },
];