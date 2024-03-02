import React from 'react'

const Offer = (props) => {
    const {src, link, index} = props;
    return (
        <a href={link} ><img src={src} alt={`${index} Offer`} /></a>
    )
}

export default Offer