/* eslint-disable  func-names, no-param-reassign */

// Storage Controller
const StorageCtrl = (function () {
  // Public methods.
  return {
    storeItem(item) {
      let items;
      // Check if any items are in localStorage.
      if (localStorage.getItem('items') === null) {
        // items should be empty.
        items = [];

        // Push the new item.
        items.push(item);

        // Set local storage.
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        // Get what's in the local storage.
        items = JSON.parse(localStorage.getItem('items'));

        // Push new item.
        items.push(item);

        // Set the new data back into local storage.
        localStorage.setItem('items', JSON.stringify(items));
      }
    },

    getItemsFromStorage() {
      let items;
      // Check if we have saved anything.
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },

    updateItemStorage(updatedItem) {
      // Get the current data.
      const items = JSON.parse(localStorage.getItem('items'));
      // Loop the array and replace item.
      items.forEach((item, index) => {
        if (updatedItem.id === item.id) {
          // Splice the array and replace item.
          items.splice(index, 1, updatedItem);
        }
      });
      // Set the new data back into local storage.
      localStorage.setItem('items', JSON.stringify(items));
    },

    deleteItemFromStorage(id) {
      // Get the current data.
      const items = JSON.parse(localStorage.getItem('items'));

      // Loop the array and replace item.
      items.forEach((item, index) => {
        if (id === item.id) {
          // Splice the array and replace item.
          items.splice(index, 1);
        }
      });

      // Set the new data back into local storage.
      localStorage.setItem('items', JSON.stringify(items));
    },

    clearItemsFromStorage() {
      localStorage.removeItem('items');
    },
  };
}());

// Item Controller
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure
  const data = {
    // items: [
    //   /* { id: 0, name: 'Steak Dinner', calories: 1200 },
    //   { id: 1, name: 'Cookie', calories: 400 },
    //   { id: 2, name: 'Eggs', calories: 300 } */
    // ],
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0,
  };

  // Public methods
  return {
    getItems() {
      return data.items;
    },

    addItem(name, calories) {
      let ID;
      // Create new item ID (auto increment)
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      // convert the calories to string to number.
      const calorieInt = parseInt(calories, 10);
      // Create a new item using our details.
      const newItem = new Item(ID, name, calorieInt);
      // Add new item to the items array.
      data.items.push(newItem);
      // return new item for further use.
      return newItem;
    },

    getItemByID(id) {
      let found = null;
      // Loop through the items.
      data.items.forEach((item) => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },

    // Update item in the data structure.
    updateItem(name, calories) {
      // Calories to number
      let found = null;
      data.items.forEach((item) => {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = parseInt(calories, 10);
          found = item;
        }
      });
      return found;
    },

    deleteItem(id) {
      // Get the ids
      const ids = data.items.map(item => item.id);

      // Get the index
      const index = ids.indexOf(id);

      // Remove item
      data.items.splice(index, 1);
    },

    clearAllItems() {
      data.items = [];
    },

    setCurrentItem(item) {
      const newItem = item;
      data.currentItem = newItem;
    },

    getCurrentItem() {
      return data.currentItem;
    },

    getTotalCalories() {
      let total = 0;
      // Loop through all items
      data.items.forEach((item) => {
        total += item.calories;
      });
      // Set total calories data
      data.totalCalories = total;
      // Return total
      return data.totalCalories;
    },
    logData() {
      return data;
    },
  };
}());

