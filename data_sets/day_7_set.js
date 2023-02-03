scales = [
    {
        name: 'Minor pentatonic',
        formula: '1, 3b, 4, 5, 7b',
        chords: [
            {degree: '1', quality: 'min'},
            {degree: '3b', quality: 'maj'},
            {degree: '4', quality: 'sus'},
            {degree: '5', quality: 'min5#'},
            {degree: '7b', quality: 'sus'}
        ],
        quality: 'minor',
        examples: ['Shape of You', 'We Will Rock You']
    },
    {
        name: 'major Pentatonic',
        formula: '1, 2, 3, 5, 6',
        chords: [
            {degree: '1', quality: 'maj'},
            {degree: '2', quality: 'sus'},
            {degree: '3', quality: 'min5#'},
            {degree: '5', quality: 'sus'},
            {degree: '6', quality: 'min'},
        ],
        quality: 'Major',
        examples: ['Amazing Grace', 'Auld Lang Syne']
    },
    {
        name: 'major scale',
        formula: '1, 2, 3, 4, 5, 6, 7',
        chords: [
            {degree: '1', quality: 'maj'},
            {degree: '2', quality: 'min'},
            {degree: '3', quality: 'min'},
            {degree: '4', quality: 'maj'},
            {degree: '5', quality: 'maj'},
            {degree: '6', quality: 'min'},
            {degree: '7', quality: 'dim'},
        ],
        quality: 'major',
        examples: ['Ode To Joy', 'Country Roads']
    },
    {
        name: 'minor scale Aeolian',
        formula: '1, 2, 3b, 4, 5, 6b, 7b',
        chords: [
            {degree: '1', quality: 'min'},
            {degree: '2', quality: 'dim'},
            {degree: '3b', quality: 'maj'},
            {degree: '4', quality: 'min'},
            {degree: '5', quality: 'min'},
            {degree: '6b', quality: 'maj'},
            {degree: '7b', quality: 'maj'},
        ],
        quality: 'Minor',
        examples: ['I Was Made for Loving You', 'Losing My Religion']
    },
    {
        name: 'Minor harmonic Scale',
        formula: '1, 2, 3b, 4, 5, 6b, 7',
        chords: [
            {degree: '1', quality: 'min'},
            {degree: '2', quality: 'dim'},
            {degree: '3b', quality: 'aug'},
            {degree: '4', quality: 'min'},
            {degree: '5', quality: 'maj'},
            {degree: '6b', quality: 'maj'},
            {degree: '7', quality: 'dim'},
        ],
        quality: 'Minor',
        examples: ['All Along The Watchtower', 'bury a friend']
    },
    {
        name: 'dorian scale',
        formula: '1, 2, 3b, 4, 5, 6, 7b',
        chords: [
            {degree: '1', quality: 'min'},
            {degree: '2', quality: 'min'},
            {degree: '3b', quality: 'maj'},
            {degree: '4', quality: 'maj'},
            {degree: '5', quality: 'min'},
            {degree: '6', quality: 'dim'},
            {degree: '7b', quality: 'maj'},
        ],
        quality: 'minor',
        examples: ['Mad World', 'Scarborough Fair']
    },
    {
        name: 'blues scale',
        formula: '1, 2, 3b, 4, 5, 6, 7b',
        chords: [
            {degree: '1', quality: 'min'},
            {degree: '3b', quality: 'maj'},
            {degree: '4', quality: 'sus'},
            {degree: '4#', quality: 'maj5b'},
            {degree: '5', quality: 'min5#'},
            {degree: '7b', quality: 'sus'},
        ],
        quality: 'minor',
        examples: ['Money', 'Great Balls of Fire']
    },
    {
        name: 'lydian scale',
        formula: '1, 2, 3, 4#, 5, 6, 7',
        chords: [
            {degree: '1', quality: 'maj'},
            {degree: '2', quality: 'maj'},
            {degree: '3', quality: 'min'},
            {degree: '4#', quality: 'dim'},
            {degree: '5', quality: 'maj'},
            {degree: '6', quality: 'min'},
            {degree: '7', quality: 'min'},
        ],
        quality: 'major',
        examples: ['The Simpsons Theme', 'Jurassic Park Theme']
    },
    {
        name: 'bebop major scale',
        formula: '1, 2, 3, 4, 5, 5#, 6, 7',
        chords: [
            {degree: '1', quality: 'maj'},
            {degree: '2', quality: 'min'},
            {degree: '3', quality: 'min'},
            {degree: '4', quality: 'maj'},
            {degree: '5', quality: 'maj'},
            {degree: '5#', quality: 'dim'},
            {degree: '6', quality: 'min'},
            {degree: '7', quality: 'dim'},
        ],
        quality: 'major',
        examples: ['Ornithology', 'Donna Lee']
    }
]

// 1. Return an alphabetical list of all heptatonic (7 note) scales.

const return7 = scales.filter((scale) => scale.chords.length === 7).sort((a,b) => a.name.localeCompare(b.name))
// 2. Which chord quality/ies is the rarest among all the listed scales?
const quality = (elements) =>{
    resultquality = [];
    for (const element of elements){
        resultquality.push({'${element.chords.quality}':1})
    }
    return resultquality
}

// 3. Make an array with a list of all the provided examples in minor scales in order of ascending title length.