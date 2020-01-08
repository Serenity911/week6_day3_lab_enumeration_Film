const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.get_titles = function () {
  const filmTitles = this.films.map((film) => {
    return film.title;
  });
  return filmTitles;
};

Cinema.prototype.find = function(title) {
  const filmByTitle = this.films.find((film) => {
    return film.title === title;
  })
  return filmByTitle;
};

Cinema.prototype.findByGenre = function(genre) {
  const filmByGenre = this.films.filter((film) => {
    return film.genre === genre;
  });
  return filmByGenre;
};

Cinema.prototype.yearHasFilms = function(year) {
  const result = this.films.filter((film) => {
    return film.year === year;
  });
  return result.length > 0;
};

Cinema.prototype.hasMinimumLength = function(length) {
  const result = this.films.filter((film) => {
    return film.length > length;
  });
  return result.length > 0;
};


module.exports = Cinema;
