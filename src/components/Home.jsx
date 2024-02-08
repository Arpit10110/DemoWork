import React,{useEffect} from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from './Card';
import "../style/Home.css"
import {Link} from "react-router-dom"
const Home = () => {
  const dispatch=useDispatch();
    const [Show,SetShow]=useState([]);
    const handler=(fav)=>{
      alert("Added to Favorites")
      console.log(fav.strCategory)
      console.log(fav)
      dispatch({
        type:"Local",
        payload:fav.strCategory
      })
    }
    const getresult = async () => {
        try {
            const datas = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
            const Datas = await datas.json();
           console.log(Datas.categories[0]);
           SetShow(Datas.categories);
           console.log(Show);
        } catch (error) {
            console.log(error);
        } finally {
           
        }
    }
   useEffect(() => {
    getresult();
   }, [])
   
    
  return (
    <div>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/fav">Fav</Link>
        </nav>
        <div className="mainBox">
      {Show.map((i,index)=>{
        return(
           <Card key-={index} fav={i} handler={handler} />
        )
      })}
        </div>
    </div>
  )
}

export default Home
