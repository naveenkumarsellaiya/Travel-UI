import React,{useState} from "react";
import './Navbar.css'
import './Navbar.scss'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = ()=>{
    const [active, setActive] = useState('navBar')
    const showNav=()=>{
        setActive('navBar activeNavbar')
    }
    const RemoveNavbar=()=>{
        setActive('navBar RemoveNavbar')
    }
return(
    <section className="navBarSection">
        <header className="header flex">
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><MdOutlineTravelExplore className="icon"/>Travel.</h1>
                </a>
            </div>
        <div className={active}>
            <ul className="navLists flex">
                <li className="navItem"><a href="" className="navLinks">Home</a></li>
                <li className="navItem"><a href="" className="navLinks">Packages</a></li>
                <li className="navItem"><a href="" className="navLinks">About</a></li>
                <li className="navItem"><a href="" className="navLinks">Pages</a></li>
                <li className="navItem"><a href="" className="navLinks">News</a></li>
                <li className="navItem"><a href="" className="navLinks">Contact</a></li>
                <button className="btn">
                    <a href="#">BookNow</a>
                </button>
            </ul>
            <div onClick={RemoveNavbar} className="CloseNavbar"><IoIosCloseCircle className="icon"/>
            </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className="icon"/>
        </div>
        </header>
    </section>

)
}
export default Navbar;