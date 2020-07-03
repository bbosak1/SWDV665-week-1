var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    return Grocery;
}());
function createGroceries(groceryList) {
    var returnStatement = 'My grocery list: ';
    for (var _i = 0, groceryList_1 = groceryList; _i < groceryList_1.length; _i++) {
        var element = groceryList_1[_i];
        returnStatement = returnStatement + element.name + ". Quantity: " + element.quantity + " ";
    }
    return returnStatement;
}
var groceryList = [];
var banana = new Grocery("banana", 3);
var orange = new Grocery("orange", 5);
var grape = new Grocery("grape", 30);
var kiwi = new Grocery("kiwi", 4);
var canteloupe = new Grocery("canteloupe", 1);
var watermelon = new Grocery("watermelon", 1);
var strawberry = new Grocery("strawberry", 7);
groceryList.push(banana);
groceryList.push(orange);
groceryList.push(grape);
groceryList.push(kiwi);
groceryList.push(canteloupe);
groceryList.push(watermelon);
groceryList.push(strawberry);
document.body.textContent = createGroceries(groceryList);
