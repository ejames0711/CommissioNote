
export default function Modal({modal,toggleModal}) {
    const properties = modal.data.field !== undefined ? Object.keys(modal.data?.field) : []
    const backCard = properties?.slice(5,properties.length)
    
    return(
        <dialog open={modal.open}>
            <article className="modal">
                <header>
                    <a href="#close" aria-label="Close" className="close" onClick={toggleModal}></a>
                    <h4 className="modal-title">{modal.data.field?.Model}</h4>
                </header>
                {backCard.map((property) => {
                    if (modal.data.field[property] !== ""){
                        return(
                        <div className="tag">
                            <strong >{property}:</strong> <p>{modal.data.field[property]}</p>
                        </div>
                        )
                    } else {
                        return(
                            <></>
                        )
                    }
                })}
            </article>
        </dialog>
    )
}