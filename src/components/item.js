import React, { useState } from "react";

export default function Item(props) {
  const [showTitle, setShowTitle] = useState(true);
  const [showBoxes, setShowBoxes] = useState(false);

  const handleMouseEnter = () => {
    setShowTitle(false);
    setShowBoxes(true);
  };

  const handleMouseLeave = () => {
    setShowTitle(true);
    setShowBoxes(false);
  };

  return (
    <div className="shoe-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={`../Shoes_Images/${props.shoes.imageUrl}`} alt="" className="shoe-image" />
      {showTitle && <h1>{props.shoes.Title}</h1>}
      {showBoxes && (
        <div className="shoe-color-boxes">
          <div style={{ backgroundColor: props.shoes.colors }}>color1</div>
          <div style={{ backgroundColor: "red" }}>color2</div>
        </div>
      )}
      <p>{props.shoes.Catagory}</p>
      <p>{props.shoes.Colors}</p>
      <h3>{props.shoes.Price}</h3>
    </div>
  );
}
