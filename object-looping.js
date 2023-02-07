var shopingCart = {
    book: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 24,
    shoes: 4
}

const keys = Object.keys(shopingCart);
console.log(keys);

const values = Object.values(shopingCart);
console.log(values);

const properties = Object.keys(shopingCart);
console.log(properties);

for ( var i = 0; i < keys.length; i++){
    var thisKeys = keys[i];
    const values = Object.values(shopingCart);
    console.log(thisKeys, values);
}