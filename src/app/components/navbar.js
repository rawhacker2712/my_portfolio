"use client"
import React from 'react'

import style from "./styles/navbar.module.css"
import Link from 'next/link'
import {FaBars} from "react-icons/fa"
import { useState } from 'react'

export default function Navbar() {
    const [isnavopen , setnavopen] = useState(false);

    const handleDownload = () => {
      const link = document.createElement("a");
      link.href = "/ResumeTanishqSati.pdf";
      link.download = "My_Resume.pdf";
      link.click();
     };

  return (
    <div className={style.navbar}>
        <p className={style.title}>TANISHQ</p>
        <ul className={ isnavopen ? style.list :style.list1 }>
            <li><Link href="#home" className={style.link}>Home</Link></li>
            <li><Link href="#service" className={style.link}>Service</Link></li>
            <li><Link href="" className={style.link}>About</Link></li>
            <li><Link href="" className={style.link}>Skill</Link></li>
            <li><Link href="" className={style.link}>Portfolio</Link></li>
            <li><Link href="#contact" className={style.link}>Contact</Link></li>
            <li><Link href="" className={style.link}>Github</Link></li>
        </ul>
        <button className={style.button} onClick = {handleDownload}>Resume</button>
        <FaBars className={style.menu} onClick={()=>{setnavopen(!isnavopen)}}/>
    </div>
  )
}
