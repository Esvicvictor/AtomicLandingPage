const ProfileSecondCard = ({ data }) => {
    return (
      <div className="flexSecond">
        {data.map((item) => (
          <div className='cardProfileSecond'>
            <img src={item.img} alt="" />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProfileSecondCard