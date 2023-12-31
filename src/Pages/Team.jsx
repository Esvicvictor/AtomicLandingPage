import React, { useState } from "react";
// import TeamCard from "../components/TeamCard";
import TeamData from "../assets/TeamData";
import { BiSolidSkipPreviousCircle  } from 'react-icons/bi';
import {MdNextPlan} from 'react-icons/md'

const Team = () => {
  const [teamDisplay, setTeamDisplay] = useState(TeamData);
  const [index, setIndex] = useState(0);
  const [profileCard, setProfileCard] = useState({
    img: teamDisplay[index].img,
    name: teamDisplay[index].name,
    title: teamDisplay[index].title,
    about: teamDisplay[index].about,
  });

  const updateProfileCard = (newIndex) => {
    setProfileCard({
      img: teamDisplay[newIndex].img,
      name: teamDisplay[newIndex].name,
      title: teamDisplay[newIndex].title,
      about: teamDisplay[newIndex].about,
    });
  };

  const Decrement = () => {
    if (index > 0) {
        setIndex((prevIndex) => prevIndex - 1);
      updateProfileCard(index - 1);
    }
  };

  const Increment = () => {
    if (index < teamDisplay.length - 1) {
      setIndex((prevIndex) => prevIndex + 1);
      updateProfileCard(index + 1);
    }
  };

  return (
    <div className=''>
      <div className='bg-lime-950'>
        <div className='text-2xl text-white text-center'>
          <h1 className='py-3 teamHeader'>Meet Our Team</h1>
          <p className='teamParagraph'>
            Empowering innovation, our diverse team of experts unites creativity
            and proficiency. Together, we craft solutions that inspire, blending
            experience with innovation to drive success in every project we
            undertake.
          </p>
        </div>

        <div className="mt-5 mb-3">
          <div className='hover:cursor-pointer'>
            <div className='teamElements shadow flex flex-col items-center py-5 px-6 mx-auto bg-white rounded-[1rem] hover:scale-95 transition imageTeam'>
              <img
                src={profileCard.img}
                alt='image'
                className='w-[150px] h-[150px] object-cover rounded-full'
              />
              <h1 className='font-extrabold text-[26px] text-green-950'>{profileCard.name}</h1>
              <h2 className=" bg-lime-950 p-2 px-10 text-white">{profileCard.title}</h2>
              <p className="font-bold text-[18px] text-center md:text-[21px] text-green-950">{profileCard.about}</p>
            </div>
          </div>
        </div>

        <div className="flex gap-[30px] items-center justify-center">
            {<BiSolidSkipPreviousCircle className='previousIconTeam'
            onClick={Decrement}/>}
                
            {<MdNextPlan className='nextIconTeam'
            onClick={Increment}/>}
          </div>
      </div>
    </div>
  );
};

export default Team;
