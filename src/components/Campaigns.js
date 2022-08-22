import React, { useEffect, useState } from 'react'
import Banneres from '../APİ/Banners.json';
import Title from '../ui/Title';
import Slider from "react-slick";
import {IoIosArrowBack,IoIosArrowForward}  from 'react-icons/io'


function NextBtn(props) {
  const { className, style, onClick } = props;
  return (
    <button className={`text-brand-color absolute top-1/2 -right-6 -translate-y-1/2`} onClick={onClick} >
     <IoIosArrowForward size={25}/>
     
      </button>
    );    
}      
function PrevBtn(props) {
  const { className, style, onClick } = props;
  return (
    <button className={`text-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}  onClick={onClick} >
      <IoIosArrowBack size={25}/>
 
      </button>
    );    
}    
      
export default function Campaigns() {
  const [benners, setBenner] = useState([])

  useEffect(() => {
    setBenner(Banneres);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />
  };

  return (
    <div className='container mx-auto py-8'>
      <Title>Kapanyalar</Title>
      <Slider className='-mx-2' {...settings} >
         {benners.length && benners.map((banner,index)=>(
          <div key={index}>
            <div className='mx-2'>
             <img src={banner.image} className='rounded-lg'/> 
            </div>
            
          </div>
         ))}
      </Slider>
    </div>
  )
}
