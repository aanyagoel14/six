import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import MapData from './components/MapData'
import axios from "axios"
function App() {

  const [text, setText] = useState('')
const [data,setdata]= useState([])
const [ debounce,setdebounce]=useState(text)

console.log(data);

useEffect(()=>{
  const timer = setTimeout(()=>{ //delays
    setdebounce(text)
  },[2500])

  return ()=>{
    clearTimeout(timer)  //remove old timer
  }
},[text])

useEffect(()=>{
const fetchData = async()=>{
    const response = await axios.get(`https://restcountries.com/v3.1/name/${debounce}`).then(country=>{
      console.log(country);
  setdata(country?.data)
    })
  }
  if(text){
    fetchData()
  }
},[debounce])

// console.log();
  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-warning'>
      <Search
      text={text}
      setText={setText}
      />
    
      <MapData data={data}/>
    </div>
  )
}

export default App