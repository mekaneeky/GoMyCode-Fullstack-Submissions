let arr_to_sum = process.argv.slice(2)


console.log(arr_to_sum.reduce((a, b) => a + parseInt(b), 0))

