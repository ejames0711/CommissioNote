import Card from "./card"

export default function CardDisplay({devices}){
    console.log(devices)
    return(
        <>
            {devices.map((device) => (
                <Card key={device.id} device={device} />
            ))}
        </>
    )
}