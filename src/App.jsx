import { useEffect, useState } from 'react'
import '@picocss/pico'
import './App.css'


import PocketBase from 'pocketbase'


function App() {

  const pb = new PocketBase('POCKETBASE_CLIENT')
  const [records,setRecords] = useState([])

  async function getData(){
    await pb.collection('devices').getFullList().then((res) => setRecords(res));
    console.log(records)
  }

  useEffect(() => {
    getData()
  },[])

  

  return (
    <>
      <div>
        {records.map((device) => (
          <div key={device.id}>{device.id}</div>
        ))}
      </div>
    </>
  )
}

export default App
