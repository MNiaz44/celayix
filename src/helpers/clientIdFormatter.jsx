const clientIdFormatter = (inputText) => {
  // Split the input text by spaces
  const words = inputText.split(" ");

  // Convert each word to lowercase and capitalize the first letter
  const camelCaseWords = words.map((word, index) => {
    if (index === 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    } else {
      return word.toLowerCase();
    }
  });

  // Join the words without spaces
  const formattedApiText = camelCaseWords.join("");
  return formattedApiText;
};

export default clientIdFormatter;
