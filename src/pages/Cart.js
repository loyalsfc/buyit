import React, {useContext, useEffect, useState} from 'react'
import {Context} from "../Context"
import "../assets/css/cart.css"
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

function Cart(){

    const {cart} = useContext(Context)
    const [totalCost, setTotalCost] = useState(0)
    let cartlist = cart.map(product => {
        return (
            <CartItem
                key={product.id} 
                img={product.image}
                title={product.title}
                id={product.id}
                price={product.price} 
            />
        )
    })

    useEffect(()=>{
        setTotalCost(getTotalCost())
    }, [cart])

    function getTotalCost(){
        let costs = 0

        cart.forEach(element => {
            costs += element.price
        });
        return costs
    }

    return(
        <div className='cart-wrapper'>
            <div className='cart-list'>
                <h4 className='order-summary-title'>My Cart</h4>
                <hr/>
                    <div className='cart-header-wrapper'>
                        <div className='cart-product-detail'>Product Detail</div>
                        <div className='cart-quantity'>Quantity</div>
                        <div className='cart-price'>Price</div>
                        <div className='cart-total'>Total</div>
                    </div>
                    {cart.length ? cartlist : <div className='empty-cart'><i>Shopping Cart is empty</i></div>}
                    <Link to="/products">
                        <span className='continue-shopping'><i className="fa-solid fa-arrow-left-long"></i> Continue Shopping</span>
                    </Link>
            </div>
            <div className='order-summary'>
                <h4 className='order-summary-title'>Order Summary</h4>
                <hr/>
                <div className='item-count'>
                    <span>ITEMS {cart.length}</span>
                    <span>₦{totalCost}</span>
                </div>
                <div className='shipping'>
                    <p>DELIVERY METHOD</p>
                    <select id='shipping-method'>
                        <option value="pick-up">Store Pickup</option>
                        <option value="door-to-door">Door to Door</option>
                    </select>
                </div>
                <div className='shipping'>
                    <p>Got a Voucher? Use it below</p>
                    <input type="text" name="coupon" id='coupon'  placeholder="Enter Voucher"/>
                </div>
                <button className='apply-button'>APPLY</button>
                <hr/>
                <div className='item-count'>
                    <span>TOTAL COST</span>
                    <span>₦{totalCost}</span>
                </div>
                <button className='checkout'>CHECKOUT</button>
            </div>
        </div>
    )
}

export default Cart