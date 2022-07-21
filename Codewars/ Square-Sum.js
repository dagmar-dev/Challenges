function squareSum(numbers) {
    return numbers.map((number) => number ** 2).reduce((a, b) => a + b, 0)

    
}

squareSum([1, 2, 3, 4])
