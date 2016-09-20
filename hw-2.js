// part 1


var string = {};

string.pluralize = function(s){
  var pluralized;
    if(s.charAt(s.length - 1) == "y"){
      pluralized = s.substr(0, s.length - 1) + "ies";
    } else{
      pluralized = s + "s";
    }
    return pluralized;
}

console.log(string.pluralize("dog"));


// part 2


var Book = function(obj){
  this.title = obj.title;
  this.quantity = obj.quantity;
  this.price = obj.price;
  this.getSubtotal = function(){
    return this.quantity * this.price;
  }
}
var ShoppingCart = function(arr){
  this.items = [];
  this.add = function(obj){
    this.items.push(obj);
  };
  for(var i = 0; i < arr.length; i++){
    this.add(arr[i]);
  }
  this.getTotal = function(){
    var total = 0;
    for(var i = 0; i < this.items.length; i++){
      total = total + this.items[i].getSubtotal();
    }
    return total;
  }
}

var oojsBook = new Book({ title: 'Object Oriented JavaScript', quantity: 2, price: 10 });
console.log(oojsBook.title); // Object Oriented JavaScript
console.log(oojsBook.quantity); // 2
console.log(oojsBook.price); // 10
console.log(oojsBook.getSubtotal()); // 20

// shopping cart

var book1 = new Book({ title: 'Object Oriented JavaScript', quantity: 1, price: 10 });
var book2 = new Book({ title: 'JavaScript Web Applications', quantity: 2, price: 15 });
var book3 = new Book({ title: 'PHP Object Oriented Solutions', quantity: 1, price: 20 });
var book4 = new Book({ title: 'Head First Java', quantity: 5, price: 20 });

var cart = new ShoppingCart([book1, book2]);
cart.add(book3);
cart.add(book4);
var subtotal = cart.getTotal();
console.log(subtotal); // 160


//part 3


Array.prototype.map2 = function(func){
  for(var i = 0; i < this.length; i++){
    this[i] = func(this[i]);
    console.log(this[i]);
  }
  return this;
}

var numbers = [1, 2, 3, 4, 5];
var numbersDoubled = numbers.map2(function(number) {
  return number * 2;
});
console.log(numbersDoubled); // should equal [2, 4, 6, 8, 10]
