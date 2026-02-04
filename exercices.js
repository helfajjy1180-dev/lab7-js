//exercice 1
function letterFinder(word, match) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] == match) {
      console.log('Found the', match, 'at', i);
    } else {
      console.log('---No match found at', i);
    }
  }
}
letterFinder("banana", "a");

//exercice 2
function letterFinder(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    console.log("Paramètres invalides.");
    return;
  }

  let found = false;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      console.log("Found the", match, "at", i);
      found = true;
    }
  }

  if (!found) {
    console.log("No match found");
  }
}
letterFinder("hello", "z");
  
//exercice 3
function countLetter(word, match) {
  if (typeof word !== "string" || typeof match !== "string" || match.length !== 1) {
    return 0;
  }

  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === match) {
      count++;
    }
  }

  return count;
}
console.log(countLetter("banana", "a")); 
