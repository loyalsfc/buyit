import React from "react";
import '../assets/css/categories.css';

export default function Categories(){
    return(
        <div className="categories">
            <h3 className="reason-title">CATEGORIES</h3>
            <div className="categories--wrapper">
                <Category 
                    imageLink='https://images.unsplash.com/photo-1601790656359-bb3b8e1937f2?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500'
                    name='WOMEN SNEAKER'
                />
                <Category 
                    imageLink='https://images.unsplash.com/photo-1521093470119-a3acdc43374a?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500'
                    name='MEN SNEAKER'
                />
                <Category 
                    imageLink='https://images.unsplash.com/photo-1580902215245-bd46881c72c5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435'
                    name='BEST SELLERS'
                />
                <Category 
                    imageLink='https://images.unsplash.com/photo-1581954724853-cc3b905f5493?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435'
                    name='NEW ARRIVAL'
                />
            </div>
        </div>
    )   
}
function Category(props){
    return(
        <div className="category">
            <img 
                src={props.imageLink} 
                alt='Category' 
                className="categoryImage"
            />
            <div className="categoryName">{props.name}</div>
        </div>
    )
}