'use strict';

// question 3:
// We want to create a curryable function that takes as arguments (in this order):
// 1. Category
// 2. Discount between 0 and 1 (a 100$ item with a 0.1 discount will cost 90$)
// 3. An item
// and returns the item with the correct price.


// solution:
export const applyCoupon = category => {
  return coupon => {
    return item => {
      if (item.category === category) {
        let newPrice = item.price * (1 - coupon);
        item.price = newPrice;
      }
      return item;
    }
  }
};
