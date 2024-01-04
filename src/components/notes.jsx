
export default function ModalNotes({notes}){
    let i = 1;
    return(
        <div className="notes">
        {notes.map((note) => (
            <details key={i++}>
                <summary>Note {i++}</summary>
                <p><strong>{note}</strong></p>
            </details>
        ))}
        </div>
    )
}