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
    <div className='bg-white py-4'>

      <div className='container mx-auto'>
        <Title>Kategoriler</Title>
        <div className='grid grid-cols-10 '>
          
          {cotegories && cotegories.map((category, index) => <Category key={index} category={category} />)}
        </div>
      </div>
    </div>
  )
}
