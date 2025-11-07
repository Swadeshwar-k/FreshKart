import React from 'react'
import cardStyle from '../styles/cards.module.css'
import mangoPng from '../images/Mango.png'
import bananaPng from '../images/Banana.png'
import veggiesPng from '../images/Veggies.png'
import tomatoPng from '../images/Tomato.png'


function Cards() {
  return (
    <div className={cardStyle.cardsContainer}>
        <div className={`${cardStyle.card} ${cardStyle.pink}`}>
          <div className={cardStyle.caption}> Season's fresh & crispy, always!</div>
          <img className={cardStyle.mango} src={mangoPng} alt="" />
        </div>

        <div className={`${cardStyle.card} ${cardStyle.orange}`}>
          <div className={cardStyle.caption}> Season's fresh & crispy, always!</div>
          <img className={cardStyle.banana} src={bananaPng} alt="" />
        </div>

        <div className={`${cardStyle.card} ${cardStyle.blue}`}>
          <div className={cardStyle.caption}> Season's fresh & crispy, always!</div>
          <img className={cardStyle.veg} src={veggiesPng} alt="" />
        </div>

    </div>
  )
}

export default Cards
