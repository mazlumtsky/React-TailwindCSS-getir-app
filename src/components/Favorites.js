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
    <div>
      <Title>Favoriler</Title>
      <div className='grid grid-cols-8 gap-0.1 bg-white rounded-lg overflow-hidden'> 
        {products.length && products.map((product,index)=> <ProdauctItems key={index}  product={product}/> )}
      </div>
      
      </div>
  )
}
