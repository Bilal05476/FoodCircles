import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import Navbar from './Navbar';
import Footer from './Footer';
import Checkout from './Checkout';
import Cart from './Cart';
import { Switch , Route, Redirect} from 'react-router-dom';
import CartProvider from './CartContext';

const App = () => {
  return (
    <>
      <CartProvider>
      <Navbar />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/menu' component={Menu} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/checkout' component={Checkout} />
          <Redirect to='/' />
          <Home />
      </Switch>
      <Footer />
      </CartProvider>
    </>
  );
}

export default App;
