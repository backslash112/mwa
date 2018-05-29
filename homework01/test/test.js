'use strict';

// import {applyCoupon} from '../coupon';
// import {isDual, allEquals } from '../dual-array';
// import {isWeekday1, isWeekend2, isWeekendByDay} from '../weekend';
// const coupon = require('../coupon');
// const dual-array = require('../dual-array');
// const weekend = require('../weekend');

// unit test
var unitTests = {};

// test isDual()
unitTests.testIsDual1 = function(method) {
  return method([]) === 1;
};
unitTests.testIsDual2 = function(method) {
  return method([1, 2, 3]) === 0;
};
unitTests.testIsDual3 = function(method) {
  return method([1, 2, 3, 0]) === 1;
};
unitTests.testIsDual4 = function(method) {
  return method([1, 1, 2, 2]) === 0;
};

// test allEquals()
unitTests.testAllEquals1 = function(method) {
  return method([2, 3]) === false;
};

unitTests.testAllEquals2 = function(method) {
  return method([3, 3]) === true;
};


// test isWeekend1()
unitTests.testIsWeekend1 = function(method) {
  return method() == "weekday";
}

// test isWeekend2()
unitTests.testIsWeekend2 = function(method) {
  return method() == "weekday";
}


// test isWeekendByDay()
unitTests.testIsWeekendByDay1 = function(method) {
  // 0 is Sunday
  return method(0) === "weekend" && method(6) === "weekend";
}

unitTests.testIsWeekendByDay2 = function(method) {
  return method(1) === "weekday" && method(5) === "weekday";
}


// test applyCoupon1()
unitTests.testApplyCoupon1 = function(method) {
  const item = {
  "name": "Biscuits",
  "type": "regular",
  "category": "food",
  "price": 2.0
}
  return method("food")(0.1)(item).price === 1.8;
}


console.log("test isDual(): ");
console.log(unitTests.testIsDual1(dual-array.isDual));
console.log(unitTests.testIsDual2(dual-array.isDual));
console.log(unitTests.testIsDual3(dual-array.isDual));

console.log("test allEquals(): ");
console.log(unitTests.testAllEquals1(dual-array.allEquals));
console.log(unitTests.testAllEquals2(dual-array.allEquals));

console.log("test isWeekend1(): ");
console.log(unitTests.testIsWeekend1(weekend.isWeekend1));
console.log("test isWeekend2(): ");
console.log(unitTests.testIsWeekend2(weekend.isWeekend2));

console.log("test isWeekendByDay(): ");
console.log(unitTests.testIsWeekendByDay1(weekend.isWeekendByDay) === true);
console.log(unitTests.testIsWeekendByDay2(weekend.isWeekendByDay) === true);

console.log("test applyCoupon(): ");
console.log(unitTests.testApplyCoupon1(coupon.applyCoupon));
