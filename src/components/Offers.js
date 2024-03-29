import React from 'react'
import Offer from './Offer.js'
import "../styles/Offers.css"
const Offers = (props) => {
    const {offer}=props;
  return (
    <div className='offersSection'>
        {offer.map((item,index)=>(
          <Offer key={item.image} index={index} src={item.image} link={item.url}/> 
        ))}
    </div>
  )
}

export default Offers