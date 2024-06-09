function transforming(str) {
    const length = str.length;

    if (length % 15 === 0) {
        // If the length is divisible by both 3 and 5 (i.e., 15)
        // Reverse the string and replace each character with its ASCII code
        return reverseString(str).split('').map(char => char.charCodeAt(0)).join(' ');
    }else if (length % 5 === 0) {
        // If the length is divisible by 5
        // Replace each character with its ASCII code
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    }
     else if (length % 3 === 0) {
        // If the length is divisible by 3
        // Reverse the string
        return reverseString(str);
    
    } else {
        // If the length is not divisible by 3 or 5
        // Return the original string
        return str;
    }
}

function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}



console.log(transforming("Chocolate Chip Cookie")); // Output will be: "eikooCpihCetalocohC"

console.log(transforming("Hamburger")); // Output will be: "regrubmaH"

console.log(transforming("Pizza")); // Output will be: "80 105 122 122 97"
