import React, {useContext, useEffect} from 'react'
import {Context} from "../Context"
import "../assets/css/cart.css"
import CartItem from '../components/CartItem'

function Cart(){

    const {cart} = useContext(Context)

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

    return(
        <div className='cart-wrapper'>
            <div className='cart-list'>
                <h4 className='order-summary-title'>My Cart</h4>
                <hr/>
                {/* <div> */}
                    <div className='cart-header-wrapper'>
                        <div className='cart-product-detail'>Product Detail</div>
                        <div className='cart-quantity'>Quantity</div>
                        <div className='cart-price'>Price</div>
                        <div className='cart-total'>Total</div>
                    </div>
                    {/* <div className='cart-body-wrapper'> */}
                        {cartlist}
                    {/* </div>   */}
                {/* </div> */}
            </div>
            <div className='order-summary'>
                <h4 className='order-summary-title'>Order Summary</h4>
                <hr/>
                <div className='item-count'>
                    <span>ITEMS {cart.length}</span>
                    <span>₦{}</span>
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
                    <span>₦{}</span>
                </div>
                <button className='checkout'>CHECKOUT</button>
            </div>
        </div>
    )
}

export default Cart