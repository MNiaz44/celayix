const servicesAndMealsFormatter = (inputText) => {
  let formattedSMText = "";

  if (inputText === "All Meal Periods" || inputText === "All Services") {
    formattedSMText = "All";
  } else {
    const words = inputText.split(" ");
    if (words.length > 0) {
      formattedSMText = words
        .map((word, index) => {
          if (index === 0) {
            return word.toLowerCase();
          }
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
    }
  }

  return formattedSMText;
};

export default servicesAndMealsFormatter;
