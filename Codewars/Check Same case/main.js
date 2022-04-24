

function sameCase(a, b) {
    if (
        a.toUpperCase() === a.toLowerCase() ||
        b.toLowerCase() === b.toUpperCase()
    ) {
        console.log(-1)
    } else if (
        (a === a.toLowerCase() && b === b.toLowerCase()) ||
        (a === a.toUpperCase() && b === b.toUpperCase())
    ) {
        console.log(1)
    } else {
        return 0
    }
}


sameCase('c' , 'd')
sameCase('a','b')