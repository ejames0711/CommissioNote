import search from '../assets/search.svg'

export default function Search({searchData,setSearchData,getDevices}) {

    const handleInput = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setSearchData(lowerCase)
    }

    return(
        <div className='search'>
            <input type="text" placeholder='Search Devices...' onChange={handleInput}/><img src={search} alt=""  className='search-img' onClick={() => getDevices(searchData)} />
        </div>
    )
}