type Work = {
    id: number;
    title: string;
    genre: string;
    notes: string;
    description: string;
    link: boolean;
};

const data: Work[] = [
    {
        id: 1,
        title: "BEL E KYRE",
        genre: "YA/Adult Fantasy Novel",
        notes: "On Submission",
        description: "College drop-out Jade Isel just got out of prison for drug trading but is pulled back into a drug heist to pay off her debts.",
        link: false
        //"A college drop-out and ex-convict trying to pay off her debts. A drug trader blackmailed to spy in the city's elite task force. One drug heist. ",
    },
    {
        id: 2,
        title: "in the highlands",
        genre: "Fantasy Short Story",
        notes: "https://ailun.substack.com/p/in-the-highlands",
        description: "",
        link: true
    },
    {
        id: 3,
        title: "pigeons",
        genre: "Flash Memoir",
        notes: "https://tintjournal.com/flash-nonfiction/pigeons",
        description: "",
        link: true
    },
    {
        id: 4,
        title: "testing",
        genre: "test",
        notes: "https://tintjournal.com/flash-nonfiction/pigeons",
        description: "",
        link: true
    },
    {
        id: 5,
        title: "testing",
        genre: "test",
        notes: "https://tintjournal.com/flash-nonfiction/pigeons",
        description: "",
        link: true
    }
]

export default data;