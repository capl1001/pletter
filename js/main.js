// Får pilen til at ændre sig når den hoover over ( Curser:pointer )

// function () {
//   console.log("");
//   document.querySelector(".info-text h2").textContent = "";
//   document.querySelector("placeholder").textContent = "";
// }

// const til svg elementerne
const champagne = document.querySelector("#Spildt_champagne");
const rodvin = document.querySelector("#Spildt_rødvin");
const is = document.querySelector("#Spildt_is");
// const for knapperne
const btn_rodvin = document.querySelector("#btn_rodvin");
const btn_champagne = document.querySelector("#btn_champagne");
const btn_is = document.querySelector("#btn_is");
// const for tema-toggle
const html = document.documentElement;
const toggleSwitch = document.querySelector("#theme-toggle");

let active_part;

// Funktioner til tema-toggle
function handleThemeChange(event) {
  const isDark = toggleSwitch.checked;
  html.classList.toggle("dark", isDark);
  localStorage.setItem("isDarkMode", isDark);
}

function getSavedTheme() {
  // 1. hent det gemte theme
  const isDark = localStorage.getItem("isDarkMode") === "true";
  // 2. sync dark-klassen på html
  html.classList.toggle("dark", isDark);
  // 3. sync checkboxens checked-state
  toggleSwitch.checked = isDark;
}

getSavedTheme();

toggleSwitch?.addEventListener("change", handleThemeChange);

// Eventlisteners for SVG elementerne
rodvin?.addEventListener("click", infoRodvin);
champagne?.addEventListener("click", infoChampagne);
is?.addEventListener("click", infoIs);

// Eventlisteners for knapperne
btn_rodvin.addEventListener("click", infoRodvin);
btn_champagne.addEventListener("click", infoChampagne);
btn_is.addEventListener("click", infoIs);

// funktioner til svg elementerne
function infoRodvin() {
  console.log("Du har klikket på rødvin");
  document.querySelector(".info-text > h2").textContent = "Spildt Rødvin";
  document.querySelector(".placeholder").textContent =
    "Her er tips til at fjerne rødvinspletter";
  document.querySelector("#efficiency").textContent =
    "Her er hvad du skal bruge: Salt eller Natron og vand";
  document.querySelector("#requirement").textContent =
    "Hvis pletten lige er hændt: Dæk pletten helt med salt, lad det suge væsken op i 10-20 min, skyl med koldt vand bagefter - Hvis pletten er tør: Lav en pasta af natron og lidt vand, smør på pletten, lad sidde 30-60 min, skyl og vask";
  active_part = "rodvin";
  rodvin.style.filter = "brightness(1.4) drop-shadow(0 0 5px black)";
  de_light();
}
function infoChampagne() {
  console.log("Du har klikket på champagne");
  document.querySelector(".info-text > h2").textContent = "Spildt champagne";
  document.querySelector(".placeholder").textContent =
    "Her er tips til at fjerne champagnepletter";
  document.querySelector("#efficiency").textContent =
    "Her er hvad du skal bruge:Koldt vand eller hvid eddike";
  document.querySelector("#requirement").textContent =
    "Skyl pletten med koldt vand, altid fra bagsiden først, dup forsigtigt ikke gnid - Hvis du har svært ved at få pletten væk: Lav en blanding af 1 del hvid eddike og 2 dele vand, påfør på pletten og dup forsigtigt, skyl og vask";
  active_part = "champagne";
  champagne.style.filter = "brightness(1.4) drop-shadow(0 0 5px black)";
  de_light();
}

function infoIs() {
  console.log("Du har klikket på is");
  document.querySelector(".info-text > h2").textContent = "Spildt is";
  document.querySelector(".placeholder").textContent =
    "Her er tips til at fjerne ispletter";
  document.querySelector("#efficiency").textContent =
    "Her er hvad du skal bruge: Koldt vand og opvaskemiddel";
  document.querySelector("#requirement").textContent =
    "Hvis pletten lige er hændt: Skyl pletten med koldt vand, dup forsigtigt med en klud, gentag indtil pletten er væk - Hvis pletten er tør: Lav en blanding af koldt vand og opvaskemiddel, påfør på pletten og gnid det rundt, skyl og vask";
  active_part = "is";
  is.style.filter = "brightness(1.4) drop-shadow(0 0 5px black)";
  de_light();
}

// Eventlisteners for mouseover og mouseout
btn_rodvin?.addEventListener("mouseover", highlightRodvin);
btn_champagne?.addEventListener("mouseover", highlighchampagne);
btn_is?.addEventListener("mouseover", highlightIs);
btn_rodvin?.addEventListener("mouseout", de_light);
btn_champagne?.addEventListener("mouseout", de_light);
btn_is?.addEventListener("mouseout", de_light);

// Funktioner til at ændre lysstyrken på SVG-elementerne
function highlightRodvin() {
  rodvin.style.filter = "brightness(1.4)";
}
function highlighchampagne() {
  champagne.style.filter = "brightness(1.4)";
}
function highlightIs() {
  is.style.filter = "brightness(1.4)";
}
function de_light() {
  console.log("de_light");
  console.log(active_part);
  if (active_part !== "rodvin") {
    rodvin.style.filter = "";
  }
  if (active_part !== "champagne") {
    champagne.style.filter = "";
  }
  if (active_part !== "is") {
    is.style.filter = "";
  }
}
