import arrayAnalysis from './arrayAnalysis'

test('returns average, min, max and length of an array', () =>{
    expect(arrayAnalysis([1,8,3,4,2,6])).toEqual({
        average: 4,
        length: 6,
        min: 1,
        max: 8
    })

    expect(arrayAnalysis([1,8,3,4,2,6])).not.toEqual({
        average: 4,
        length: 5,
        min: 1,
        max: 8
    })
})