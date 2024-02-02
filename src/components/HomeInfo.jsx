import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
     <p className='font-medium sm:text-xl text-center'>{text}</p>
     <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} className='w-4 h-4 object-contain' />
     </Link>
    </div>
)




const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hey, I am <span className='font-semibold'>Hamzah</span>👋🏽
        <br />
        A Full-Stack Software Engineer from NYC
        </h1>
    ),
    2: (
        <InfoBox
        text="Worked with many companies and picked up many skills along the way."
        link="/about"
        btnText="Lean more"
    />
    ),
    3: (
        <InfoBox
        text="Led multiple projects along the way."
        link="/projects"
        btnText="See portfolio"
    />
    ),
    4: (
        <InfoBox
        text="Looking for a frontend/backend dev?"
        link="/contact"
        btnText="Contact me"
    />
    ),
}



const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo