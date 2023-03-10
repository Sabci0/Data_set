const jazz = [
    {
        name: 'Miles Dewey Davis',
        city: 'Stany Zjednoczone',
        musical_instrument: 'Trębacz',
        most_popular_song: 'Blue in Green',
        listeners: '6.808.384'

    },
    {
        name: 'Krzysztof Komeda',
        city: 'Poznan',
        musical_instrument: ['pianista', 'kompozytor'],
        most_popular_song: 'Sleep Save And Warm',
        listeners: '3.578.794'
    },
    {
        name: 'Bill Evans',
        city: 'Stany Zjednoczone',
        musical_instrument: 'Saksofonista',
        most_popular_song: 'Sunday at the Village Vanguard',
        listeners: '836.860'

    },
    {
        name: 'Zbigniew Seifert',
        city: 'Krakow',
        musical_instrument: ['skrzypek', 'saksofonista'],
        most_popular_song: 'East Of The Sun',
        listeners: '6.350.825'
    },
    {
        name: 'Louis Armstrong',
        city: 'Stany Zjednoczone',
        musical_instrument: ['trębacz', 'wokalista', 'kompozytor'],
        most_popular_song: 'What a Wonderful World',
        listeners: '2.180.922'
    },
    {
        name: 'Zbigniew Namysłowski',
        city: 'Warszawa',
        musical_instrument: ['saksofonista', 'kompozytor', 'aranżer'],
        most_popular_song: 'Astigmatic',
        listeners: '2.470.357'
    }

]
function characterConversion(elements){

        for (const element of elements){
            element.listeners = Number(element.listeners.replace(/\./g, ''))
        }
        return elements
}


//1. Wyświetl imiona wykonawców, które się urodzili w Stanach Zjednoczonych i są kompozytorami, posortuj ich w zależności od ilości słuchaczy.

function getNames(elements){
    characterConversion(elements);
    return elements.filter(({city, musical_instrument}) => city === 'Stany Zjednoczone' && musical_instrument.includes('kompozytor') ).sort((a,b) => b.listeners - a.listeners).map(({name}) => name);
}


//2. Wyświetl imię i najpopularniejszy utwór, który ma najwięcej słuchaczy ze wszystkich.

function getBestHIT(elements){
    characterConversion(elements);
    elements.sort((a,b) => b.listeners - a.listeners)
    return elements[0].name + ' - ' + elements[0].most_popular_song
}

//3. Wyświetl imiona polskich wykonawców, posortuj według popularności i większej nazwy popularnego utworu.

function getPolishPerformers(elements){
    characterConversion(elements);
    return elements.filter(({city})=> city !=='Stany Zjednoczone').sort((a,b) => b.listeners - a.listeners).map(({name,most_popular_song})=> name + ' - ' + most_popular_song)
}


