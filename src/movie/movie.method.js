const Movie = require('./movie.model');

exports.addMovie = async (movieObj) => {
    
    try {
      await Movie.sync();
      await Movie.create(movieObj);

      console.log("Movie successfully added to db");
    } catch (error) {
      console.log(error);
    }
  };