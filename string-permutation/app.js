// Use recursion. 
// factorial with Scrabble
// possible word - car, cab, scar

function recursive (letter) {
    if (letter.length === 1) {
        return 1;
    }
    return letter.length * recursive(letter.slice(1));
}

console.log(recursive('omg24'));