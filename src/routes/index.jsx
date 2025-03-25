import LayoutDefault from '../layout/LayoutDefault/index.jsx';
import Home from '../pages/Home/index.jsx';
import Genre from '../pages/Genre/index.jsx';
import Country from '../pages/Country/index.jsx';
import Detail from '../pages/Detail/index.jsx';
import Catalog from '../pages/Catalog/index.jsx';

export const routes = [
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                path: '/',
                element: <Home />,
            },

            // Genre and country
            {
                path: '/the-loai/:slug',
                element: <Genre />,
            },
            {
                path: '/quoc-gia/:slug',
                element: <Country />,
            },

            // detail
            {
                path: '/phim/:slug',
                element: <Detail />,
            },

            // other
            {
                path: '/:slug',
                element: <Catalog />,
            },
        ],
    },
];
