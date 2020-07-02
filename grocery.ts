class Grocery {
  constructor(
    public name: string,
    public quantity: number
  ) {
  }
}

function createGroceries(grocery: Grocery) {
  return "Grocery + " + grocery.name;
}

let banana = new Grocery("banana",3);


document.body.textContent = createGroceries(banana);