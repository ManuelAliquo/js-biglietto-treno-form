const passengerKm = document.getElementById("passenger-km");
const passengerAge = document.getElementById("passenger-age");
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", function () {
  console.log(passengerKm.value);
  console.log(passengerAge.value);
});
