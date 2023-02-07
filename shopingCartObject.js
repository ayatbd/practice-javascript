var shopingCart = {
    book: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 24
}
console.log(shopingCart);

var pencount = shopingCart.pen;
console.log(pencount);

pencount2 = shopingCart["mouse"];
console.log(pencount2);

// var properties = object.keys(shopingCart);
// console.log(properties);

// var properties = object.values(shopingCart);
// console.log(properties);
// -----------------------------------------------------

// this is an example of changing a propery value
shopingCart.pen = 15;
console.log(shopingCart);

// alternative way of changing
shopingCart["pen"] = 30;
console.log(shopingCart);