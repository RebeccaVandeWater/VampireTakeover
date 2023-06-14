// @ts-nocheck
const locations = [
    {
        id: 'theater',
        picture: '🎭'
    },
    {
        id: 'circus',
        picture: '🎪'
    },
    {
        id: 'amusementPark',
        picture: '🎢'
    },
    {
        id: 'track',
        picture: '🏟️'
    },
    {
        id: 'hotel',
        picture: '🏨'
    },
    {
        id: 'skyScraper',
        picture: '🏤'
    },
    {
        id: 'hospital',
        picture: '🏥'
    },
    {
        id: 'factory',
        picture: '🏭'
    },
    {
        id: 'skyScraperTwo',
        picture: '🏢'
    },
    {
        id: 'hospitalTwo',
        picture: '🏣'
    },
    {
        id: 'disneyLand',
        picture: '🏰'
    },
    {
        id: 'skyScraperThree',
        picture: '🏬'
    },
    {
        id: 'hospitalThree',
        picture: '🏥'
    },
    {
        id: 'bank',
        picture: '🏦'
    },
    {
        id: 'clinic',
        picture: '🏪'
    }
]

const people = [
    {
        name: 'Jimbo',
        picture: '🤵',
        isHunter: false,
        location: ''
    },
    {
        name: 'Sammy',
        picture: '🙆‍♀️',
        isHunter: false,
        location: ''
    },
    {
        name: 'Michael',
        picture: '👷',
        isHunter: false,
        location: ''
    },
    {
        name: 'Robert',
        picture: '👷',
        isHunter: false,
        location: ''
    },
    {
        name: 'Terry',
        picture: '🤴',
        isHunter: false,
        location: '',
    },
    {
        name: 'Bill',
        picture: '🕵️',
        isHunter: false,
        location: '',
    },
    {
        name: 'Marie',
        picture: '👩‍🍳',
        isHunter: false,
        location: '',
    },
    {
        name: 'Mykeal',
        picture: '💂',
        isHunter: false,
        location: '',
    },
    {
        name: 'Phil',
        picture: '🧜‍♂️',
        isHunter: false,
        location: '',
    },
    {
        name: 'Wilson',
        picture: '🏐',
        isHunter: false,
        location: '',
    },
    {
        name: 'Wendy',
        picture: '👩‍⚕️',
        isHunter: false,
        location: '',
    },
    {
        name: 'Jeremy',
        picture: '🦹',
        isHunter: false,
        location: '',
    },
    {
        name: 'Mary',
        picture: '👩‍⚖️',
        isHunter: false,
        location: '',
    }
]

// TODO - ✅ randomize isHunter status
// TODO - ✅ move people locations (randomize?) after player click
// TODO - window.alert when the player clicks on a button where the vampire hunter is present
// TODO - ✅ change emoji for people who turn into a bat emoji
// TODO - If a bat emoji is in the same location as the hunter, window.alert
// TODO - Set the game to end IF all people have been turned OR player is slain by vampire hunter

function setHunter() {
    let randomPersonNumber = Math.floor(Math.random() * people.length)

    let randomPerson = people[randomPersonNumber]

    randomPerson.isHunter = true

    console.log("The hunter is: ", randomPerson)
    console.log(people)
}


function setLocation() {
    for (let i = 0; i < people.length; i++) {
        let person = people[i]

        let randomLocationNumber = Math.floor(Math.random() * locations.length)

        let randomLocation = locations[randomLocationNumber]

        person.location = randomLocation.id
    }

    showPeople()
}

function showPeople() {
    for (let i = 0; i < locations.length; i++) {
        let location = locations[i]

        let peopleLocation = people.filter(person => person.location == location.id)

        let peoplePicture = peopleLocation.map(person => person.picture)

        document.getElementById(location.id).innerText = peoplePicture
    }

}

function checkForHunter(peopleAtLocation) {

    console.log(peopleAtLocation)

    let hunter = peopleAtLocation.find(person => person.isHunter)

    let bat = peopleAtLocation.find(person => person.picture == '🦇')

    if (hunter != undefined && bat != undefined) {

        console.log(hunter.location)
        console.log(bat.location)

        if (hunter.location === bat.location) {
            window.alert('A bat has spotted the vampire hunter!')
        }

    }


}

function attackAtLocation(loc) {
    let peopleAtLocation = people.filter(person => person.location == loc)

    checkForHunter(peopleAtLocation)

    for (let i = 0; i < peopleAtLocation.length; i++) {
        let person = peopleAtLocation[i]
        person.picture = '🦇'
    }

    setLocation()
}


setLocation()

setHunter()