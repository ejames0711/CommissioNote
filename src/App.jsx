import { useEffect, useState } from 'react'
import '@picocss/pico'
import './App.css'
import pb from './lib/pocketbase.js'
import CardDisplay from './components/cardsdisplay.jsx'
import Modal from './components/modal.jsx'


function App() {

  const [devices,setDevices] = useState([])
  const [modal,setModal] = useState({
    open: false,
    data: {}
  }) 

  const toggleModal = (modalData) => {
    setModal({
      open:!modal.open,
      data: modalData.collectionId !== undefined ? modalData : {}
    })
  }


  async function getDevices(){
    await pb.collection('devices').getFullList({expand:"brand"}).then((res) => setDevices(res))
  }

  useEffect(() => {
    getDevices()
  },[])

  // console.log(devices)
  return (
    <>  
      <h1 className='container tag'>CommissioNote</h1>
      <Modal 
      modal={modal}
      toggleModal={toggleModal}
      />
      <div className='search'>
        <input type="text" className='' />
      </div>
      <CardDisplay 
      devices={devices}
      toggleModal={toggleModal}
      />
    </>
  )
}

export default App
