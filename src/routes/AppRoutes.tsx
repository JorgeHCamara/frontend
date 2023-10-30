import { Routes, Route } from 'react-router-dom';
import ProductList from '../components/ProductList';

const AppRoutes: React.FC = () => {

    return(
        <Routes>
            <Route path='/' element={<ProductList />}></Route>
        </Routes>
    )
}

export default AppRoutes;