
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
        id: "n2",
        name: "N2",
        year: "2023",
        paths: ["/comics/n2/00.png", "/comics/n2/01.png", "/comics/n2/02-03.png", "/comics/n2/04-05.png", "/comics/n2/06-07.png", "/comics/n2/08-09.png", "/comics/n2/10-11.png", "/comics/n2/12-13.png", "/comics/n2/14-15.png", "/comics/n2/16.png"],
        priority: true,
    },
    {
        id: "rot",
        name: "rot",
        year: "2024",
        paths: ["/comics/rot/0.png", "/comics/rot/1.png", "/comics/rot/2.png", "/comics/rot/3.png", "/comics/rot/4.png", "/comics/rot/5.png", "/comics/rot/6.png", "/comics/rot/7.png"],
        priority: true,
    },
    {
        id: "ebb",
        name: "ebb",
        year: "2024",
        paths: ["/comics/ebb/0.png", "/comics/ebb/1.png", "/comics/ebb/2.png", "/comics/ebb/3.png", "/comics/ebb/4.png", "/comics/ebb/5.png", "/comics/ebb/6.png", "/comics/ebb/7.png"],
    },
    {
        id: "meander",
        name: "Meander",
        year: "2020",
        paths: ["/comics/meander/0.png", "/comics/meander/1.png", "/comics/meander/2.png", "/comics/meander/3.png", "/comics/meander/4.png", "/comics/meander/5.png", "/comics/meander/6.png", "/comics/meander/7.png", "/comics/meander/8.png", "/comics/meander/9.png", "/comics/meander/10.png", "/comics/meander/12.png"],
    },
    {
        id: "fascinate",
        name: "Fascinate",
        year: "2023",
        paths: ["/comics/fascinate/0.png", "/comics/fascinate/1.png", "/comics/fascinate/2.png", "/comics/fascinate/3.png", "/comics/fascinate/4.png", "/comics/fascinate/5.png", "/comics/fascinate/6.png"]
    },
    {
        id: "desire",
        name: "Desire",
        year: "2022",
        paths: ["/comics/desire/0.png", "/comics/desire/1.png", "/comics/desire/2.png", "/comics/desire/3.png", "/comics/desire/4.png", "/comics/desire/5.png", "/comics/desire/6.png"]
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