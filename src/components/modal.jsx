
export default function Modal({modal,toggleModal}) {


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