
export default function Card({device,toggleModal}) {

    const columns = Object.keys(device.field)
    const frontCard = columns.slice(0,5)

    
    return(
    <>
      
        <article className='container card' key={device.id}>
        <header><strong>{device.field.Model}</strong></header>
           {frontCard.map((property) => {
            if(property === "Model") {
              return
            } else if(device.field[property] !== ""){
              return(
                <div className="tag" key={property}>
                <strong>{property}:</strong> <p>{device.field[property]}</p>
                </div>
            )
            } else{
              return(
                <></>
              )
            }
           })}
           <button className="outline" onClick={() => {
            toggleModal(device)
          }}>More Info</button>
        </article>
      </>
    )

}