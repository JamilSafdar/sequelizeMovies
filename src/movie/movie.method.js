const Movie = require("./movie.model");

exports.addMovie = async (movieObj) => {
  try {
    await Movie.sync();
    await Movie.create(movieObj);

    console.log("Movie successfully added to db");
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async () => {
  try {
    await Movie.sync();
    const list = await Movie.findAll({
      raw: true,
      attributes: ["id", "title", "actor"],
    });
    console.log(list);
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async ( searchMovie, updateValues) => {
  try {
    await Movie.update(updateValues, { where: searchMovie });
    console.log(`${searchMovie.title} has been updated`);
 
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (searchMovie) => {
  try {
      await Movie.destroy({ where: searchMovie });
      console.log(`${searchMovie.title} has been deleted`);
  } catch (error) {
      console.log(error);
  }
};