import writingData from "./writingData"
import Work from "./Work"

{/* set up json object instead? so then you don't have to edit info into the code*/}
{/* write up document with title and description + optional link 
    some kind of map to map items */}

export default function Writing() {
    const workElements = writingData.map(writing => {
        return (
            <Work
                key={writing.id}
                title={writing.title}
                description={writing.description}
                notes={writing.notes}
                link={writing.link}
            />
        )
    })
    
    console.log(`what are the ${workElements}`)


    return (
        <div className="flex flex-col justify-items-center items-center gap-10">
            {workElements}
        </div>
    )
}