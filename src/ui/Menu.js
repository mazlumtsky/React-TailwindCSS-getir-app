import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-collapse';
import { useWindowWidth } from '@react-hook/window-size/throttled'
import { IoIosArrowDown } from 'react-icons/io';


export default function Menu({ title, items }) {

    const WindowWidth = useWindowWidth()
    const [isOpen, setIsOpen] = useState(true)
    const toggleCollapse = () => {
        if (WindowWidth <= 768) {
            setIsOpen(!isOpen);
        }
    }
    useEffect(() => {
        if (isOpen && WindowWidth <= 768) {
            setIsOpen(false);
        } if (!isOpen && WindowWidth > 768) {
            setIsOpen(true)
        }
    }, [WindowWidth])

    return (
        <div>
            <h6 onClick={toggleCollapse} className='text-primary-brand-color text-lg flex justify-between items-center'>{title}
                <button className='w-7 h-7 flex justify-center items-center bg-purple-100 rounded-md md:hidden'>
                    <span className={`transition-all transform ${isOpen ? 'rotate-180' : '' }`}>
                        <IoIosArrowDown />
                    </span>
                </button>
            </h6>

            <nav className='grid gap-y-4    '>

                <Collapse isOpened={isOpen}>
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
                </Collapse>
            </nav>

        </div>

    )
}
