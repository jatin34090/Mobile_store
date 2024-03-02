import React from 'react'
import "../styles/heading.css"

const Heading = ({text}) => {
    // const {text} = props;
    
  return (
    <div className='heading'>
        <div></div>
        <p>{text}</p>
        <div></div>
    </div>
  )
}

export default Heading