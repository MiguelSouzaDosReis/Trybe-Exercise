let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index++) {
    for (let mutipliction = 0; mutipliction < index;mutipliction--) {
        let results = numbers[index] * numbers[mutipliction]
        console.log(results)
        break
}
}