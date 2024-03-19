import search from '../assets/search.svg'

export default function Search({searchData,setSearchData,getDevices}) {

    const handleInput = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setSearchData(lowerCase)
    }

    return(
        <>
            <div className='flex border-2 border-white rounded pl-2 w-96 relative justify-between'>
                <input type="text" placeholder='Search Devices...' onChange={handleInput} className='text-white outline-0 bg-gray-900'/>
                <img src={search} alt=""  className='p-2 h-14 w-14' />
            </div>
            <button className='bg-slate-800 p-4 rounded shadow hover:shadow-white text-white active:border-2 active:border-white' onClick={() => getDevices(searchData)}>Submit</button>
        </>
    )
}