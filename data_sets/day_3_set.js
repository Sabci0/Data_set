const ksw = [
    {
        name: "Damian Janikowski",
        height: "180.00cm",
        arm_range: "180.00cm",
        weight: "83,9KG",
        win_streak: {
            win: 7,
            loss: 5,
            draw: 0
        },
    },
    {
        name: "Borys Mańkowski",
        height: "170.00cm",
        arm_range: "178.00cm",
        weight: "155lb",
        win_streak: {
            win: 7,
            loss: 5,
            draw: 0
        },
    },
    {
        name: "Mariusz Pudzianowski",
        height: "6.1ft",
        arm_range: "195.00cm",
        weight: "120,2kg",
        win_streak: {
            win: 17,
            loss: 7,
            draw: 0
        },
    },
    {
        name: "Marcin Różalski",
        height: "188.00cm",
        arm_range: "181.00cm",
        weight: "265lb",
        win_streak: {
            win: 7,
            loss: 4,
            draw: 0
        },
    },
    {
        name: "Akop Szostak",
        height: "5.6ft",
        arm_range: "186.00cm",
        weight: "93kg",
        win_streak: {
            win: 0,
            loss: 2,
            draw: 0
        },
    },
    {
        name: "Michał Materla",
        height: "183.00cm",
        arm_range: "192.00cm",
        weight: "185lb",
        win_streak: {
            win: 21,
            loss: 7,
            draw: 0
        },
    },
]

function convertHeight(value) {
    units = {cm: 1, ft: 30.48};

    return parseInt(value) * (value.toLowerCase().endsWith('cm') ? units.cm : units.ft);
}

function convertWeight(value) {
    units = {kg: 1, lb: 0.45};

    return parseInt(value) * (value.toLowerCase().endsWith('kg') ? units.kg : units.lb);
}

// 1. Podaj imiona najcięższych zawodników.
const heaviestFighters = (elements) => {

    for (const element of elements) {
        if (element.weight.slice(3, 4) === 'lb'){
            const toKg = Number(element.weight.slice(0, -2)) * 0.45
            element.weight == toKg
        }

    }

    function weightSort(a, b) {
        return b.weight - a.weight
    }
    elements.sort(weightSort)
}

// 2. Podaj Imie zawodnika z najlepszym stosunkiem wygranych do przegranych starć.

const second = (elements) => elements.map((player) => ({name: player.name,
winStreakRatio: Math.round((player.win_streak.win / player.win_streak.loss) * 100) / 100}))
    .sort((player1, player2) => player2.winStreakRatio - player1.winStreakRatio)[0];


// 3. Podaj Imię zawodnika a najwyższym BMI(stosunek wzrostu do wagi).

function BMI(elements) {
    const sorted = elements.sort((p1, p2) => convertWeight(p2.weight) /
    convertHeight(p2.height) - convertWeight(p1.weight) / convertHeight(p1.height));

    return sorted.filter(({weight, height}) => convertWeight(weight) /
    convertHeight(height) === convertWeight(sorted[0].weight) /
    convertHeight(sorted[0].height)).map(({name}) => name);
}
