import React, {useContext, useState} from 'react';
import { CartContext } from './CartContext';
import visa from '../src/images/visa.png';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

const Checkout =() =>  { 
  const [cart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);
  const [number , setNumber] = useState('');
  const [name , setName] = useState('');
  const [cvc , setCvc] = useState(''); 
  const [expiry , setExpiry] = useState(''); 
  const [focus , setFocus] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank You");
  }

    return (
      <>
      <br />
        <div className='cart container'>
            <h3 className="text-center">Checkout</h3><hr />
            <div className="text-right">Items : {cart.length}</div>
            <Cards 
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}/>
            <form onSubmit={handleSubmit}>
                <div className='row'>
                  <div className="form-group">
                    <input className="form-control" required 
                    type='tel'
                    name='number'
                    placeholder="Card Number"
                    value={number}
                    onChange={e=>setNumber(e.target.value)}
                    onFocus={e=>setFocus(e.target.name)}
                    />
                  </div>
                </div>
                <div className='row'>
                  <div className="form-group">
                    <input type="text" className="form-control" required
                    name='name' 
                    placeholder="Card Holder Name"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    onFocus={e=>setFocus(e.target.name)} 
                    />
                  </div>
                </div>

                <div className='row'>
                  <div className="form-group">
                    <input type="text" className="form-control" required
                    name='expiry' 
                    value={expiry}
                    placeholder="MM/YY" 
                    onChange={e=>setExpiry(e.target.value)}
                    onFocus={e=>setFocus(e.target.name)}  
                    />
                  </div>
                  <div className="form-group">
                    <input type="tel" className="form-control" required 
                    placeholder="CVV"
                    value={cvc}
                    name='cvc'
                    onChange={e=>setCvc(e.target.value)}
                    onFocus={e=>setFocus(e.target.name)} 
                    />
                  </div>
                </div>
                <div className="row">
                  <button type="send" className="btn btn-outline-success ">Pay RS {totalPrice}</button>&nbsp;<img className="visa" src={visa} alt="visa-img" />
                </div>
                
                </form>
        </div><br />
      </>
    );
  
}

export default Checkout;