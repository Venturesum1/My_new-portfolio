import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import { BsChatFill } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    
    <div className="header__socials">

        <a href="https://www.linkedin.com/in/soumyasis-das-714609224/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/Venturesum1" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://github.com/Venturesum1" target="_blank" rel='noreferrer'><BsChatFill/></a>
    </div>
  )
}

export default HeaderSocials