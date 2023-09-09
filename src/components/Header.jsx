import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

function Header() {
  const [isClicked,setIsclicked] = useState(true);

  const handleClick = () =>{
    setIsclicked(!isClicked);
  }
  return (
    <nav>
    <h1>PeakShape</h1>
    <main>
        <HashLink  to={"/"}>Home</HashLink>
        <HashLink  to={"/contact"}>Contact</HashLink>
        <HashLink  to={"/#about"}>About</HashLink>
        <HashLink  to={"/#mem"}>Plans</HashLink>
        <HashLink  to={"/services"}>Services</HashLink>


    </main>
      
    </nav>
  )
}

export default Header
