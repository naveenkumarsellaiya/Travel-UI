import React,{useEffect} from "react";
import './Main.css'
import './Main.scss'
import img from '../../Assets/img1.jpg';
import img2 from '../../Assets/img2.jpg';
import img3 from '../../Assets/img3.jpg';
import img4 from '../../Assets/img4.jpg';
import img5 from '../../Assets/img5.jpg';
import img6 from '../../Assets/img6.jpg';
import img7 from '../../Assets/img7.jpg';
import img8 from '../../Assets/img8.jpg';
import img9 from '../../Assets/img9.jpg';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from "react-icons/hi";

import Aos from 'aos'
import 'aos/dist/aos.css'
const Data=[
    {
       id:1,
       imgSrc:img,
       destTitle:'welcome',
       location:'New Zealand',
       grade:'CULTRARAL RELAX',
       Fees:'$7000',
       descrption:'The epitome of remance, bore bore is one of the best travel destinatins in the world this place is known for its luxurious stays and adventruours activities.'
    },
    {
       id:2,
       imgSrc:img2,
       destTitle:'welcome',
       location:'New Zealand',
       grade:'CULTRARAL RELAX',
       Fees:'$7000',
       descrption:'The epitome of remance, bore bore is one of the best travel destinatins in the world this place is known for its luxurious stays and adventruours activities.'
    },
    {
       id:3,
       imgSrc:img3,
       destTitle:'welcome',
       location:'New Zealand',
       grade:'CULTRARAL RELAX',
       Fees:'$7000',
       descrption:'The epitome of remance, bore bore is one of the best travel destinatins in the world this place is known for its luxurious stays and adventruours activities.'
    },
    {
       id:4,
       imgSrc:img4,
       destTitle:'welcome',
       location:'New Zealand',
       grade:'CULTRARAL RELAX',
       Fees:'$7000',
       descrption:'The epitome of remance, bore bore is one of the best travel destinatins in the world this place is known for its luxurious stays and adventruours activities.'
    },
    {
       id:5,
       imgSrc:img5,
       destTitle:'welcome',
       location:'New Zealand',
       grade:'CULTRARAL RELAX',
       Fees:'$7000',
       descrption:'The epitome of remance, bore bore is one of the best travel destinatins in the world this place is known for its luxurious stays and adventruours activities.'
    },
    {
       id:6,
       imgSrc:img6,
       destTitle:'welcome',
       location:'New Zealand',
       grade:'CULTRARAL RELAX',
       Fees:'$7000',
       descrption:'The epitome of remance, bore bore is one of the best travel destinatins in the world this place is known for its luxurious stays and adventruours activities.'
    },
    {
       id:1,
       imgSrc:img7,
       destTitle:'welcome',
       location:'New Zealand',
       grade:'CULTRARAL RELAX',
       Fees:'$7000',
       descrption:'The epitome of remance, bore bore is one of the best travel destinatins in the world this place is known for its luxurious stays and adventruours activities.'
    },
    {
       id:8,
       imgSrc:img8,
       destTitle:'welcome',
       location:'New Zealand',
       grade:'CULTRARAL RELAX',
       Fees:'$7000',
       descrption:'The epitome of remance, bore bore is one of the best travel destinatins in the world this place is known for its luxurious stays and adventruours activities.'
    },
    {
       id:9,
       imgSrc:img9,
       destTitle:'welcome',
       distTitle:'Bali Island',
       location:'Indonesia',
       grade:'CULTRARAL RELAX',
       Fees:'$5000',
       descrption:'The epitome of remance, bore bore is one of the best travel destinatins in the world this place is known for its luxurious stays and adventruours activities.'
    },
]



const Main= () => {
    useEffect(()=>{
        Aos.init({duration: 1000})
    },[])
return(
    
    <section className="main container section">

        <div  data-aos="fade-right" className="SetTitle">
            <h1 className="title">
                Most visited destinations
            </h1>
        </div>

<div className="secContant gird">
    {
 Data.map(({id,imgSrc,destTitle,location,grade,fees,descrption})=>{
    return(
        <div key={id} data-aos="fade-up" className="singleDestination">
            <div className="imgageDiv">
                <img src={imgSrc}  alt="" />
             </div>
            <div className="cardInfo">
                <h4 className="destTitle">  </h4>
                    {destTitle}
                    <span className="containent"><HiOutlineLocationMarker/><span className="name">{location}</span></span>

                    <div className="fees flex">
                        <div className="grade">
                            <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                            <h5>{fees}</h5>
                        </div>
                    </div>
                    <div className="desc">
                        <p>{descrption}</p>
                    </div>
                    <button className="btn flex">
                        DETAILS
                <HiOutlineClipboardCheck/>                    </button>
              
            </div>
        </div>
    )
 })
}
</div>


    </section>

)
}
export default Main;