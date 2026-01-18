//DB代わりの配列
const movieList = [
  {
    movieTitle: "movie1",
    screeningTime: "10:00~12:00",
  },
  {
    movieTitle: "movie2",
    screeningTime: "13:00~15:00",
  },
  {
    movieTitle: "movie3",
    screeningTime: "16:00~18:00",
  },
];

export function getMovieList() {
  return movieList;
}
