interface writingData {
    key: number;
    title: string;
    genre: string;
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
                <p className="text-[30px]">{props.genre}</p>
                { props.link ? <a href={props.notes} className="text-[16px]">read it here</a> : <p>{props.notes}</p> }
                <p className="text-[16px]">{props.description}</p>
            </div>
            
        </div>
        
    )
}