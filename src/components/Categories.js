import React from 'react'
import { useState, useEffect } from 'react';
import categoryData from '../APİ/Categories.json'
import Category from '../ui/Category';
import Title from '../ui/Title';


export default function Catecories() {
  const [cotegories, setCategories] = useState([]);

  useEffect(() => {
    // apiye istek gönderDİK
    setCategories(categoryData);
  }, []);
  return (
    <div className='  mb-4 px-32 container mx-auto py-5 '>
      <div className='container mx-auto'>
        <h3 className='ml-16'></h3> 
        <Title className="">Kategoriler</Title>
        <div className='grid grid-cols-10 '>

          {cotegories && cotegories.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </div>
    </div>
  )
}
