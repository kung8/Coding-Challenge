function sum(nums) {
    let exc = []
    let arr = nums.toLowerCase().split(/[abcdefghijklmnopqrstuvwzyz,\[!\n;/.\]?*&']/)
    // console.log(arr)
    let finalSum = arr.map(num => {
        num = +num
        if (!num || num > 1000) {
            num = 0
        } else if (num < 0) {
            exc.push(num)
            num = 0
        }
        return num
    }).reduce((total, num) => {
        return total + num
    }, 0)
    // alert(exc)
    return finalSum
}

//General Function
describe('sum function', () => {
    test('datatype of sum should be function', () => expect(typeof sum).toBe('function'))

    test('parameter should be a string', () => {
        let num = '1'
        expect(typeof num).toBe('string')
    })
})

//Problem 1
describe('Problem One - Two Numbers Max', () => {
    test('length of two number string', () => {
        let num = '1,20'
        let arr = num.toLowerCase().split(/[abcdefghijklmnopqrstuvwzyz,\[!\n;/.\]?*&']/)
        let leng = arr.length
        expect(leng).toBe(2)
    })

    test('invalid or missing number', () => expect(sum('5,tytyt')).toBe(5))

    test('invalid or missing number', () => expect(sum('5,[]')).toBe(5))

    test('invalid or missing number', () => expect(sum('')).not.toBe(5))

    test('invalid or missing number', () => expect(sum('')).toBe(0))
})

//Problem 2 
describe('Problem Two - More Than 2 Numbers', () => {
    let num1 = '1,23'
    let num2 = '1,2,3'
    test('more than two numbers', () => {
        let arr = num1.toLowerCase().split(/[abcdefghijklmnopqrstuvwzyz,\[!\n;/.\]?*&']/)
        let leng = arr.length
        expect(leng).not.toBe(3)
    })
    test('more than two numbers', () => {
        let arr = num2.toLowerCase().split(/[abcdefghijklmnopqrstuvwzyz,\[!\n;/.\]?*&']/)
        let leng = arr.length
        expect(leng).toBe(3)
    })

    test('typeof result', () => expect(typeof sum(num2)).toBe('number'))

    test('result of function', () => expect(sum(num2)).toBe(6))
})

//Problem 3 
describe('Problem Three - New Line Character', () => {
    let num = '1,2,3\n1'

    test('input has new line character', () => expect(num.includes('\n')).toBe(true))

    test('result of function', () => expect(sum(num)).toBe(7))
})

//Problem 4
describe('Problem Four - Negative Numbers', () => {
    let num1 = '-1,1,2'

    test('input has a negative number', () => expect(num1.includes('-')).toBe(true))

    test('result of function', () => expect(sum(num1)).toBe(3))
})

//Problem 5
describe('Problem Five - Greater Than 1000', () => {
    let num1 = '1000,1'
    let num2 = '1001,1'

    test('input does not have number greater than 1000', () => {
        let arr = num1.toLowerCase().split(/[abcdefghijklmnopqrstuvwzyz,\[!\n;/.\]?*&']/)
        let check1000 = arr.map(elem => elem = +elem).filter(num => num > 1000)
        expect(check1000.length).toBe(0)
    })

    test('input has number greater than 1000', () => {
        let arr = num2.toLowerCase().split(/[abcdefghijklmnopqrstuvwzyz,\[!\n;/.\]?*&']/)
        let check1000 = arr.map(elem => elem = +elem).filter(num => num > 1000)
        expect(check1000.length > 0).toBe(true)
    })

    test('sum of input greater than 1000', () => expect(sum(num2)).toBe(1))
})

//Problem 6 
describe.only('Problem Six - Single Custom Delimiter ',()=>{
    let num = '//;\n2;5'
    test('param has single delimiter',()=>expect(num.includes('//')).toBe(true))
    test('result of function',()=>expect(sum(num)).toBe(7))
})

//Problem 7 
describe.only('Problem Six - Delimiter',()=>{
    let num = '//[***]\n11***22***33'
    test('param has delimiter of any length',()=>expect(num.includes('***')).toBe(true))
    test('result of function',()=>expect(sum(num)).toBe(66))    
})

//Problem 8 
describe.only('Problem Six - Multiple Delimiter ',()=>{
    let num = '//[*][!!][rrr]\n11rrr22*33!!44'
    test('param has multiple delimiter',()=> expect(num.includes('rr' || ']\n')).toBe(true))
    test('result of function',()=>expect(sum(num)).toBe(110))
})