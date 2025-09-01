interface writingData {
    key: number;
    title: string;
    description: string;
    notes: string;
    link: boolean;
}

export default function Work(props: writingData) {

    return (
        <div className="grid grid-cols-2 gap-35 items-center">
            <div className="text-right">
                <h2 className="alata text-[64px]">{props.title}</h2>
            </div>
            
            <div className="text-left raleway">
                <p className="raleway text-[30px]">{props.description}</p>
                { props.link ? <a href={props.notes} className="text-[16px]">read it here</a> : <p>{props.notes}</p> }
            </div>
            
        </div>
        
    )
}