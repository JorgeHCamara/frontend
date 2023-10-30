import { Link } from "react-router-dom";
import './Menu.css'

const Menu = () => {

    return(
        <nav className="menuStyle">
            <ul className="menuItems">
                <li className="menuItem">
                    <Link to='/products-list' className='menuLink'>Products</Link>
                </li>
                {/* <li>
                    <Link to='/add-product'>Add new product</Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Menu;