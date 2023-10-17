function calculateDiscount(price, discountPercentage) {
    discount = price * discountPercentage / 100;
    discountedPrice = price - discount;
    return discountedPrice;
}

console.log(calculateDiscount(200, 15));