import { Outlet } from 'react-router-dom';

const LayoutDefault = () => {
    return (
        <>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default LayoutDefault;
