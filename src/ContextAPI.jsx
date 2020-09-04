import React, { Component } from 'react';


const CartContext = React.createContext();

class CartProvider extends Component{
    state = {
        product: Menu,
        Cart : [],
        CartSubTotal : 0
    }
    getItem =(id) => {
        const product = this.state.product.find(item => item.id === id);
        return product;
    }

    addToCart = (id) =>{
        let temp = [...this.state.products];
        const index = temp.indexOf(this.getItem(id));
        const product = temp[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(() => {
            return {products: temp.product, Cart: [...this.state.Cart, product]}
        })
    }

    removeItem = (id) =>{
        let temp = [...this.state.products];
        let tempCart = [...this.state.Cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const index = temp.indexOf(this.getItem(id));

        let removeProduct = temp[index];
        removeProduct.inCart = false;
        removeProduct.total = 0;
        removeProduct.count = 0;

        this.setState(()=>{
            return{
                Cart: [...tempCart],
                product: [...temp]
            }
        }, () =>{
            return this.makeTotal();
        })
    } 
    makeTotal = () =>{
        let subTotal = 0;
        this.state.Cart.map(item => (subTotal += item.total));
        const total = subTotal;
        this.setState(()=>{
            return {CartSubTotal : total}
        })
    }
        render(){
            return(
                <CartContext.Provider value={{
                    ...this.state,
                    addToCart: this.addToCart,
                    makeTotal: this.makeTotal
                }}>
                    {this.props.children}
                </CartContext.Provider>
            )
        }

}

const ProductConsumer = CartContext.Consumer;

export {ProductConsumer, CartProvider};