const form = document.querySelector("form");

const outputNavn = document.querySelector("#navn_output");
const outputKon = document.querySelector("#kon_output");
const outputEmail = document.querySelector("#email_output");
const outputPlet = document.querySelector("#plet_output");

function handleSubmit(event) {
  event.preventDefault();
  // 1. saml formularens værdier i FormData
  const formData = new FormData(form);
  // 2. vis værdierne i de rigtige output-felter
  outputNavn.textContent = formData.get("navn");
  outputKon.textContent = formData.get("kon");
  outputEmail.textContent = formData.get("email");
  outputPlet.textContent = formData.get("plet");
  form.reset();
}
form.addEventListener("submit", handleSubmit);

function cancelPopup(event) {
  // 1. forhindr standardopførslen
  event.preventDefault();

  form.querySelector(":user-invalid").focus();
}
