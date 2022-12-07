const { input } = require('./input');

const arrays = [
    ['V', 'N', 'F', 'S', 'M', 'P', 'H', 'J'],
    ['Q', 'D', 'J', 'M', 'L', 'R', 'S'],
    ['B', 'W', 'S', 'C', 'H', 'D', 'Q', 'N'],
    ['L', 'C', 'S', 'R'],
    ['B', 'F', 'P', 'T', 'V', 'M'],
    ['C', 'N', 'Q', 'R', 'T'],
    ['R', 'V', 'G'],
    ['R', 'L', 'D', 'P', 'S', 'Z', 'C'],
    ['F', 'B', 'P', 'G', 'V', 'J', 'S', 'D'],
]

function solution(input) {
    input.forEach(row => {
        row = row.replace('move', '').replace('from', '').replace('to', '').trim().split(' ')
        const creates = parseInt(row[0])
        const from = parseInt(row[2]) - 1
        const to = parseInt(row[4]) - 1

        let currentArray = []
        for (let i = 1; i <= creates; i++) {
            let element = arrays[from].shift()
            currentArray.push(element)
        }

        arrays[to] = currentArray.concat(arrays[to])
    });

    let result = ''
    arrays.forEach(array => {
        result += array[0]
    })

    return result
}


console.log(solution(input))