import React,{useEffect} from "react";
import './Footer.css'
import './Footer.scss'
import video2 from '../../Assets/video.mp4'
import {FiSend } from 'react-icons/fi'
import {MdOutlineTravelExplore } from 'react-icons/md'
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = ()=>{
        useEffect(()=>{
            Aos.init({duration: 2000})
        },[])
    
return(
    <section className="footer" data-aos="fade-up">
        <div className="videoDiv">
            <video src={video2} autoPlay muted loop type="video/mp4" ></video>
        </div>
        <div className="secContent container">
            <div className="contactDiv flex">
                <div className="text" data-aos="fade-up">
                    <small>KEEP IN TOUCH</small>
                    <h2>Travel with us</h2>
                </div>
                <div className="inputDiv flex" data-aos="fade-up">
                    <input type="text" placeholder="Enter Email Address" />
                    <button className="btn flex" type='submit'>
                        SEND <FiSend className="icon"/>
                    </button>
                </div>
            </div>

            <div className="footerCard glex"data-aos="fade-up">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="#" className="logo flex">
                        <MdOutlineTravelExplore/> Travel.
                        </a>
                    </div>
                    <div className="footerparagraph">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos recusandae, pariatur eos in fugiat deleniti alias ipsum reprehenderit explicabo accusamus voluptate vero optio quaerat ipsam, quam error rerum praesentium officiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, iste?
                    </div>
                    <div className="footerSocials" data-aos="fade-up">
                        <FaTwitterSquare className="icon"/>
                        <FaYoutube className="icon"/>
                        <FaInstagram className="icon"/>
                        <FaTripadvisor className="icon"/>
                    </div>
                </div>
                <div className="footerLink gird" data-aos="fade-up" data-aos-duration="3000">
                    <div className="linkGroup">
                        <span className="groupTitle">
                            OUR AGENCY
                        </span>

                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> services
                        </li>

                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> 
                           Insurance
                        </li>

                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> 
                           Tourism
                        </li>

                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> 
                           payment
                        </li>
                       
                        </div>
                    </div>
                    <div className="linkGroup" data-aos="fade-right" data-aos-duration="4000">
                        <span className="groupTitle">
                           PARTNERS
                        </span>

                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> Bookings
                        </li>

                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> 
                           Rentcars
                        </li>

                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> 
                           Hostelworld
                        </li>

                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> 
                           Trivango
                        </li>
                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> 
                           Trip Advaiser
                        </li>
                       

                    </div>

                    <div className="linkGroup" data-aos="fade-up"data-aos-duration="5000">
                        <span className="groupTitle">
                           LAST MINUTE
                        </span>

                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> London
                        </li>

                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> 
                        Califonia
                        </li>

                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> 
                           Indonesia
                        </li>

                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> 
                           Erope
                        </li>
                        <li className="footerLists flex">
                           <FiChevronRight className="icon"/> 
                           Oceania
                        </li>
                       

                    </div>

               
                <div className="footerDiv flex ">
                    <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>COPYRIGHTS RESERVED-ISRATECH 2025</small>
                </div>
            </div>
        </div>
    </section>
)
}

export default Footer;