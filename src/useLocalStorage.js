
const initialValues = {
  fullName: "",
  gender: "",
  professional: "",
  telephone: "",
  email: "",
  password: "",
  confirm: "",
  date: null,
  accept: false,
};
const useLocalStorage = () => {
  try {
    const storedValues = window.localStorage.getItem("key");
    return storedValues ? JSON.parse(storedValues) : initialValues;
  } catch (error) {
    return initialValues;
  }
};

export default useLocalStorage;