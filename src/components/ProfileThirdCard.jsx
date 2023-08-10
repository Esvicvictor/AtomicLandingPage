const ProfileThirdCard = ({ data }) => {
    return (
      <div className="flexThird">
        {data.map((item) => (
          <div className='cardProfileThird'>
            <img src={item.img} alt="" />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProfileThirdCard