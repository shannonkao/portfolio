
export type ListItem = {
    id: string;
    name: string;
    year: string;
    description?: string;
    paths: string[];
    href?: string;
}

export const comics: ListItem[] = [
    {
        id: "desire",
        name: "Desire",
        year: "2022",
        paths: ["/comics/desire/0.png", "/comics/desire/1.png", "/comics/desire/2.png", "/comics/desire/3.png", "/comics/desire/4.png"]
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
]