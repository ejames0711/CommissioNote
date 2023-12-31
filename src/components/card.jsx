
export default function Card({device,toggleModal}) {

    const columns = Object.keys(device.json)
    const frontCard = columns.slice(0,7)

    
    return(
    <>
      
        <article className='container card' key={device.id}>
        <header><strong>{device.json.Model}</strong></header>
           {frontCard.map((property) => {
            if(property === "Model") {
              return
            } else if(device.json[property] !== ""){
              return(
                <div key={property}>
                  <strong>{property.replace("_"," ")}: </strong> <p>{device.json[property]}</p>
                </div>
            )
            } else{
              return(
                <></>
              )
            }
           })}
           <p>{device.support_number}</p>
           <button className="outline" onClick={() => {
            toggleModal(device)
          }}>More Info</button>
        </article>
      </>
    )

}