import writingData from "./writingData"
import Work from "./Work"

export default function Writing() {
    const workElements = writingData.map(writing => {
        return (
            <Work
                key={writing.id}
                title={writing.title}
                genre={writing.genre}
                description={writing.description}
                notes={writing.notes}
                link={writing.link}
            />
        )
    })

    return (
        <div className="flex flex-col justify-items-center items-center gap-10">
            {workElements}
        </div>
    )
}