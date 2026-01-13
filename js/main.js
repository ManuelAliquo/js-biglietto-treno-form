const passengerKm = document.getElementById("passenger-km");
const passengerAge = document.getElementById("passenger-age");
const submitBtn = document.getElementById("submit-btn");

const pricePerKm = 0.21;
const discount20 = 20;
const discount40 = 40;
let ticketPrice;

// # Al click del bottone
submitBtn.addEventListener("click", function () {
  // - si stampano km ed età
  console.log(`Km da percorrere: ${passengerKm.value}Km`);
  console.log(`Range Età passeggero: ${passengerAge.value}`);

  // - si stampa il prezzo e in caso applica lo sconto
  if (passengerAge.value === "maggiorenne") {
    ticketPrice = passengerKm.value * pricePerKm;
  } else if (passengerAge.value === "minorenne") {
    ticketPrice =
      passengerKm.value * pricePerKm - (discount20 / 100) * (passengerKm.value * pricePerKm);
  } else if (passengerAge.value === "over-65") {
    ticketPrice =
      passengerKm.value * pricePerKm - (discount40 / 100) * (passengerKm.value * pricePerKm);
  }

  console.log(`Prezzo del biglietto: ${ticketPrice}€`);
});
