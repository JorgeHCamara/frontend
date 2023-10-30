import { Routes, Route } from 'react-router-dom';
import ProductList from '../components/ProductList/ProductList';
import AddProduct from '../components/AddProduct/AddProduct';

const AppRoutes = () => {

    return(
        <Routes>
            <Route path='/' element={<ProductList />}></Route>
            <Route path='/add-product' element={<AddProduct />}></Route>
        </Routes>
    )
}

export default AppRoutes;