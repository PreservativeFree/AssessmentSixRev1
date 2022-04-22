const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('shuffleArray should return an array', () => {
        let arrayOne = [1,2,3,4,5]
        let result = shuffleArray(arrayOne)
        expect(result).toHaveProperty('length') //Array should contain a length property
    })

    test('shuffleArray should return an array', () => {
        let arrayOne = [1,2,3,4,5]
        let result = shuffleArray(arrayOne)
        expect(result.length).toEqual(arrayOne.length)  //expect lengths to be equal
    })

    test('shuffleArray should return an array with all items shuffled', () => {
        let arrayOne = [1,2,3,4,5]
        let result = shuffleArray(arrayOne)
        expect(arrayOne.join()).not.toEqual(result.join()) //On join, the first array should not equal the values of the second array
    })
})