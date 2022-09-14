
export type GridItem = {
    paths: string[];
    x: number;
    z: number;
}

const items: GridItem[] = [
    { paths: ["/illustration/yc-cover.png"], x: 0, z: 0 },
    { paths: ["/illustration/ispy.png"], x: 0, z: 5 },
    { paths: ["/illustration/fish-1.png", "/illustration/fish-2.png"], x: 0, z: 10 },
    { paths: ["/illustration/vast.png"], x: 0, z: 15 },
    { paths: ["/illustration/away-from-the-rain.png"], x: 0, z: 20 },
    { paths: ["/illustration/fatt-sun.png"], x: 0, z: 25 },

    { paths: ["/illustration/eel.png"], x: 1, z: 0 },
    { paths: ["/illustration/bus-1.png"], x: 1, z: 5 },
    { paths: ["/illustration/mail-2.png"], x: 1, z: 10 },
    { paths: ["/illustration/critter-crab.png", "/illustration/critter-moth.png"], x: 1, z: 15 },
    { paths: ["/illustration/critter-shrimp.png", "/illustration/critter-hermit.png"], x: 1, z: 20 },
    { paths: ["/illustration/vending-2.png"], x: 1, z: 25 },
    { paths: ["/illustration/forged.png"], x: 1, z: 30 },

    { paths: ["/illustration/bus-2.png"], x: 2, z: 0 },
    { paths: ["/illustration/roadtrip-bison.png"], x: 2, z: 5 },
    { paths: ["/illustration/deer.png"], x: 2, z: 10 },
    { paths: ["/illustration/phone-1.png"], x: 2, z: 15 },
    { paths: ["/illustration/phone-2.png"], x: 2, z: 25 },
    { paths: ["/illustration/krz.png"], x: 2, z: 35 },
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