//Write a function to split a string and convert it into an array of words.
const string = 'I love arrays they are my favorite' 
// get the first letter from each word 
// add each word into an array 
function stringToArray(string) {
    let words = string
    .split(' ')
    words.map (word => word[0])
    .join('')
    
    console.log (words)

}

stringToArray(string)