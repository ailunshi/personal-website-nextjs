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
                <h2 className="alata text-[48px]">{props.title}</h2>
            </div>
            
            <div className="text-left raleway">
                <p className="text-[16px] text-moon-yellow font-bold">{props.genre}</p>
                    
                        { props.link ? <a href={props.notes} target="_blank" className="text-[16px] italic"> read it<a className="text-moon-yellow"> here</a></a> : <p>{props.notes}</p> }
                <p className="text-[16px]">{props.description}</p>
            </div>
            
        </div>
        
    )
}