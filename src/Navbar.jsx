import React, {useContext} from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';

const Navbar = () => {
    const [cart] = useContext(CartContext);

    return (
        <>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <div className="container mx-auto">
            <NavLink className="navbar-brand" to="/">FoodCircles</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active"
                        className="nav-link if_hover" to="/" exact >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active"
                        className="nav-link if_hover" to="/menu" exact>Menu</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" 
                        className="nav-link if_hover" to="/about" exact>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" 
                        className="nav-link if_hover" to="/contact" exact>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="menu_active" 
                        className="nav-link if_hover" to="/cart" exact> 
                            <FontAwesomeIcon icon={faShoppingCart} /> Cart
                            <span>{cart.length}</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        </>
    );
}
export default Navbar;