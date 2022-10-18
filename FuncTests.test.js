const {sum,sub} = require('./FuncTests')


test('Should add 1 and 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3)
});

test('Should subtract 2 from 1 to equal 1', () => {
    expect(sub(2,1)).toBe(1)
});