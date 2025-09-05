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
        <div className="grid grid-cols-2 gap-20 items-center">
            <div className="text-right">
                <h2 className="alata text-[24px] sm:text-[48px]">{props.title}</h2>
            </div>
            
            <div className="text-left raleway">
                <p className="text-[16px] text-moon-yellow font-bold">{props.genre}</p>
                    
                        { props.link ? <a href={props.notes} target="_blank" className="text-[16px] italic"> read it<span className="text-moon-yellow"> here</span></a> : <p>{props.notes}</p> }
                <p className="text-[16px]">{props.description}</p>
            </div>
            
        </div>
        
    )
}