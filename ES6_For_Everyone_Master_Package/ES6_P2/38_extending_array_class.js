/*
 * Exnteding class of a class of class. We
 * extender MoviesCollection from Array and
 * extend movies from the moviesCollection.
 */

class MoviesCollection extends Array {
  constructor(name, ...items) {
    // We need to instantite the class from aother
    // parent class (Arrays). The next line is This is the same
    // as calling new Array(item1, item2, item3).
    super(...items)
    this.name = name
  }

  // Method which adds a movie
  add(movie) {
    this.push(movie)
  }

  // method which returns  top 10 movies
  topRated(limit = 10) {
    // return acutal movie collection which is
    // array.
    return this.sort((a, b) => (a.stars > b.stars ? -1 : 1)).slice(0, limit)
  }
}

// We instantiate the movies from the
// movies collection parent class.
const movies = new MoviesCollection('Wes\' fav movies', {
  name: 'Bee Movie',
  stars: 10,
}, {
  name: 'Star Wars Trek',
  stars: 9,
}, {
  name: 'King of the roead',
  stars: 8,
})

// we call the add method and pass
// movie object to the array.
movies.add({
  name: 'titanic',
  stars: 5,
})
movies.add({
  name: 'Ready Player One',
  stars: 10,
})

// console log the movies array class
console.log(movies)

/**
 * When we use this we only get the
 * index of each movie and no data.
 */
// for (const movie in movies) {
//   console.log(movie);
// }

/**
 * This is the proper way of looping
 * over our array class.
 */
// for (const movie of movies) {
//   console.log(movie);
// }

// Console log a table of
// our method Toprated.
console.table(movies.topRated())