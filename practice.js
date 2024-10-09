const nums = [7, 8, 2, 4];
// complex data structure
//[object, ]
const movies = [
  { id: 1, title: "Die Hard", director: "Bruce Willis", rating: 3.4 },
  { id: 2, title: "Mission Impossible 1", director: "Tom Cruise", rating: 4.5 },
  { id: 3, title: "Little miss forest", director: "John Doe", rating: 4.1 },
  { id: 4, title: "Mission Impossible 2", director: "Tom Cruise", rating: 4.4 },
];

//
movies.map((movie) => {
  console.log(movie.title.toUpperCase(), movie.rating);
});
//4.0 and above
const topRatedMovies = movies.filter((movie) => {
  return movie.rating >= 4;
});

console.log(topRatedMovies);

// miss
const searchedMovies = movies.filter((movie) => movie.title.includes("miss"));
console.log(searchedMovies);
//MISS -> miss '      MISS     '
const searchMovies = (searchTerm) => {
  const converted = searchTerm.trim().toLowerCase();
  const moviesSearched = movies.filter((movie) => movie.title.toLowerCase().includes(converted));
  return moviesSearched
};
 console.log(searchMovies("miss"));
// searchMovies("miss");

// get me movies directed by tom cruise
const byTomCruise = movies.filter((movie) => movie.director.toLowerCase() === "tom cruise".toLowerCase());
console.log(byTomCruise);

// get the movie that has an id of 3
const movieOfIdThree = movies.find((movie) => movie.id === 3);
console.log(movieOfIdThree);

// get movies that are rated less than 4

const topRatedMoviesFour = movies.filter((movie) => movie.rating < 4);

console.log(topRatedMoviesFour);





const events = [
  {
    id: 1,
    title: "Movie In the Park",
    category: "Party",
    date: "Aug 6th, 2024",
    price: 0,
    location: "Lagos",
  },
  {
    id: 2,
    title: "Burna Live In Concert",
    category: "Party",
    date: "Dec 23rd, 2024",
    price: 25000,
    location: "Lagos",
  },
  {
    id: 3,
    title: "Read With Kuku",
    category: "Education",
    date: "Sept 6th, 2024",
    price: 5000,
    location: "Online",
  },
  {
    id: 4,
    title: "Japa on a Budget",
    category: "Education",
    date: "Nov 6th, 2024",
    price: 10000,
    location: "Abuja",
  },
  {
    id: 5,
    title: "Mainland Block Party",
    category: "Party",
    date: "Dec 6th, 2024",
    price: 12000,
    location: "Lagos",
  },
];

// get the total number of events
console.log(events.length);

// get events happening in lagos

const eventInLagos = events.filter((event) => event.location.toLowerCase().includes("lagos".toLowerCase()));
console.log(eventInLagos);

// 15000 or less

const fifteenOrLess = events.filter((event) => event.price <= 15000);
console.log(fifteenOrLess);

// get me the parties
const parties = events.filter((event) =>
  event.category.toLowerCase().includes("parTy".toLowerCase())
);

console.log(parties);

// arrange the events alphabetically using their title a toAZ

const alpha = events.sort((a, b) => a.title.localeCompare(b.title));

console.log(alpha)

// get a random event from the events list

const numOfEvents = events.length;
const randomPostion = Math.floor(Math.random() * numOfEvents);
console.log(events[randomPostion])
