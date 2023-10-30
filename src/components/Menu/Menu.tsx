import { Link } from "react-router-dom";
import './Menu.css'

const Menu = () => {

    return(
        <nav className="menuStyle">
            <ul className="menuItems">
                <li className="menuItem">
                    <Link to='/' className='menuLink'>Products</Link>
                </li>
                <li className="menuItem">
                    <Link to='/add-product' className='menuLink'>Add new product</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;