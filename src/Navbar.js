import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, socials } from './data'
import logo from './logo.svg'

const Navbar = () => {
  //useStateItems
  const [showLinks, setShowLinks]=useState(false)
  //useRef
  const linksContainer = useRef(null);
  const linkRef = useRef(null);
  //useEffect
  useEffect(()=>{
    const linkHeight = linkRef.current.getBoundingClientRect().height;
    if(showLinks){
      linksContainer.current.style.height = `${linkHeight}px`
    }else{
      linksContainer.current.style.height= '0px'
    }
  },[showLinks])
  return(
    <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo"/>
        <button className='nav-toggle' onClick={()=>setShowLinks(!showLinks)}>
          <FaBars/>
        </button>
      </div>
      <div className='links-container' ref={linksContainer}>
        <ul className="links" ref={linkRef}>
         {links.map((link)=>{
           const {id, url, text} = link;
           return(
            <li key={id}>
             <a href={url}>{text}</a>
            </li>
           )
          })
         }
        </ul>
      </div>
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
    </div>
    </nav>
    )
}
 
export default Navbar
