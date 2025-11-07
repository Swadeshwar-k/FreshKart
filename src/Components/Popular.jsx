import React from 'react'
import popularStyle from '../styles/popular.module.css'
import AddItem from './AddItem'

function Popular({title, items}) {

  return (
    <div className={popularStyle.popularContainer}>
        <div className={popularStyle.heading}>{title}</div>
        <div className={popularStyle.items}>
          {items.map((item=>{
            return(
              <div className={popularStyle.item} key={item.id}>
                <div className={popularStyle.picContainer}>
                  <img src={item.pic} alt="" />
                </div>
                <div className={popularStyle.dataContainer}>
                  <div className={popularStyle.name}>{item.name}</div>
                  <div className={popularStyle.weight}>{item.weight}</div>
                  <div className={popularStyle.price}>
                  <div className={popularStyle.current}>₹{item.price}</div>
                   {item.was !== item.price ? (
                     <div className={popularStyle.was}>₹{item.was}</div>
                   ) : null}
                 </div>
                 <div className={popularStyle.cta}><AddItem item={item}/></div>
                </div>
               </div>
            )
          }))}
        </div>      
    </div>
  )
}

export default Popular


