export function getFormValues() {
  const storedValues = localStorage.getItem('form');
  console.log(storedValues)
  if (!storedValues)
    return {
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
  return JSON.parse(storedValues);
}