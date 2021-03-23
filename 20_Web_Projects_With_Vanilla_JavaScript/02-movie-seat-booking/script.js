const container = document.querySelector('.container');
const count = document.querySelector('#count');
const movieSelect = document.querySelector('#movie');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const total = document.querySelector('#total');
// + symbol converts string into number
let ticketPrice = +movieSelect.value;

// Save selected movie index and price
const setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
};

// Update total and count
const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  // map over all selected seats against all seats and save the indexes
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));
  // save the new array of selected seats into local storage
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seats click event
container.addEventListener("click", (e) => {
  if (e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});

// Retrieve local storage and populate UI as IIFE
(() => {
  // restore selected seats
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    console.log('function')
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  // restore selected movie
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }

  // restore total tickets price
  const selectedMoviePrice = localStorage.getItem('selectedMoviePrice');
  ticketPrice = +selectedMoviePrice;

  // restore count and total price
  updateSelectedCount();
})();