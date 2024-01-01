import Card from "./card"

export default function CardDisplay({devices,toggleModal}){
    return(
        <>
            {devices.map((device) => (
                <Card key={device.id} 
                device={device}
                toggleModal={toggleModal}
                />
            ))}
        </>
    )
}