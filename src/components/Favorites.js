import React, { useEffect, useState } from 'react';
import Title from '../ui/Title';
import Products from '../APİ/Products.json';
import ProdauctItems from '../ui/ProdauctItems';

export default function Favorites() {

  const [products, setProducts] = useState([])

  useEffect(() => {
     
    setProducts(Products)
  }, [])
  
  return (
    <div className='lg:px-24 2xl:px-32 container mx-auto pt-8' >
      <Title>Favoriler</Title>
      <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9  gap-0.1 bg-white rounded-lg overflow-hidden'> 
        {products.length && products.map((product,index)=> <ProdauctItems key={index}  product={product}/> )}
      </div>
      
      </div>
  )
}
