const hipHopSongs1990s = [
    {
        artist: "Dr. Dre",
        recordLabel: "Death Row Records",
        song: "Nuthin' But a G Thang",
        peakChartPosition: "2",
        year: "1992"
    },
    {
        artist: "Snoop Doggy Dogg",
        recordLabel: "Death Row Records",
        song: "Gin and Juice",
        peakChartPosition: "8",
        year: "1993"
    },
    {
        artist: "Notorious B.I.G.",
        recordLabel: "Bad Boy Records",
        song: "Juicy",
        peakChartPosition: "27",
        year: "1994"
    },
    {
        artist: "Tupac Shakur",
        recordLabel: "Death Row Records",
        song: "Dear Mama",
        peakChartPosition: "9",
        year: "1995"
    },
    {
        artist: "The Fugees",
        recordLabel: "Ruffhouse/Columbia Records",
        song: "Killing Me Softly",
        peakChartPosition: "1",
        year: "1996"
    },
    {
        artist: "Puff Daddy",
        recordLabel: "Bad Boy Records",
        song: "I'll Be Missing You",
        peakChartPosition: "1",
        year: "1997"
    },
    {
        artist: "Jay-Z",
        recordLabel: "Roc-A-Fella Records",
        song: "Can't Knock The Hustle",
        peakChartPosition: "23",
        year: "1997"
    },
    {
        artist: "Lauryn Hill",
        recordLabel: "Ruffhouse/Columbia Records",
        song: "Doo Wop (That Thing)",
        peakChartPosition: "1",
        year: "1998"
    },
    {
        artist: "Outkast",
        recordLabel: "LaFace/Arista Records",
        song: "Rosa Parks",
        peakChartPosition: "55",
        year: "1998"
    },
    {
        artist: "Eminem",
        recordLabel: "Aftermath/Interscope Records",
        song: "My Name Is",
        peakChartPosition: "1",
        year: "1999"
    }
];

// 1. Jakie są imiona artystów, których piosenka zajęła przynajmniej 10 miejsce w liście przebojów 1993-1997, a ich tytuł ma od dwóch do czterech słów?

function getNames(elements){
    const nameList = []
    for (const element of elements){

        if (Number(element.year) >= 1993 &&
            Number(element.year) <= 1997 &&
            Number(element.peakChartPosition) <=10 &&
            element.song.split(" ").length >= 2 &&
            element.song.split(" ").length <= 4){

                nameList.push(element.artist)

        }
    }
    return nameList
}

// 2. Jakie są tytuły piosenek, które zajmowały pierwsze miejsce na liście przebojów w latach 1995-1999, oraz artyści, którzy je nagrali?

function SongsName(elements) {
    const bestSongs = []
    for (const element of elements){
        if (Number(element.peakChartPosition) === 1 &&
            Number(element.year) >= 1995 &&
            Number(element.year) <= 1999){
            bestSongs.push(element.artist + ' - ' + element.song)
        }
    }
    return bestSongs
}

// 3. Ile piosenek nagrali artyści z wytwórni płytowej "Death Row Records" w latach 1990-1995?

function deathRowRecordsSongs (elements){
    let i = 0
    for(const element of elements){
        if( Number(element.year) >= 1990 &&
            Number(element.year) <= 1995 &&
            element.recordLabel === "Death Row Records"){
                i += 1
        }
    }
    return i
}
