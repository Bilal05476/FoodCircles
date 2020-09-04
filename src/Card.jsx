import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from './CartContext';
//import { v4 as uuidv4 } from 'uuid';

const Card = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const addCart = () => {
    const menu = {title: props.title, price: props.price, imgsrc: props.imgsrc};
    setCart(current => [...current, menu]);
}
console.log(cart)
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
              <button className="btn btn-outline-dark" onClick={addCart} >
              <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
              </div>
          </div>
        </div>
    </>
  );
}

export default Card;