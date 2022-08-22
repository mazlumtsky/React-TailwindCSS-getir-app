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
    <div>
      <div className='grid grid-cols-3'>
        {cards.length && cards.map((card,index)=> <Cardss key={index} card={card}/>)}
      </div>
    </div>
  )
}
