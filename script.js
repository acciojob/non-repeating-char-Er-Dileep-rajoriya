function firstNonRepeatedChar(str) {
  const charCount = {};
  
  // Count the frequency of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }
  
  return null; // Return null if no non-repeated character is found
}

// Do not change the code below
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
