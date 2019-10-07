/* eslint-disable prefer-destructuring, no-multi-assign */

// treversing the dom.

let val;

const list = document.querySelector('ul.collection');

const listItem = document.querySelector('li.collection-item:first-child');

val = listItem;
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

/**
 * Node Types */
// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get child nodes -> gives us all nodes.
val = list.childNodes;

// Get children -> gives us just the elements.
val = list.children;

// Set text content of the 2nd node.
val = list.children[1].textContent = 'Hello';

// Add ID to the 3rd node.
list.children[3].children[0].id = 'test-link';

// Get the children of the 4th node.
val = list.children[3].children;

// Get the first/last child
val = list.firstChild;
val = list.lastChild;

// Get the first/last element child.
val = list.firstElementChild;
val = list.lastElementChild;

// Get the total count of elements.
val = list.childElementCount;

// Get parent node/element -> mostly same.
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get prev sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;


console.log(val);
