import React, { useEffect, useState } from 'react'
import card from '../APİ/Cards.json'
import Title from '../ui/Title';
import Cardss from '../ui/Cardss';

export default function Card() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
          setCards(card)
    }, [])
    

  return (
    <div className='container mx-auto md:px-32'>
      <div className='grid md:grid-cols-3 gap-x-4'>
        {cards.length && cards.map((card,index)=> <Cardss key={index} card={card}/>)}
      </div>
    </div>
  )
}
