const { input } = require('./input');

function solution(input) {
    let current = 0;
    let max = [];

    input.forEach(element => {
        if (!isNaN(element)) {
            current += element
        } else {
            max.push(current)
            current = 0;
        }
    });

    max.sort((a, b) => (b - a))
    return max[0] + max[1] + max[2]
}


console.log(solution(input))