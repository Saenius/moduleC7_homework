const revertString = require('./index.js');

describe('', () => {
    it('reverse the string #1', () => {
        const result = revertString('Hello! I\'m Denis!')
        expect(result).toBe('!sineD m\'I !olleH')
    })
    it('reverse the string #2', () => {
        const result = revertString('H\nE\nL\nL\nO\n! ')
        expect(result).toBe('!\nO\nL\nL\nE\nH')
    })

})