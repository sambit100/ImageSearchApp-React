import React, { useContext, useState } from 'react'
import { ImageContext } from '../App';
// import { setRef } from '@material-ui/core';

const Searchfield = () => {
  const [search,setSearch]=useState("");

  const {fetchData,setSearchImg} = useContext(ImageContext)
  const handleSearchdown =(e)=>{
      if(e.key==='Enter'){
        fetchData(`search/photos?page=1&query=${search}&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
        setSearch("");
        setSearchImg(search);
      }
      }
  
 const handleButton =()=>{
   fetchData(`search/photos?page=1&query=${search}&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
   setSearch("");
   setSearchImg(search);
 }

  return (
    <div className='flex'>
        <input type="text" 
        value={search} onChange={(e)=>{setSearch(e.target.value)}}
        className='bg-gray-50 border  border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blud-500 focus:ring-2 rounded-tl rounded-bl' 
        
        onKeyDown={handleSearchdown}
        />
           

        <button 
        onClick={handleButton}
        disabled ={!search}
         className='text-white bg-orange-500 px-6 py-2.5 rounded-r-md focus:ring-4 focus:ring-black-300 disabled:bg-gray-400'
         placeholder='search anything.... '>Search</button>
    </div>
  )
}

export default Searchfield