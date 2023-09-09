// initial different type of 10 objet
let items = [
    { id: 1, name: "Apple", category: "grocery", price: 2.5 },
    { id: 2, name: "Milk", category: "grocery", price: 1.8 },
    { id: 3, name: "Bread", category: "grocery", price: 2.0 },
    { id: 4, name: "Book", category: "other", price: 10.0 },
    { id: 5, name: "Eggs", category: "grocery", price: 3.0 },
    { id: 6, name: "Notebook", category: "other", price: 2.5 },
    { id: 7, name: "Banana", category: "grocery", price: 1.0 },
    { id: 8, name: "Pen", category: "other", price: 0.5 },
    { id: 9, name: "Cheese", category: "grocery", price: 4.0 },
    { id: 10, name: "Shoes", category: "other", price: 25.0 },
];

// divide objects into two parts based on category  
const dividedItemByCategory = () => {
    let groceryItem = [];
    let otherItem = [];
    for (const item of items) {
        if (item.category === 'grocery') {
            groceryItem.push(item)
        }
        else {
            otherItem.push(item)
        }
    }
    return [groceryItem, otherItem]
}

const getItems = () => items
// used for dynamic id
const getId = () => items.length + 1;

// used for add new item
const addItem = (itemName, itemCategory, itemPrice) => {
    const newItem = {
        id: getId(),
        name: itemName,
        category: itemCategory,
        price: itemPrice
    }
    items.push(newItem)
}
addItem('High-waist-jeans', 'clothing', 1000)
addItem('Vegetables', 'grocery', 100)
addItem('Water-Bottle', 'other', 15)
console.log(getItems())

// / used for update  item
const updateItem = (id, updateItem, keys) => {

    for (const item of items) {
        if (item.id == id) {
            const itemObjkeys = Object.keys(item)
            if (itemObjkeys.includes(keys)) {
                item[keys] = updateItem
            }
        }
    }
}
updateItem(6, 'Kurti', 'name')
updateItem(6, 'clothing', 'category')
updateItem(1, 'Laptop', 'name')
updateItem(1, 'electronics', 'category')
updateItem(1, '50000', 'price')
console.log('After update Item', getItems())

//  used for delete item

const deleteItem = (id) => {
    for (const item of items) {
        if (item.id === id) {
            const index = items.indexOf(item)
            items.splice(index, 6)

        }
    }
}
deleteItem(4)
console.log('After delete item', getItems())