import React, {useContext} from 'react';
import { CartContext } from './CartContext';
import {NavLink} from 'react-router-dom';
// import CData from './CData';
import Card2 from './Card2';

const Cart =() => {
  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);
  
    return (
      <><br />
        <div className='cart container'>
          <h3 className="text-center">Cart</h3><hr />
          <div className="text-right">Items : {cart.length} <br /> Price: {totalPrice}</div></div>
          { cart.length === 0 ? <div className='text-center'>Your Cart is <strong>EMPTY :(</strong></div> :
          <>
          <div className="container mb-5">
            <div className="col-12 mx-auto">
              <div className="row">
                {
                  cart.map((val, ind) =>{
                    return <Card2 key={val.id}
                    id={val.id}
                    price={val.price}
                    imgsrc ={val.imgsrc}
                    title={val.title}
                    />
                  })
                }
              </div>
            </div>
          </div>
          <br />
          <div className='text-center'>
          <NavLink className='btn btn-outline-primary' to='/checkout'>Checkout</NavLink>
          </div>
          </>
          }
      <br />
      </>
    );
  
}
export default Cart;