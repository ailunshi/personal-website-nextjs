type Work = {
    id: number;
    title: string;
    description: string;
    notes: string;
    link: boolean;
};

const data: Work[] = [
    {
        id: 1,
        title: "BEL E KYRE",
        description: "YA/Adult Fantasy",
        notes: "on submission",
        link: false
    },
    {
        id: 2,
        title: "in the highlands",
        description: "Fantasy Short Story",
        notes: "https://ailun.substack.com/p/in-the-highlands",
        link: true
    },
    {
        id: 3,
        title: "pigeons",
        description: "Flash Memoir",
        notes: "https://tintjournal.com/flash-nonfiction/pigeons",
        link: true
    },
    {
        id: 4,
        title: "testing",
        description: "test",
        notes: "https://tintjournal.com/flash-nonfiction/pigeons",
        link: true
    },
    {
        id: 5,
        title: "testing",
        description: "test",
        notes: "https://tintjournal.com/flash-nonfiction/pigeons",
        link: true
    }
]

export default data;