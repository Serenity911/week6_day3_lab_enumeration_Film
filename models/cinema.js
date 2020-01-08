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


module.exports = Cinema;
