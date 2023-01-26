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
function hasMostOffspring(elements){
    function offspringsSort(a, b) {
        return b.weight - a.weight
    }
    elements.sort(offspringsSort)
    console.log(elements.map((elements) => elements.truck).join(', '))
}


// 2. Wyświetl ciężarówki z mocą powyżej 450 hp  i imiona szoferów.
const nameDriversOfLargeTrucks = (elements) => {
    const result = []

    for (const element of elements){
        if(element.hp > 450){
            result.push(element.truck + ' - ' + element.truck_driver)
        }
    }
    return result
}


// 3. Wyświetl szoferów na literę J oraz ich ulubione potrawy.

function favMealOfDriversByJ(elements){
    const result = []
    for (const element of elements){
        if(element.truck_driver[0] === 'J'){
            result.push(element.truck_driver + ' lubi jeść: ' + element.favourite_meal.join(', '))
        }
    }
    return result
}