
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');


const runEvent = (e) => {
  console.log(`Event Type: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY},40)`;
};

// Single click.
// clearBtn.addEventListener('click', runEvent);

// Double click.
// clearBtn.addEventListener('dblclick', runEvent);

// Mouse button goes down.
// clearBtn.addEventListener('mousedown', runEvent);

// Mouse button goes back up
// clearBtn.addEventListener('mouseup', runEvent);

// Mouse enters/leave event area.
// Gets triggered over parent element only.
card.addEventListener('mouseenter', runEvent);
card.addEventListener('mouseleave', runEvent);

// Mouse over/out event area.
// Gets trigger over any inner element.
card.addEventListener('mouseover', runEvent);
card.addEventListener('mouseout', runEvent);

// Mouse move
card.addEventListener('mousemove', runEvent);
