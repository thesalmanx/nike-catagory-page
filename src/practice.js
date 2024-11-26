import React from "react"
import image from "../Shoes_Images/1back.webp"

function showColors(){
    
}

export default function Item(props){
    return (
        <div className="shoe-card" onmouseover="showColors">
            <img src={image} alt="" className="shoe-image"/>
            <h1>{props.shoes.Title}</h1>
            <p>{props.shoes.Catagory}</p>
            <p>{props.shoes.Colors}</p>
            <h3>{props.shoes.Price}</h3>
        </div>
    )
}



  