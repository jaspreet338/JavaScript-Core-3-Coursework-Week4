function add(numbers) {
    let nmbrs = '0123456789';
    let numbersArr = []
    for(let char of numbers) {
        if(nmbrs.includes(char)) {
            numbersArr.push(Number(char))
        }
    }
    return numbersArr.reduce((num1, num2) => num1 + num2).toString()
}

module.exports = add