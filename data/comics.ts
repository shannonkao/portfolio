
export type ListItem = {
    id: string;
    name: string;
    year: string;
    medium?: string;
    description?: string;
    paths: string[];
    href?: string;
    priority?: boolean;
}

export const comics: ListItem[] = [
    {
        id: "meander",
        name: "Meander",
        year: "2020",
        paths: ["/comics/meander/0.png", "/comics/meander/1.png", "/comics/meander/2.png", "/comics/meander/3.png", "/comics/meander/4.png", "/comics/meander/5.png", "/comics/meander/6.png", "/comics/meander/7.png", "/comics/meander/8.png", "/comics/meander/9.png", "/comics/meander/10.png", "/comics/meander/12.png"],
        priority: true,
    },
    {
        id: "desire",
        name: "Desire",
        year: "2022",
        paths: ["/comics/desire/0.png", "/comics/desire/1.png", "/comics/desire/2.png", "/comics/desire/3.png", "/comics/desire/4.png"]
    },
    {
        id: "spring",
        name: "spring",
        year: "2021",
        paths: ["/comics/spring.png"]
    },
    {
        id: "piranesi",
        name: "Scenes from Susanna Clarke's 'Piranesi'",
        year: "2020",
        paths: ["/comics/piranesi-1.png", "/comics/piranesi-2.png"]
    },
    {
        id: "caves",
        name: "Echoes",
        year: "2019",
        paths: ["/comics/caves-1.png", "/comics/caves-2.png"]
    },
    {
        id: "remains",
        name: "Remains",
        year: "2019",
        paths: ["/comics/remains-1.png", "/comics/remains-2.png"]
    },
    {
        id: "setting-fires",
        name: "Friends at the Table - Setting Fires",
        year: "2018",
        paths: ["/comics/fires-1.png", "/comics/fires-2.png"]
    },
    {
        id: "summer",
        name: "Summer",
        year: "2018",
        paths: ["/comics/summer-1.png", "/comics/summer-2.png"]
    },
    {
        id: "stairs",
        name: "Falling down the stairs of your smile",
        year: "2019",
        paths: ["/comics/rgu-stairs.jpg"]
    },
    {
        id: "winter",
        name: "for the coldest months",
        year: "2019",
        paths: ["/comics/winter.png"]
    },
    {
        id: "smoke",
        name: "Smoke",
        year: "2018",
        paths: ["/comics/smoke.png"]
    },
    {
        id: "still",
        name: "Still",
        year: "2018",
        paths: ["/comics/still/0.png", "/comics/still/1.png", "/comics/still/2.png", "/comics/still/3.png", "/comics/still/4.png", "/comics/still/5.png", "/comics/still/6.png"]
    },
]