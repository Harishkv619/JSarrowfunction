const transformString = str => {
    const chars = [...str];

    const transformedChars = chars.map((char, index) => {
        return `${index}${char.toUpperCase()}`;
    });
  
    return transformedChars.join('');
};
  
const userInput = prompt('Enter a string:');
if (userInput !== null) {
    const result = transformString(userInput);
    document.write( `${result}`);
}