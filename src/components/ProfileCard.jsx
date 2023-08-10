import React from "react";

const ProfileCard = ({ data }) => {
  return (
    <div className='flexFirst'>
      {data.map((item) => (
        <div className='cardProfile'>
          <img src={item.img} alt='' />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
