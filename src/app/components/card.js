import React from 'react'
import styles from "./styles/card.module.css"
import { FaInstagram } from 'react-icons/fa'

export default function Card({icon , title , content}) {
  return (
    <div className={styles.main}>
        <FaInstagram className={styles.icon}/>
        <h3 className={styles.heading}>{title}</h3>
        <p className={styles.content}>{content}</p>
    </div>
  )
}
