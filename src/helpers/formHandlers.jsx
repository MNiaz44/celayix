export const handleChangeInputField = (
  event,
  fieldLabel,
  search,
  setSearch,
  user,
  setUser
) => {
  const {
    target: { value },
  } = event;

  // Restrict input to only 3 numbers if fieldLabel is 'Milliseconds Offset'
  let sanitizedValue = value;
  if (fieldLabel === "Milliseconds Offset") {
    sanitizedValue = value.replace(/\D/g, "").substring(0, 3);
  }

  let updatedSearch = { ...search }; // Make a copy of the search state
  let updatedUser = { ...user };

  // Update the relevant properties based on the fieldLabel
  if (fieldLabel === "Username") {
    updatedUser.username = sanitizedValue;
  } else if (fieldLabel === "Milliseconds Offset") {
    updatedSearch.milliseconds = sanitizedValue;
  }

  setSearch(updatedSearch); // Update the search state
  setUser(updatedUser); // Update the user state

  return sanitizedValue;
};

export const handleChangeSelector = () => {};
