import React from 'react'
import {HiPlus} from 'react-icons/hi'
export default function ProdauctItems({ product }) {
    return (
        <div className='bg-white flex-col items-center relative text-center text-sm font-semibold  p-3 s'>
            <button className='absolute top-2 right-3 bg-white w-8 h-8 flex items-center text-primary-brand-color justify-center border border-gray-200 rounded-lg shadow-lg  transition-all   hover:border-primary-brand-color'>
                <HiPlus/>
            </button>
            <div className='hover:shadow transition-all hover:touch-pinch-zoom'>
           <img className=''  src={product.image} alt={product.title}/>
           <div className='text-primary-brand-color '>{product.price} TL</div>
           <div className='text-gray-900'>{product.title}</div>
           <div className='text-gray-500'>{product.alt}</div>
           </div>
        </div>
    )
}
