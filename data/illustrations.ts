
export type GridItem = {
    paths: string[];
    x: number;
    z: number;
}

const items: GridItem[] = [
    { paths: ["/illustration/yc-cover.png"], x: 0, z: 0 },
    { paths: ["/illustration/l_plants.jpg"], x: 0, z: 5 },
    { paths: ["/illustration/mail-2.png"], x: 0, z: 10 },
    { paths: ["/illustration/garden.png"], x: 0, z: 15 },
    { paths: ["/illustration/doorway.png"], x: 0, z: 20 },
    { paths: ["/illustration/discworld-tiffany.png"], x: 0, z: 25 },
    { paths: ["/illustration/roadtrip-golem.png"], x: 0, z: 30 },
    { paths: ["/illustration/lake.png"], x: 0, z: 35 },

    { paths: ["/illustration/roadtrip-bison.png"], x: 1, z: 0 },
    { paths: ["/illustration/mail-1.png"], x: 1, z: 5 },
    { paths: ["/illustration/krz.png"], x: 1, z: 10 },
    { paths: ["/illustration/fatt-icon-1.jpg", "/illustration/fatt-icon-2.jpg"], x: 1, z: 15 },
    { paths: ["/illustration/vast.png"], x: 1, z: 20 },
    { paths: ["/illustration/motel.png"], x: 1, z: 25 },
    { paths: ["/illustration/roadtrip-baishe.png"], x: 1, z: 30 },
    { paths: ["/illustration/city-1.png"], x: 1, z: 35 },

    { paths: ["/illustration/phone-1.png"], x: 2, z: 0 },
    { paths: ["/illustration/phone-2.png"], x: 2, z: 5 },
    { paths: ["/illustration/deer.png"], x: 2, z: 10 },
    { paths: ["/illustration/fatt-mystery.png"], x: 2, z: 15 },
    { paths: ["/illustration/fatt-sun.png"], x: 2, z: 20 },
    { paths: ["/illustration/forged.png"], x: 2, z: 25 },
    { paths: ["/illustration/roadtrip-jackal.png"], x: 2, z: 30 },
    { paths: ["/illustration/city-2.png"], x: 2, z: 35 },
]

const twoColumn: GridItem[][] = [[], []];
const zSort = items.sort((a, b) => { return a.z > b.z ? 1 : -1 });
for (let i = 0; i < items.length; i++) {
    twoColumn[i % 2].push(zSort[i]);
}

const threeColumn: GridItem[][] = [];
for (let i = 0; i < 3; i++) {
    threeColumn.push(
        items.filter(el => el.x == i)
            .sort((a, b) => { return a.z > b.z ? 1 : -1 }));
}

export const illustrations = threeColumn;
export const mobileIllustrations = twoColumn;