import Card from "./card"

export default function CardDisplay({devices,toggleModal}){
    return(
        <div className="flex flex-col justify-center items-center gap-10">
            {devices.map((device) => (
                <Card key={device.id} 
                device={device}
                toggleModal={toggleModal}
                />
            ))}
        </div>
    )
}