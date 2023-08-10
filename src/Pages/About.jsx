import React from "react";
import Card from "../components/Card";
import data from "../assets/data";

const About = () => {
  return (
    <div className='card'>
      {data.map((item, index) => (
        <Card
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
          bg={item.bg}
        />
      ))}
    </div>
  );
};

export default About;
