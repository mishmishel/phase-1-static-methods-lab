class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z0-9\s'-]/g, '');
  }

  static titleize(sentence) {
    const lowerCaseWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from'];
    const words = sentence.toLowerCase().split(" ");

    const capitalizedWords = words.map((word, index) => {
      if (index === 0 || !lowerCaseWords.includes(word)) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return word;
      }
    });
    return capitalizedWords.join(' ');
  }
}