const {sum,sub,greaterThanZero} = require('./FuncTests')


test('Should add 1 and 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
});

test('Should subtract 2 from 1 to equal 1', () => {
    expect(sub(2,1)).toBe(1)
});

test('Should return true if 5 is greater than 0', () => {
    expect(greaterThanZero(5)).toBeTruthy()
});