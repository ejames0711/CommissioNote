import { useEffect, useState } from 'react'
import '@picocss/pico'
import './App.css'
import logo from "./assets/crestron.png"
import pb from './lib/pocketbase.js'


function App() {

  const [records,setRecords] = useState([])

  async function getData(){
    await pb.collection('test').getFullList().then((res) => setRecords(res))
  }

  useEffect(() => {
    getData()
  },[])

  return (
    <>
      <h1>CommissioNote</h1>
      {records.map((device) => (
        <article className='container card' key={device.id}>
         <h3 >{device.field.Model}</h3>
         <img src={logo} alt="" />
          <p><strong>Brand:</strong> {device.field.Brand}</p>
          <p><strong>Default Address:</strong> {device.field["Default IP/Subnet"]}</p>
          <p><strong>Default Login:</strong> {device.field["Default Credentials"]}</p>
          <p><strong>Config Software:</strong> {device.field["Config Software"]}</p>
          <p><strong>Support:</strong> {device.field["Support Number"]} | {device.field["Support Email"]}</p>
          <button className='outline'>More Info</button>
        </article>
      ))}
    </>
  )
}

export default App
