import ModalNotes from "./notes"

export default function Modal({modal,toggleModal}) {
    const properties = modal.data.json !== undefined ? Object.keys(modal.data.json) : []
    const backCard = properties?.slice(5,properties.length)
    const brand = modal.data.expand?.brand
    
    console.log(modal)
    console.log(brand)
    return(
        <dialog open={modal.open}>
            <article className="modal">
                <header>
                    <a href="#close" aria-label="Close" className="close" onClick={toggleModal}></a>
                    <h4 className="modal-title">{modal.data.json?.Model}</h4>
                </header>
                {backCard.map((property) => {
                    if(property === "Notes" || property === "Model") {
                        return
                    } else if(modal.data.json[property] !== ""){
                        return(
                        <div className="modal-tag" key={property}>
                            <strong >{property}:</strong> <p>{modal.data.json[property]}</p>
                        </div>
                    )
                    } else  {
                        return(
                        <></>
                        )
                    }
                })}
                {brand?.support_email ? 
                <div className="modal-tag">
                    <strong>Support Email:</strong> <p>{brand.support_email}</p>
                </div> : <></>}
                {brand?.support_number ? 
                <div className="modal-tag">
                    <strong>Support Number:</strong> <p>{brand.support_number}</p>
                </div> : <></>}
                {modal.data.json?.Notes == undefined ? []  : <ModalNotes notes={modal.data.json.Notes} />}
            </article>
        </dialog>
    )
}