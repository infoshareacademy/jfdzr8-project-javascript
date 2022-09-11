// ex.0

(function welcome () {
    console.log('Witamy na zajęciach projektowych z JS!')
})()

// ex.1

let team2 = []

// ex.2 

let janNowak = {
    name: 'Jan',
    lastName: 'Nowak',
    age: 18,
    width: 180,
    adress: {
        street: 'Długa',
        city: 'Warszawa',
        postCode: '01-110',
    },
    hobby: ['sport', 'music'],
    hasAnimal: true
    }


let igaSwiatek = {
    name: 'Iga',
    lastName: 'Swiatek',
    age: 22,
    width: 199,
    adress: {
        street: 'Zimowa',
        city: 'Zakopane',
        postCode: '22-222'
    },
    hobby: ['aviation', 'cars'],
    hasAnimal: true
}

let annaSzwarc = {
    name: 'Anna',
    lastName: 'Szwarc',
    age: 20,
    width: 149,
    adress: {
        street: 'Wąska',
        city: 'Warszawa',
        postCode: '01-111'
    },
    hobby: ['dance', 'music'],
    hasAnimal: false
    }

    let adamMałysz = {
        name: 'Adam',
        lastName: 'Małysz',
        age: 35,
        width: 160,
        adress: {
            street: 'Szeroka',
            city: 'Warszawa',
            postCode: "01-113,"
        },
        hobby: ['sport', 'music', 'tennis'],
        hasAnimal: true
        }
    
// ex.3

team2.push(janNowak, igaSwiatek, annaSzwarc, adamMałysz)
// console.table(team2)

// ex.4

function greetings (person){
    console.log(`Mam na imię ${team2[person].name}, mieszkam w mieście ${team2[person].adress.city}, moje hobby ${team2[person].hobby}`)
}

function greetingsKonkat(person) {
    console.log('Mam na imię ' + team2[person].name + ', mieszkam w mieście ' + team2[person].adress.city + ', moje hobby ' + team2[person].hobby )
}


greetings(0)
greetings(1)
greetings(2)
greetings(3)

greetingsKonkat(0)

// ex. 5

// function findLeader (id) {
//     console.log( team2[id]?.name)
// }

// findLeader(0)
//     team2.find(findLeader).["isGroupLeader"]: true

// ex. 6








function checkWidth (person, callBack) {
    let result = person.width > 175 ? true : false
    callBack(result)
}

function text (checkResult) {
    if (checkResult == true) {
        console.log("Jest wyższy/a niż 175 cm.")
    } else {
        console.log(`Nie jest i tyle`)
    }
}


checkWidth(adamMałysz, text)
