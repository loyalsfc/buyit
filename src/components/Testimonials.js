import React from "react";
import '../assets/css/testimony.css'

export default function Testimonials(){
    return(
        <div className="testimonials-container">
            <h3 className="reason-title">TESTIMONIALS</h3>
            <div className="testimonials">
                <Testimony
                    image = 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500'
                    name = 'Hannah Blaze'
                    countryFlag = 'https://media.istockphoto.com/photos/highly-detailed-flag-of-uganda-uganda-flag-high-detail-national-flag-picture-id1309832299?b=1&k=20&m=1309832299&s=170667a&w=0&h=HcjmZVXGTb6dAfFXflQrmzIdUoYMXGfTTn15xFlkXV4='
                    countryName = 'Uganda'
                    note = 'I really love the sneakers I got from this store, very long lasting and pretty inexpensive.'
                />
                <Testimony
                    image = 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500'
                    name = 'Olumide'
                    countryFlag = 'https://media.istockphoto.com/vectors/nigeria-flag-with-waving-effect-official-proportion-vector-id1275813756?k=20&m=1275813756&s=612x612&w=0&h=UiJzBJoY67TRXuk3eJU6ThaourrKrLg0o9ybpmWAfdE='
                    countryName = 'Nigeria'
                    note = 'They deliver expressly, got my sneakers the same day I placed an order. Also love how original the product is.'
                />
                <Testimony
                    image = 'https://images.unsplash.com/photo-1521119989659-a83eee488004?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500'
                    name = 'Nana Brenim'
                    countryFlag = 'https://media.istockphoto.com/photos/ghana-flag-picture-id471793389?b=1&k=20&m=471793389&s=170667a&w=0&h=FwOrTLiNJX3GAnb80fr2M3tMchQ8KRhxHMkQxpDoCWY='
                    countryName = 'Ghana'
                    note = 'This is my go to plug for all things sneakers cause their customer service is top notch.'
                />
            </div>
        </div>
    )
}

function Testimony(props){
    return(
        <div className="testimony-wrapper">
            <div className="testimony-header">
                <div className="testimony-picture--wrapper">
                    <img 
                        className="testimony-picture" 
                        alt="testimony"
                        src={props.image}
                        width='50px'
                    />
                </div>
                <div>
                    <p className="testimony-name">{props.name}</p>
                    <div className="testimony-Country">
                        <img 
                            className="testimony-countryFlag" 
                            alt="testimony"
                            src={props.countryFlag}
                            width='20px'
                        />
                        <span className="testimony-countryName">{props.countryName}</span>
                    </div>
                </div>
            </div>
            <p className="testimony-note">{props.note}</p>
        </div>
    )
}