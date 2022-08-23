import React from 'react'

export default function Card({card:{image,title,description}}) {
  return (
    <div >
      <div className='bg-white mx-1 p-14 mt-14 gap-x-4 h-[450px]  rounded-lg 
      shadow-sm flex flex-col justify-center items-center text-center my-10'>
      <img className='mb-6'src={image} />
       <h6 className='font-semibold text-lg text-primary-brand-color'>{title}</h6> 
      <p className= ' text-gray-600 text-md mt-2'>{description}</p>
      </div>
    </div>
  )
}
