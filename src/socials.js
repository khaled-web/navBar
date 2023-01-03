import React from 'react'
import { links, socials } from './data'

const Socials = () => {
  return (
      <ul className="social-icons">
      {socials.map((social)=>{
       const {id, url, icon}=social;
       return(
        <li key={id}>
         <a href={url}>{icon}</a>
        </li>
       )
      })}
      </ul>
  )
}

export default Socials
