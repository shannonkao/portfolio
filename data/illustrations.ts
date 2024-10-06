
export type GridItem = {
    paths: string[];
    x: number;
    z: number;
    priority?: boolean;
}

const items: GridItem[] = [
    { paths: ["/illustration/ispy.png"], x: 0, z: 0, priority: true },
    { paths: ["/illustration/yc-cover.png"], x: 0, z: 5, priority: true },
    { paths: ["/illustration/fish-1.png", "/illustration/fish-2.png"], x: 0, z: 10, priority: true },
    { paths: ["/illustration/card-1.png"], x: 0, z: 15 },
    { paths: ["/illustration/mail-2.png"], x: 0, z: 20 },
    { paths: ["/illustration/vast.png"], x: 0, z: 25 },
    { paths: ["/illustration/away-from-the-rain.png"], x: 0, z: 30 },
    { paths: ["/illustration/fatt-sun.png"], x: 0, z: 35 },

    { paths: ["/illustration/swimon.png"], x: 1, z: 0, priority: true },
    { paths: ["/illustration/card-2.png"], x: 1, z: 5, priority: true },
    { paths: ["/illustration/krz.png"], x: 1, z: 10, priority: true },
    { paths: ["/illustration/bus-2.png"], x: 1, z: 15 },
    { paths: ["/illustration/critter-crab.png", "/illustration/critter-moth.png"], x: 1, z: 29 },
    { paths: ["/illustration/critter-shrimp.png", "/illustration/critter-hermit.png"], x: 1, z: 25 },
    { paths: ["/illustration/vending-2.png"], x: 1, z: 30 },
    { paths: ["/illustration/forged.png"], x: 1, z: 35 },

    { paths: ["/illustration/beet-3.png", "/illustration/beet-2.png"], x: 2, z: 0, priority: true  },
    { paths: ["/illustration/beet-1.png", "/illustration/beet-4.png"], x: 2, z: 2, priority: true  },
    { paths: ["/illustration/eel.png"], x: 2, z: 5, priority: true },
    { paths: ["/illustration/bus-1.png"], x: 2, z: 10 },
    { paths: ["/illustration/yoe-3.png"], x: 2, z: 15 },
    { paths: ["/illustration/window-cat.png"], x: 2, z: 20 },
    { paths: ["/illustration/roadtrip-bison.png"], x: 2, z: 25 },
    { paths: ["/illustration/phone-1.png"], x: 2, z: 30 },
    { paths: ["/illustration/phone-2.png"], x: 2, z: 35 },
    { paths: ["/illustration/yoe-1.png"], x: 2, z: 40 },
    { paths: ["/illustration/yoe-2.png"], x: 2, z: 45 },
    { paths: ["/illustration/deer.png"], x: 2, z: 50 },
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