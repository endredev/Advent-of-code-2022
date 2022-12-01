const { input } = require('./input');

function solution(input) {
    let current = 0;
    let max = 0;

    input.forEach(element => {
        if (!isNaN(element)) {
            current += element
        } else {
            if (current >= max) {
                max = current
            }
            current = 0;
        }
    });

    return max
}


console.log(solution(input))