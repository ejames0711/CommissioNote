import { useEffect, useState } from 'react'
import '@picocss/pico'
import './App.css'
import pb from './lib/pocketbase';


function App() {

  async function getRecords(){
    pb.autoCancellation(false);
    const record = await pb.collection('test').getOne('RECORD_ID', {
      expand: 'relField1,relField2.subRelField',
  });
  console.log(record)
  }

  useEffect(() => {
    getRecords()
  })

  return (
    <>
      <div></div>
    </>
  )
}

export default App
