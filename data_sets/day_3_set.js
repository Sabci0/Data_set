const ksw = [
    {
        name: "Damian Janikowski",
        height: "180.00cm",
        arm_range: "180.00cm",
        weight: "83,9KG",
        favourite_meal: {
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
        favourite_meal: {
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
        favourite_meal: {
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
        favourite_meal: {
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
        favourite_meal: {
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
        favourite_meal: {
            win: 21,
            loss: 7,
            draw: 0
        },
    },
]

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
// 3. Podaj Imię zawodnika a najwyższym BMI(stosunek wzrostu do wagi).
