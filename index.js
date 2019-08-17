function sum(nums) {
    let arr = nums.split(',')
    return arr.map(num => {
        num = +num
        if (!num) {
            num = 0
        }
        return num
    }).reduce((total, num) => {
        return total + num
    }, 0)
}