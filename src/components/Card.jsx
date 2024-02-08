import React from 'react'
import "../style/Home.css"
const Card = ({fav,handler}) => {
  return (
    <div className='CardCont'>
                <h1>{fav.strCategory}</h1>
                <button onClick={()=>{handler(fav)}} >Add to fav</button>
            </div>
  )
}

export default Card
