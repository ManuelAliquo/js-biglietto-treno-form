// Form
const passengerForm = document.getElementById("passenger-form");
const passengerName = document.getElementById("passenger-name");
const passengerKm = document.getElementById("passenger-km");
const passengerAge = document.getElementById("passenger-age");
const submitBtn = document.getElementById("submit-btn");

// Ticket
const ticket = document.getElementById("ticket");
ticket.style.display = "none";
const printedName = document.getElementById("printed-name");
const printedKm = document.getElementById("printed-km");
const printedAge = document.getElementById("printed-age");
const printedPrice = document.getElementById("printed-price");

const pricePerKm = 0.21;
const discountMinor = 20;
const discountOver = 40;
let ticketPrice;

passengerForm.addEventListener("click", function (event) {
  event.preventDefault();
});

// # Al click del bottone
submitBtn.addEventListener("click", function () {
  // - si stampano il ticket con le info
  ticket.style.display = "block";
  console.log(`Nome del Passeggero: ${passengerName.value}`);
  printedName.innerText = `${passengerName.value}`;
  console.log(`Distanza: ${passengerKm.value}Km`);
  printedKm.innerText = `${passengerKm.value}Km`;
  console.log(`Fascia d'Età: ${passengerAge.value}`);

  // - si stampa il prezzo e in caso applica lo sconto
  if (passengerAge.value === "Maggiorenne") {
    printedAge.innerText = "Standard";
    ticketPrice = passengerKm.value * pricePerKm;
  } else if (passengerAge.value === "Minorenne") {
    printedAge.innerText = "Promo -20%";
    ticketPrice =
      passengerKm.value * pricePerKm - (discountMinor / 100) * (passengerKm.value * pricePerKm);
  } else if (passengerAge.value === "Over-65") {
    printedAge.innerText = "Promo -40%";
    ticketPrice =
      passengerKm.value * pricePerKm - (discountOver / 100) * (passengerKm.value * pricePerKm);
  }

  console.log(`Prezzo del biglietto: ${ticketPrice.toFixed(2)}€`);
  printedPrice.innerText = `${ticketPrice.toFixed(2)}€`;
});
