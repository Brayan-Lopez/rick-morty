import { useState } from 'react';
import './App.css'
import axios from 'axios';


import Form from './components/Form'
import Residents from './components/Residents';

function App() {

  const [textLocation, setTextLocation] = useState('')
  const [arrayAllLocation, setArrayAllLocation] = useState()
  const [currentLocation, setCurrentLocation] = useState()
 
  const handleChange = (e) => {
    e.preventDefault()
    setTextLocation(e.target.value)
    const newLocation = e.target.value
    const URL = `https://rickandmortyapi.com/api/location/?name=${newLocation}`
    axios.get(URL)
    .then(({data}) => {setArrayAllLocation(data)})
    .catch((err) => {console.log(err)})
  }

  const handleEndpoint = (url) => {
    const URL = url
    axios.get(URL)
    .then(({data})=>{setCurrentLocation(data)})
    .catch((err)=>{console.log(err)})
    setTextLocation('')
  }

  return (
    <section className={`${(currentLocation?.id < 50) ? 'bg_green': 
      (currentLocation?.id > 50 && currentLocation?.id < 80) ?  'bg_blue': 
      (currentLocation?.id > 80)?'bg_red' : null}`}>

      <Form handleChange={handleChange}
        textLocation={textLocation}
        arrayAllLocation={arrayAllLocation}
        handleEndpoint={handleEndpoint}
      />
      <Residents currentLocation={currentLocation}
      />
     
    </section>
  )
}

export default App
