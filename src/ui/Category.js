import React from 'react'

export default function Category({ category: { id, title, image } }) {
    return (

        <a href='#' className='flex flex-col group items-center transition-all text-center p-4  hover:bg-purple-50'>
            <img src={image} className={'w-12 h-12 rounded-lg border border-gray-200'} alt={title} />
            <span className='text-sm group-hover:text-primary-brand-color tracking-tighter'>
                {title}
            </span>
        </a>

    )
}
