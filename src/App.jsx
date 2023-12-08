import { useEffect, useState } from 'react'
import '@picocss/pico'
import './App.css'


import PocketBase from 'pocketbase'


function App() {

  const pb = new PocketBase("http://127.0.0.1:8090/")

  useEffect(() => {
    pb.autoCancellation(false);
    const records = pb.collection('devices').getFullList().then((res) => console.log(res));
  })

  return (
    <>
      <div></div>
    </>
  )
}

export default App
