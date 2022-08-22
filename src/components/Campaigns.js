import React, { useEffect, useState } from 'react'
import Banneres from '../APİ/Banners.json';
import Title from '../ui/Title';
import Slider from "react-slick";

export default function Campaigns() {
  const [benners, setBenner] = useState([])

  useEffect(() => {
    setBenner(Banneres);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3500,
    cssEase: "linear"
  };

  return (
    <div className='container mx-auto py-2'>
      <Title>Kapanyalar</Title>
      <Slider className='-mx-2' {...settings} >
         {benners.length && benners.map((banner,index)=>(
          <div key={index}>
            <div className='mx-2'>
             <img src={banner.image}/> 
            </div>
            
          </div>
         ))}
      </Slider>
    </div>
  )
}
