export default function sum(nums) {
    let exc = []
    let arr = nums.toLowerCase().split(/[abcdefghijklmnopqrstuvwzyz,\[!\n;/.\]?*&']/)
    // console.log(arr)
    let finalSum = arr.map(num => {
        num = +num
        if (!num || num > 1000 ) {
            num = 0
        } else if (num < 0){
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