
// Create element.
const li = document.createElement('li');

// Add a class to it.
li.className = 'collection-item';

// Add a id to it.
li.id = 'new-item';

// Add a atribute.
li.setAttribute('title', 'New Item');

// Create text node and append.
li.appendChild(document.createTextNode('Hello World!'));

// Create new link element.
const link = document.createElement('a');

// Add some classes to it.
link.className = 'delete-item secondary-content';

// Add icon html.
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append the link to the li.
li.appendChild(link);

// Append li as a child to the ul.
document.querySelector('ul.collection').appendChild(li);

console.log(li);
