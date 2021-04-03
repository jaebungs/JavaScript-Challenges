const lowerAndHyten = (sentence) => {
    return sentence.replace(/\s+/g, '-').toLowerCase()
}

console.log(lowerAndHyten('I Got A Programming Job!!'))