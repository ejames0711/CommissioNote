import ModalNotes from "./notes"

export default function Modal({modal,toggleModal}) {
    const properties = modal.data.json !== undefined ? Object.keys(modal.data.json) : []
    const backCard = properties?.slice(5,properties.length)
    const brand = modal.data.expand?.brand
    

    return(
        <div className={modal.open ? "absolute w-full h-screen bg-[rgb(0,0,0,0.5)] flex justify-center items-center top-0 left-0 overflow-hidden" : ""}>
            <article tabindex="-1" className = {modal.open ? "relative w-screen sm:w-2/3 lg:w-1/3 overflow-y-auto justify-between p-6 flex flex-col h-2/3 border-2 border-neutral-300 text-neutral-300 text-xl text-center rounded bg-slate-800" : "hidden"}>
                <header>
                    <a href="#close" aria-label="Close" className="absolute top-0 pt-4 pl-4 text-4xl font-bold left-1" onClick={toggleModal}>X</a>
                    <h4 className="text-2xl font-bold">{modal.data.json?.Model}</h4>
                </header>
                {backCard.map((property) => {
                    if(property === "Notes" || property === "Model") {
                        return
                    } else if(modal.data.json[property] !== ""){
                        return(
                        <div key={property}>
                            <strong >{property.replace("_"," ")}: </strong> <p>{modal.data.json[property]}</p>
                        </div>
                    )
                    } else  {
                        return(
                        <></>
                        )
                    }
                })}
                {brand?.support_email ? 
                <div >
                    <strong>Support Email:</strong> <p>{brand.support_email}</p>
                </div> : <></>}
                {brand?.support_number ? 
                <div>
                    <strong>Support Number:</strong> <p>{brand.support_number}</p>
                </div> : <></>}
                {modal.data.json?.Notes == undefined ? []  : <ModalNotes notes={modal.data.json.Notes} />}
            </article>
        </div>
    )
}