// UI Controller
const UICtrl = (function () {
  const UISelectors = {
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories',
    itemNameInput: '#item-name',
    listItems: '#item-list li',
    deleteBtn: '.delete-btn',
    updateBtn: '.update-btn',
    clearBtn: '.clear-btn',
    itemList: '#item-list',
    backBtn: '.back-btn',
    addBtn: '.add-btn',
  };

  // Public methods
  return {
    populateItemList(items) {
      let html = '';
      // Loop over each item.
      items.forEach((item) => {
        // Add each item to the html placeholder.
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="edit-item fa fa-pencil"></i>
          </a>
        </li>`;
      });
      // Inject placeholder list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getItemInput() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },

    addListItem(item) {
      // Show the list.
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create li element
      const li = document.createElement('li');
      // Add it's class
      li.className = 'collection-item';
      // Add the id.
      li.id = `item-${item.id}`;
      // Add the html.
      li.innerHTML = `
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;
      // Inject the item into the dom.
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    updateListItem(item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // Turn node list into array.
      listItems = Array.from(listItems);
      listItems.forEach((listItem) => {
        const itemID = listItem.getAttribute('id');
        if (itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `
          <strong>${item.name}: </strong> 
          <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          `;
        }
      });
    },

    deleteListItem(id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },

    clearInputFields() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },

    addItemToFrom() {
      const { name, calories } = ItemCtrl.getCurrentItem();
      document.querySelector(UISelectors.itemNameInput).value = name;
      document.querySelector(UISelectors.itemCaloriesInput).value = calories;
      UICtrl.showEditState();
    },

    removeItems() {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // Turn Node list into array.
      listItems = Array.from(listItems);
      listItems.forEach((item) => {
        item.remove();
      });
    },

    hideList() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    showTotalCalories(totalCaloriesNum) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCaloriesNum;
    },

    clearEditState() {
      UICtrl.clearInputFields();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },

    showEditState() {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },

    getSelectors() {
      return UISelectors;
    },
  };
}());

// App Controller
const App = (function (_ItemCtrl, _UICtrl, _StorageCtrl) {
  // Add Item submit
  const itemAddSubmit = function (e) {
    // Get form input from UI Controller
    const input = _UICtrl.getItemInput();

    // Check the name and calorie input.
    if (input.name !== '' && input.calories !== '') {
      // reference add item
      const newItem = _ItemCtrl.addItem(input.name, input.calories);

      // add item to UI list.
      _UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = _ItemCtrl.getTotalCalories();

      // Add total calories to the UI
      _UICtrl.showTotalCalories(totalCalories);

      // Store in local storage.
      _StorageCtrl.storeItem(newItem);

      // Clear the input fields.
      _UICtrl.clearInputFields();
    }
    e.preventDefault();
  };

  // edit item on click.
  const itemEditClick = function (e) {
    e.preventDefault();

    if (e.target.classList.contains('edit-item')) {
      // Get list item ID
      const listItem = e.target.parentNode.parentNode.id;

      // Break into an array and get the number as int.
      const ItemID = parseInt(listItem.split('-')[1], 10);

      // Get item
      const itemToEdit = _ItemCtrl.getItemByID(ItemID);

      // Set current item
      _ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      _UICtrl.addItemToFrom();
    }
  };

  // Update item submit
  const itemUpdateSubmit = function (e) {
    e.preventDefault();

    // Get item input
    const input = _UICtrl.getItemInput();

    // Update item
    const updatedItem = _ItemCtrl.updateItem(input.name, input.calories);

    // Update the UI
    _UICtrl.updateListItem(updatedItem);

    // Get total calories
    const totalCalories = _ItemCtrl.getTotalCalories();

    // Add total calories to the UI
    _UICtrl.showTotalCalories(totalCalories);

    // Update local storage.
    _StorageCtrl.updateItemStorage(updatedItem);

    // Clear the input fields.
    _UICtrl.clearEditState();
  };

  // Delete button event.
  const itemDeleteSubmit = (e) => {
    // Get current item.
    e.preventDefault();

    const currentItem = _ItemCtrl.getCurrentItem();
    // Delete from data structure
    _ItemCtrl.deleteItem(currentItem.id);

    // Delete from UI
    _UICtrl.deleteListItem(currentItem.id);

    // Get total calories
    const totalCalories = _ItemCtrl.getTotalCalories();

    // Add total calories to the UI
    _UICtrl.showTotalCalories(totalCalories);

    // Delete from local storage.
    _StorageCtrl.deleteItemFromStorage(currentItem.id);

    // Clear the input fields.
    _UICtrl.clearEditState();
  };

  // Clear items event
  const clearAllItemsClick = (e) => {
    e.preventDefault();
    // Delete all items from data structure
    _ItemCtrl.clearAllItems();
    // Get total calories
    const totalCalories = _ItemCtrl.getTotalCalories();
    // Add total calories to the UI
    _UICtrl.showTotalCalories(totalCalories);
    // Remove from UI
    _UICtrl.removeItems();
    // clear all from local storage.
    _StorageCtrl.clearItemsFromStorage();
    // Hide the UL
    _UICtrl.hideList();
  };

  // Load initial event listeners
  const loadEventListeners = function () {
    // Get UI selectors
    const UISelectors = _UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Disable submit using enter key.
    document.addEventListener('keypress', (e) => {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
      }
      return false;
    });

    // Edit icon click event.
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    // Update item event.
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

    // Delete item event.
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

    // Back button event.
    document.querySelector(UISelectors.backBtn).addEventListener('click', (e) => {
      _UICtrl.clearEditState();
      e.preventDefault();
    });

    // Clear Items event.
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
  };

  // Public methods
  return {
    init() {
      // Clear initial state - hide buttons.
      _UICtrl.clearEditState();
      // Fetch items from data structure.
      const items = ItemCtrl.getItems();
      // Check if there are any items
      if (items.length === 0) {
        // IF 0, hide the list.
        _UICtrl.hideList();
      } else {
        // Populate list with the items.
        _UICtrl.populateItemList(items);
      }
      // Get total calories
      const totalCalories = _ItemCtrl.getTotalCalories();
      // Add total calories to the UI
      _UICtrl.showTotalCalories(totalCalories);
      // Load event listeners.
      loadEventListeners();
    },
  };
}(ItemCtrl, UICtrl, StorageCtrl));

// Initialize app
App.init();
