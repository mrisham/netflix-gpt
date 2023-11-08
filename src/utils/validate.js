export const checkValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password
  );
  const isNameValid = /^[A-Za-z\s]+\.?[A-Za-z\s]*$/.test(name);

  if (!isEmailValid) return "Invalid Email";
  if (!isPasswordValid) return "Invalid Password";
  if (!isNameValid) return "Invalid Name";

  return null;
};
