export default function checkPhoneAndCode() {
  const phoneNumber = document.querySelector("#phoneNumber").value;
  const code = document.querySelector("#code").value;
  if (
    phoneNumber.length === 9 &&
    !isNaN(phoneNumber) &&
    code.length === 4 &&
    !isNaN(code)
  ) {
    return true;
  } else {
    alert("Błąd! Wprowadź prawidłowy numer telefonu i kod odbioru.");
    return false;
  }
}
