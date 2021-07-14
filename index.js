const passengerAge = prompt("How old Are You?");
console.log(passengerAge);
const destination = prompt("Where Are You Going To?");
console.log(destination);
const pricePerKm = 0.21;
const distanceToPaddingtonInKm = 20;
const distanceToEustonInKm = 43;
const fareToPaddington = distanceToPaddingtonInKm * pricePerKm;
console.log(fareToPaddington);

const fareToEuston = distanceToEustonInKm * pricePerKm;
console.log(fareToEuston);

if (passengerAge < 18) alert("Apply 20% Doscount");
else alert("Not eligible for Junior Passenger Discount");
if (passengerAge > 65) alert("Apply 40% Discount");
else alert("Not eligible for Senior Passenger Discount");

const juniorPassengersDiscount = 0.2;
const seniorPassengersDiscount = 0.4;

const fareForUnder18ToPaddington =                       
  fareToPaddington - fareToPaddington * juniorPassengersDiscount;
console.log(fareForUnder18ToPaddington);

const fareForUnder18ToEuston =
  fareToEuston - fareToEuston * juniorPassengersDiscount;
console.log(fareForUnder18ToEuston);

const fareForOver65ToPaddington =
  fareToPaddington - fareToPaddington * seniorPassengersDiscount;
console.log(fareForOver65ToPaddington);

const fareForOver65ToEuston =
  fareToEuston - fareToEuston * seniorPassengersDiscount;
console.log(fareForOver65ToEuston);
