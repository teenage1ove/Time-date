const displayOutput = document.querySelector('.time__display')
let mode = 'full'
const fullBtn = document.querySelector('.time__button_full')
const dateBtn = document.querySelector('.time__button_data')
const timeBtn = document.querySelector('.time__button_time')

function bindMode(name) {
    return function() {
        mode = name
        update()
    }
}

fullBtn.onclick = bindMode('full')

dateBtn.onclick = bindMode('date')

timeBtn.onclick = bindMode('time')

setInterval(update, 1000)
update()

function update() {
    displayOutput.textContent = format(mode)
}

function format(formatMode) {
    const now = new Date()
    switch (formatMode) {
        case 'time': return now.toLocaleTimeString()
        case 'date': return now.toLocaleDateString()
        case 'full': return now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
        default: return now.toLocaleDateString()
    }
}

let person = {
    age: 29,
    jojo: 'no',
    name: 'Kirill',
    method() {
        console.log(7)
    }, 
}

const {age = 7,name: firstName,jojo} = person

// console.log(age, firstName, jojo)

// for (let key in person) {
//     console.log(person[key])
// }

Object.keys(person).forEach((key) => {
    console.log(person[key])
})
