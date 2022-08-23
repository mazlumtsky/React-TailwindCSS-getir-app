import React from 'react'

export default function menu({ title, items }) {
    return (
        <div>
            <nav className='grid gap-y-4'>
                <h6 className='text-primary-brand-color text-lg'>{title}</h6>
            </nav>
            <nav>
                <ul className='grid gap-y-3 mt-5'>
                    {items.map((item, key) => (
                        <li key={key}>
                            <a href={item.href} className="text-sm text-gray-600 ">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>


        </div>

    )
}
