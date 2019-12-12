var shopper = {
  location: "Walmart",
  age : 28,
  isShopping : true,
  groceryCart : ["Apples", "Bread", "Chicken"],
  shopperStatistics : function() {
    return "Items in cart: " + this.groceryCart;
  }
};

console.log(shopper.shopperStatistics())