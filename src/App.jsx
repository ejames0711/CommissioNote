import { useEffect, useState } from 'react'
import '@picocss/pico'
import './App.css'
import pb from './lib/pocketbase.js'
import CardDisplay from './components/cardsdisplay.jsx'


function App() {

  const [devices,setDevices] = useState([])

  async function getDevices(){
    await pb.collection('devices').getFullList().then((res) => setDevices(res))
  }

  useEffect(() => {
    getDevices()
  },[])

  return (
    <>
       <CardDisplay devices={devices} />
    </>
  )
}

export default App
