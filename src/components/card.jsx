
export default function Card({device}) {

    //convert device object keys to array with Object.Keys, then iterate through length to find value of each field and/or if its blank

    return(
    <>
        <article className='container card' key={device.id}>
           {device.field["Restore Procedure"] !== "" ? <p>{device.field["Restore Procedure"]}</p> : <></>}
        </article>
      </>
    )

}