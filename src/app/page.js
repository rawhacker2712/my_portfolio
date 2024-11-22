import Image from "next/image";
import styles from "./page.module.css";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Card from "./components/card";

export default function Home() {

   
  return (
    <div id = "home" className={styles.main}>
      <div className={styles.intro}>
        <div className={styles.div1}>
          <h1>TANISHQ SATI</h1>
          <h2>Programmer & Developer</h2>
          <div className={styles.icons}>
            <Link href="https://www.instagram.com/tanishq_sati/profilecard/?igsh=MXB2d2dwcGNvZTBkMg=="> <FaInstagram className={styles.icon}/></Link>
             <FaFacebook className={styles.icon}/>
             <Link href = "https://github.com/rawhacker2712"><FaGithub className={styles.icon}/></Link>
             <FaTwitter className={styles.icon}/>
          </div>
        </div>
        <div className={styles.div2 }>
          <img src="i1.png" className={styles.img }></img>
        </div>
      </div>

      <div id = "service" className={styles.main2 }>
        <h1>SKILLS</h1>
        <div className={styles.cards }>
          <Card title="Web design" content="Elon Reeve Musk is a businessman known for his key roles in the space company SpaceX and the automotive company Tesla, Inc. His other involvements include ownership of X Corp., the company that operates the social"/>
          <Card title="Android" content="Elon Musk, the South African-born entrepreneur widely known as the founder of SpaceX and Tesla, is renowned for his advances in electric vehicles and space ..."/>
          <Card title="Web design" content="Elon Reeve Musk is a businessman known for his key roles in the space company SpaceX and the automotive company Tesla, Inc. His other involvements include ownership of X Corp., the company that operates the social"/>
          <Card title="Android" content="Elon Musk, the South African-born entrepreneur widely known as the founder of SpaceX and Tesla, is renowned for his advances in electric vehicles and space ..."/>
          <Card title="Web design" content="Elon Reeve Musk is a businessman known for his key roles in the space company SpaceX and the automotive company Tesla, Inc. His other involvements include ownership of X Corp., the company that operates the social"/>
          <Card title="Android" content="Elon Musk, the South African-born entrepreneur widely known as the founder of SpaceX and Tesla, is renowned for his advances in electric vehicles and space ..."/>
        </div>
      </div>

      <div id = "contact"  className = {styles.contact}>
        <h1>CONTACT ME</h1>
        <div className = {styles.divide}>
          <div className = {styles.form}>
              <div className ={styles.fstyle}>
                Name<input className = {styles.input} placeholder = "Enter Your Name" />
                Mobile<input className = {styles.input} placeholder = "Enter Your Mobile No" />
                Email<input className = {styles.input}  placeholder = "Enter Your Email"/>
              </div>
              <div className = {styles.mstyle}>
                  Message<input className = {styles.minput} placeholder = "Enter Your Message here..."/>
                  <button className={styles.button} >POST</button>
   
              </div>
          </div>
              <div className={styles.details}>
             <h3 className={styles.info}>Email</h3>
             <p>tanishq.sati2712@gmail.com</p>
             <h3 className={styles.info}>Mobile</h3>
             <p>7818026932</p>
             <h3 className={styles.info}>Address</h3>
             <p>Dehradun ,Utttarakhand</p>
             <h3 className={styles.info}>Availability</h3>
             <p>Available for 7 days a week</p>
            </div>
           

        </div>

      </div>


      
    </div>
  );
}
