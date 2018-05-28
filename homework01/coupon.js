use 'strict';

// question 3
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
