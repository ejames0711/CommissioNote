import { useEffect, useState } from 'react'
import '@picocss/pico'
import './App.css'
import pb from './lib/pocketbase.js'
import CardDisplay from './components/cardsdisplay.jsx'
import Modal from './components/modal.jsx'
import note from './assets/note.svg'
import Search from './components/search.jsx'


function App() {

  const [devices,setDevices] = useState([])
  const [modal,setModal] = useState({
    open: false,
    data: {}
  }) 
  const [searchData,setSearchData] = useState("")

  const toggleModal = (modalData) => {
    setModal({
      open:!modal.open,
      data: modalData.collectionId !== undefined ? modalData : {}
    })
  }
//
  async function getDevices(searchFilter){
    await pb.collection('devices').getFullList({
      expand:"brand",
      filter: searchFilter ? `json ~ "${searchFilter}"` : 'created<"2024-01-05 00:00:00"'
    }).then((res) => setDevices(res))
  }


  useEffect(() => {
    getDevices()
  },[])

  console.log(devices)
  return (
    <>  
      <h1 className='container title'>CommissioNote <img src={note} alt="" className='logo'/></h1>
      <Modal 
      modal={modal}
      toggleModal={toggleModal}
      />
      <Search 
      searchData={searchData}
      setSearchData={setSearchData}
      getDevices={getDevices}
      />
      <CardDisplay 
      devices={devices}
      toggleModal={toggleModal}
      />
    </>
  )
}

export default App
