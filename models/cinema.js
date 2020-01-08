const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.get_titles = function () {
  const filmTitles = this.films.map((film) => {
      return film.title;
    });
    return filmTitles;
};

module.exports = Cinema;
