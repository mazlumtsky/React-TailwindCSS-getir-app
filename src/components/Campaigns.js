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
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          arrows:false,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows:false,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows:false,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className='container mx-auto md:px-14 lg-24 xl:px-28 2xl:px-32 md:pt-8'>
      <div className='hidden md:block'>
        <Title>Kapanyalar</Title>
      </div>
      
      <Slider className='md:-mx-2' {...settings} >
         {benners.length && benners.map((banner,index)=>(
          <div key={index}>
            <div className='mx-2'>
             <img src={banner.image} className='md:rounded-lg'/> 
            </div>
            
          </div>
         ))}
      </Slider>
    </div>
  )
}
