// Card.jsx
import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div className='propsContainer'>
      <div className="propsBox">
        <img src={img} alt='icons8 icons' className='w-[40px]' />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
