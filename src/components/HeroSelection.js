import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import Slider from "react-slick";
import { FaFacebookSquare } from 'react-icons/fa';
import {useWindowWidth} from '@react-hook/window-size/throttled'

    
   
  

export default function HeroSelection() {
    const WindowWidth = useWindowWidth()

    const [selected, setSelected] = useState('TR');
    const phones = {
        US: '+1',
        DE: '+50',
        TR: '+90',
        FR: '+36',
        IT: '+7',
        GB: '+35',
        IN: '+15'
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3500,
        cssEase: "linear"
    };

    return (
        <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:indent-0 before:w-full  before:z-10 before:h-full" >
            {WindowWidth >= 768 &&  <Slider {...settings} >
                <div>
                    <h3>
                        <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"></img>
                    </h3>
                </div>

                <div>
                    <h3>
                        <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"></img>
                    </h3>
                </div>
                <div>
                    <h3>
                        <img className="w-full h-[500px] object-cover" src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg "></img>
                    </h3>
                </div>

            </Slider>}
            <div className="md:container flex justify-between items-center relative md:px-14 lg:px-24 2xl:px-32  md:absolute top-0 left-0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20">
                <div className="hidden md:block">
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"></img>

                    <h3 className="mt-8 font-semibold sm:text-2xl lg:text-4xl text-white">Dakikalar içinde<br />kapınızda <br /> </h3>
                </div>


                <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6 ">
                    <h4 className="text-primary-brand-color text-center font-semibold mb-4 ">Giriş yap veya kayıt ol</h4>
                    <div className="flex gap-x-2">
                        <ReactFlagsSelect
                            countries={Object.keys(phones)}
                            customLabels={phones}
                            placeholder="Select Language"
                            onSelect={code => setSelected(code)}
                            selected={selected}
                            className="flag-select"
                        />
                        <label className="flex-1 relative group block cursor-text">
                            <input required className=" h-14 border-2 border-gray-200 rounded w-full transition-colors group-hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer pt-2 text-sm" />
                            <span className="absolute top-0 left-0 h-full px-4 flex items-center  text-gray-400 peer-focus:h-7   transition-all  peer-focus:text-primary-brand-color  peer-valid:text-primary-brand-color peer-focus:text-xs">Telefon Numarası</span>
                        </label>
                    </div>
                    <button className="bg-barand-yellow mt-3 h-12 flex items-center justify-center rounded-md w-full font-semibold  text-primary-brand-color hover:bg-primary-brand-color hover:text-barand-yellow transition-colors">Telefon numarası ile devam et</button>
                    <hr className="h-[1px] my-2 bg-gray-300" />
                    <button className="bg-blue-700 bg-opacity-10 text-blue-700 text-opacity-80 mt-3 h-12 flex items-center  rounded-md w-full font-semibold   hover:text-blue-400 transition-colors">
                        <FaFacebookSquare size={20} className=" ml-5" />
                        <span className="mx-auto">Facebooks ile devam et</span>

                    </button>
                </div>

            </div>
        </div>
    )
}
