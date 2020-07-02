var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
function createGroceries(grocery) {
    return "Grocery + " + grocery.name;
}
var banana = new Grocery("banana", 3);
document.body.textContent = createGroceries(banana);
