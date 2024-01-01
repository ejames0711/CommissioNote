
export default function Modal({modal,toggleModal}) {

    //populate modal data by making api request to db filtered by given specific device when pressing card button

    return(
        <dialog open={modal}>
            <article>
                <header>
                    <a href="#close" aria-label="Close" className="close" onClick={toggleModal}></a>
                </header>
                <h3>Hello!</h3>
            </article>
        </dialog>
    )
}