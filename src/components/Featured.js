import React from 'react';
import '../assets/css/featured.css'

export default function Featured(){
    return(
        <div className="featured-item">
            <h3>FEATURED ITEM</h3>
            <div className='featured-item--container'>
                <div className="featured-item--description">
                    <h5>New Season</h5>
                    <p className='item-name'>adidas YEEZY</p>
                    <p>Also nicknamed "Sand" sneakers<br/>
                    It doesn't get more futuristic than the RNNR "Sand" sneakers from 
                    adidas YEEZY. Crafted from EVA foam and harvested algae, this pair is 
                    ultra lightweight and one of the market's most progressive step out in 
                    unique style.

                    <br/><br/>
                    Originally made of rubber, with a perforated design, almond toe and 
                    slip on style. These...<a href='#' className='featured--readmore'>Read more</a>
                    </p>

                    <p className='featured-item-price'>PRICE: <span>$451.00</span></p>
                    <Button 
                        class='feature-buy'
                        text = 'BUY NOW'
                    />
                <Button 
                        class='feature-cart'
                        text = 'ADD TO CART'
                    />
                </div>
                <div className='featured-item--image'>
                    <img src='https://images.unsplash.com/photo-1601790656359-bb3b8e1937f2?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500' 
                        alt='Featured image' 
                        id='featureImage' 
                        height='95%' />
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

function Button(props){
    return(
        <button className={'featured-item--button ' + props.class}>{props.text}</button>
    )
}