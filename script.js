const names = ['Gumbo', 'Fluffy', 'Pancake', 'Sniffles', 'Rip Van Winkle', 'Jellybean', 'Smelissa', 'Jimbo', 'Booger', 'Wizard', 'Duggar', 'OctoMom']
const occupations = ['Tattoo Artist', 'Taste Tester', 'Dog Walker', 'Zumba Instructor', 'Unicycler', 'Clown', 'Scrapbooker', 'Crosswalk Attendant', 'HOA President', 'MeterMaid'] 
const freelancers = [
    {name: 'Gumbo', price: 25, occupation: 'Tattoo Artist'},
    {name: 'Fluffy', price: 37, occupation: 'Taste Tester'},
]

const maxLength = 15

function addFreelancer() {

    const name = names[Math.floor(Math.random() * names.length)]
    const occupation = occupations[Math.floor(Math.random() * occupations.length)]
    const price = Math.floor(Math.random() * 100)

    freelancers.push({name, price, occupation})
}

console.log(freelancers)

function render() {

    const averagePrice = document.querySelector('#average-price')
    const tableBody = document.querySelector('#table-body')

    const rowObjects = freelancers.map((freelancer) => {

        const newRow = document.createElement('tr')
        const {name, price, occupation} = freelancer

        const freelancerName = document.createElement('td')
        freelancerName.innerText = name

        const freelancerOccupation = document.createElement('td')
        freelancerOccupation.innerText = occupation

        const freelancerPrice = document.createElement('td')
        freelancerPrice.innerText = '$' + price

        newRow.append(freelancerName, freelancerOccupation, freelancerPrice)
        return newRow
    })
    tableBody.replaceChildren(...rowObjects)
    
    const newAverage = averagePriceCalculation()
    averagePrice.innerText = '$' + newAverage
}

function averagePriceCalculation() {
    const total = freelancers.reduce((subtotal, current) => subtotal + current.price, 0)
return Math.round(total / freelancers.length)
}

const addFreelancerInterval = setInterval(() => {
    addFreelancer()
    if (freelancers.length >= maxLength) {
        clearInterval(addFreelancerInterval)
    }
    render()
} , 2500)

render()