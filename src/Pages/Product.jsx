import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import ProfileSecondCard from "../components/ProfileSecondCard";
import ProfileThirdCard from "../components/ProfileThirdCard";
import CardData from "../assets/CardData";
import ProfileSecondData from "../assets/ProfileSecondData";
import ProfileThirdData from "../assets/ProfileThirdData";


export default function Product() {
  const [active, setActive] = useState("FirstCard");
  return (
    <div className='navBarSection'>
      <div className="courses">
        <h1>OUR COURSES</h1>
        <p>
          Unlock your potential with our cutting-edge courses. From coding to
          AI, our expert-led programs ensure hands-on learning and real-world
          skills. Take the first step towards a powered future today!
        </p>
      </div>

      <div className='bg-green-950 text-white py-2'>
        <ul className='flex lg:flex-row justify-between items-center productHover'>
          <button onClick={() => setActive("FirstCard")}>CODING COURSES</button>
          <button onClick={() => setActive("SecondCard")}>
            NON-CODING COURSES
          </button>
          <button onClick={() => setActive("ThirdCard")}>
            UTILITY COURSES
          </button>
        </ul>
      </div>

      <div>
        {active === "FirstCard" && <ProfileCard data={CardData } />}
        {active === "SecondCard" && (
          <ProfileSecondCard data={ProfileSecondData} />
        )}
        {active === "ThirdCard" && <ProfileThirdCard data={ProfileThirdData} />}
      </div>
    </div>
  );
}
