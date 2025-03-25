import { routes } from '../../routes/index.jsx';
import { useRoutes } from 'react-router-dom';

function AllRoute() {
    const elements = useRoutes(routes);
    return <>{elements}</>;
}

export default AllRoute;
