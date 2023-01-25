const trucks = [
    {
        truck: "Scania",
        hp: "560",
        truck_driver: "Janusz",
        weight: 40000,
        favourite_meal: ["Pizza", "Burger", "Fries"]
    },
    {
        truck: "Renault",
        hp: "420",
        truck_driver: "Jarek",
        weight: 35000,
        favourite_meal: ["Kebab", "Burger", "Fries"]
    },
    {
        truck: "Volvo",
        hp: "700",
        truck_driver: "Zenek",
        weight: 37000,
        favourite_meal: ["Kebab", "Burger", "Chciken"]
    },
    {
        truck: "Mercedes",
        hp: "460",
        truck_driver: "Jurek",
        weight: 16000,
        favourite_meal: ["Bigos", "Burger", "Fries"]
    },
    {
        truck: "Man",
        hp: "440",
        truck_driver: "Donald",
        weight: 20000,
        favourite_meal: ["Pizza", "Steak", "Ice cream"]
    },
    {
        truck: "Iveco",
        hp: "380",
        truck_driver: "Antoni",
        weight: 25000,
        favourite_meal: ["Pizza", "Steak", "Spaghetti"]
    },
]


// 1. Wyświetl nazwy ciężarówek posortowane według wagi od najmniejszej do najwiekszej.
function hasMostOffspring(persons){
    function offspringsSort(a, b) {
        return b.weight - a.weight
    }
    persons.sort(offspringsSort)
    console.log(persons.map((persons) => persons.truck).join(', '))
}


// 2. Wyświetl ciężarówki z mocą powyżej 450 hp  i imiona szoferów.
 function getAgeOfPeopleWithNameLengthGreaterThan5(persons){
     const ageArray = [];


    for (const person of persons){
        if ( 450 < Number(person.hp)){
            ageArray.push(person.truck)
        }
    }
     return ageArray
}


// 3. Wyświetl szoferów na literę J oraz ich ulubione potrawy.

