const moment = require('moment');
require('moment-timezone');

let bday = moment("2003-01-15");
const now = moment()
let input1 = moment("2023-09-27");
let input2 = moment("2023-09-24");

function daysBetween(birthDate, currentDate) {
    const daysDifference = currentDate.diff(birthDate, 'days')

    const years = currentDate.diff(birthDate, 'years');
    birthDate.add(years, 'years');
    
    const months = currentDate.diff(birthDate, 'months');
    birthDate.add(months, 'months');
    
    const days = currentDate.diff(birthDate, 'days');

    const ymdResult = `${years} years, ${months} months, and ${days} days`;
    console.log(daysDifference)
    console.log('')
    console.log(ymdResult)
}

function closestDate(input1, input2) {
    const sorted1 = Math.abs(now.diff(input1, 'days'));
    const sorted2 = Math.abs(now.diff(input2, 'days'));

    if (sorted1 < sorted2) {
        console.log(`the closest date to now was input 1 ${input1.format('YYYY-MM-DD')}.`)
    } else {
        console.log(`the closest date to now was input 2 ${input2.format('YYYY-MM-DD')}.`)
    }
}

function dateOrder(input1, input2) {
    if (input1 < input2) {
        console.log(`input1 comes BEFORE input 2, input1 ${input1.format('YYYY-MM-DD')} -> input2 ${input2.format('YYYY-MM-DD')}.`)
    } else {
        console.log(`input1 comes AFTER input 2, input2 ${input2.format('YYYY-MM-DD')} -> input1 ${input1.format('YYYY-MM-DD')}.`)
    }
}

function timezoneLondon() {
    const londonTime = moment.tz('Europe/London')
    const formattedTime = londonTime.format('YYYY-MM-DD HH:mm:ss')
    console.log(`Current time in London: ${formattedTime}`);
}

daysBetween(bday, now)
console.log('')
closestDate(input1, input2)
console.log('')
dateOrder(input1, input2)
console.log('')
timezoneLondon()