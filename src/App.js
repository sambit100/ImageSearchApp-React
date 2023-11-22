// import logo from './logo.svg';
import './App.css';
import Jumbotron from './Components/Jumbotron';
import Searchfield from './Components/Searchfield';
import Images from './Components/Images';
import useAxios from './Hooks/useAxios';
import { createContext, useState } from 'react';
export const ImageContext = createContext();
function App() {
  const [searchImg,setSearchImg]=useState('');
  const{response,isLoading,error,fetchData }=useAxios(`search/photos?page=1&query=rabbit&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  // console.log(response)
  const value ={
    response,
    isLoading,
    error,

    fetchData,
    searchImg,
    setSearchImg
  }

  return (
    <div className="App">
      <ImageContext.Provider value={value}>

      <Jumbotron>
        <Searchfield/>
        </Jumbotron>
        <Images/>
      </ImageContext.Provider>
    </div>
  );
}

export default App;
