import { useEffect, useState } from 'react'
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

  return (
    <>  
      <div className='flex flex-col justify-center items-center h-screen gap-10'> 
        <div className='flex'>
          <h1 className='h-12 text-white text-5xl pr-2 font-bold'><a href="/">CommissioNote</a></h1>
          <img src={note} alt="" className='w-12 h-12'/>
        </div>
      
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
      </div>
    </>
  )
}

export default App
