class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  static sanitize(string) {
    string.replace(/[^\w\s-']/gi, '');
  }

  static titleize(string) {
    let words = string.split(" ");
    for (const word of words) {
      if (word === words[0]) {
        words[words.indexOf(word)] = word[0].toUpperCase() + word.substring(1);
      }
      console.log(word);
      if (word !== "a" && word !== "the" && word !== "an" && word !== "but" && 
      word !== "of" && word !== "and" && word !== "for" && 
      word !== "at" && word !== "by" && word !== "from") {
        words[words.indexOf(word)] = word[0].toUpperCase() + word.substring(1);
    }
  }
  
  words = words.join(" ");
  console.log(words);
    return words;
  }  
}


Formatter.titleize("hi my name is kelly and i am from connecticut");