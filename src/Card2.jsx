import React, {useContext} from 'react';
import { FaPrescriptionBottleAlt } from "react-icons/fa";
import {CartContext} from './CartContext';

const Card2 = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const removeCart = (id) => {
    setCart(cart.filter(menu => menu.id !== id));
  };
  return (
    <>
        <div className="card-deck mx-auto col-md-4">
          <div className="card">
              <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} 
              value={props.imgsrc}/>
              <div className="card-body">
              <h5 className="card-title"> {props.title}
              </h5> <h5 value={props.price}>RS{props.price}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button className='btn btn-outline-danger' onClick={()=> removeCart(cart.id) }>
              <FaPrescriptionBottleAlt /> Remove </button>
              </div>
          </div>
        </div>
    </>
  );
}

export default Card2;