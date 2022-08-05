import React from "react";

const ProductCard = ({ menuData }) => {
    
  return (
    <>
    <div className='cards'>
    {menuData.map((curElem) => {
          const { id, name, category, image, description , price } = curElem;

          return (
            <>
  <div className='card' key={id}>
    <div className='card-hero'>
      <img src={image} width="300" height="300" alt=""/>
    </div>
    <div className='card-header'>
      <h3> {name}</h3>
    </div>
    <div className='card-body'>
      <span> {description}</span>
    </div>
    <div className='card-footer'>
      <div className='footer-item'>
        <img src={image} class="avatar" width="32" height="32" alt="" />
      </div>
      <div className='footer-item'>
        <strong>{category}</strong>
        <span className='muted'>{price}</span>
      </div>
    </div>
  </div>
  </>
          );
        })}
  </div>
    
    </>
  );
};
    export default ProductCard;