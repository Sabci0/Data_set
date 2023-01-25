const data = [
    {
        name: 'Shrek',
        age: 106,
        offsprings: 3,
        city: 'the Swamp',
        hobbies: ['swamp', 'eating']
    },

    {
        name: 'Fiona',
        age: 23,
        offsprings: 3,
        city: 'the Swamp',
        hobbies: ['singing', 'shrek']
    },

    {
        name: 'Donkey',
        age: 22,
        offsprings: 5,
        city: 'Far Far Away',
        hobbies: ['dragons', 'shrek']
    },
    {
        name: 'Dragon',
        age: 1250,
        offsprings: 5,
        city: 'Far Far Away',
        hobbies: ['makeup', 'towers']

    },
    {
        name: 'Lord Farquaad',
        age: 571,
        offsprings: 0,
        city: 'Duloc',
        hobbies: ['power', 'mirrors']

    },
    {
        name: 'Puss in Boots',
        age: 20,
        offsprings: 3,
        city: 'Far Far Away',
        hobbies: ['gazpacho', 'working']
    }
]

// Podaj imiona postaci z najwieksza liczba dzieci
function hasMostOffspring(persons){
    function offspringsSort(a, b) {
        return b.offsprings - a.offsprings
    }
    persons.sort(offspringsSort)
    console.log(persons[0].name)
}

// Podaj imie pradawnego najstarszego stworzenia
function whoseOldest(persons){
    function offspringsSort(a, b) {
        return b.age - a.age
    }
    persons.sort(offspringsSort)
    console.log(persons[0].name)
}

// Podaj imiona postaci, ktore kochaja Shreka
const personsWhoLovesShrek = (elements) => elements
    .filter((element) => element.hobbies.includes('shrek'))
    .map((element) => element.name)
    .join(', ')
