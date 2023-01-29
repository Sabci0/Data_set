const football = [
    {
        team: "Real Madrid",
        foundingYear: 1902,
        nationality: "Spain",
        coach: {
            name: "Carlo Ancelotti",
            age: 63,
            nationality: "Italy"
        },
        titles: {
            ChampionsLeague: 13,
            LeagueTitles: 34,
        }
    },
    {
        team: "Barcelona",
        foundingYear: 1899,
        nationality: "Spain",
        coach: {
            name: "Xavier Hernández",
            age: 42,
            nationality: "Spain"
        },
        titles: {
            ChampionsLeague: 5,
            LeagueTitles: 26,
        }
    },
    {
        team: "Bayern Munich",
        foundingYear: 1900,
        nationality: "Germany",
        coach: {
            name: "Hansi Flick",
            age: 55,
            nationality: "Germany"
        },
        titles: {
            ChampionsLeague: 6,
            LeagueTitles: 31,
        }
    },
    {
        team: "Manchester United",
        foundingYear: 1878,
        nationality: "England",
        coach: {
            name: "Ole Gunnar Solskjaer",
            age: 46,
            nationality: "Norway"
        },
        titles: {
            ChampionsLeague: 3,
            LeagueTitles: 20,
        }
    },
    {
        team: "Paris Saint-Germain",
        foundingYear: 1970,
        nationality: "France",
        coach: {
            name: "Mauricio Pochettino",
            age: 49,
            nationality: "Argentina"
        },
        titles: {
            ChampionsLeague: 0,
            LeagueTitles: 8,
        }
    }
];

// 1. Która drużyna nigdy nie wygrała Ligi Mistrzów? Podaj nazwę klubu i ile lat minęło od jego powstania.

function getLosers(elements) {
    const y = new Date();
    return elements.filter(({titles}) => titles.ChampionsLeague === 0).map(({team, foundingYear}) =>[team, y.getFullYear() - foundingYear])

}

// 2. Posortuj kluby w kolejności od najstarszego do najmłodszego trenera. Wyświetl nazwy drużyn, jeśli klub i trener są tej samej narodowości, to nazwa klubu ma być cała wielkimi literami.
function teamSort(elements) {
    for (const element of elements.sort((a, b) => a.coach.age - b.coach.age)){
        if (element.nationality === element.coach.nationality) {
            console.log(element.team.toUpperCase())
        } else {
            console.log(element.team)
        }
    }
}


// 3. Wyświetl liczbę pucharów zdobytych przez kluby z Hiszpanii (zwykła liga + liga mistrzów)

function numberOfWins(elements) {
    return elements.filter(({nationality}) => nationality === "Spain").reduce((acc, ce) => acc + (ce.titles.ChampionsLeague + ce.titles.LeagueTitles),0)
}
