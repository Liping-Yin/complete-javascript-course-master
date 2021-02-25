'use strict';
// ============ default parameters ===============
const bookings = [];
const creatbooking = function (
  flightNum,
  numPassenger = 1,
  price = 199 * numPassenger // when use this the parameter order matters
) {
  // ES5
  //   numPassenger = numPassenger || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
creatbooking('LH123');
creatbooking('Lk122', 2, 500); //overwrite default parameters
creatbooking('Lk122', undefined, 500);
