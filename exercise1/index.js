function evenNumber(array) {

    let result = [];

    for (const number of array) {
        const element = number % 2;
        if (element == 0)
            // console.log(number);
            result.push(number)
    }
        return result
}

const data = [2, 9, 3, 10, 5, 4]

console.log(evenNumber(data));