
export default function Card({device,toggleModal}) {

    const columns = Object.keys(device.json)
    const frontCard = columns.slice(0,7)

    return(
    <>
        <article className='flex flex-col items-center w-screen gap-2 p-6 text-center border-2 rounded md:w-2/3 lg:w-3/5 text-neutral-300 h-5/6 shadow-white border-cyan-900 bg-slate-800' key={device.id}>
        <header className="text-3xl"><strong>{device.json.Model}</strong></header>
           {frontCard.map((property) => {
            if(property === "Model") {
              return
            } else if(device.json[property] !== ""){
              return(
                <div className="p-4" key={property}>
                  <strong className="text-2xl">{property.replace("_"," ")}: </strong> <p className="text-xl">{device.json[property]}</p>
                </div>
            )
            } else{
              return(
                <></>
              )
            }
           })}
           <p>{device.support_number}</p>
           <button className="p-2 text-xl border-2 rounded hover:text-cyan-600 hover:border-cyan-600 border-cyan-700 text-cyan-700" onClick={() => {
            toggleModal(device)
          }}>More Info</button>
        </article>
      </>
    )

}