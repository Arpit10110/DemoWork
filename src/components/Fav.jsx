import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
const Fav = () => {
  const {favItem} = useSelector(state=>state.fav)
  console.log(favItem)
  return (
    <div>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/fav">Fav</Link>
        </nav>
        <div className='FavDiv'>
          <h4>Your Favorite item</h4>
          {
            favItem.map((i)=>{
              return(
                <h3>⭐{i}</h3>
              )
            })
          }
        </div>
    </div>
  )
}

export default Fav
