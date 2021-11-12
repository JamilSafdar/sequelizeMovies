const yargs = require("yargs");
const {
  addMovie,
  listMovies,
  updateMovie,
  deleteMovie,
} = require("./movie/movie.method");
const command = process.argv[2];
const { addActor } = require("./movie/actor.method");

const app = async () => {
  if (command === "add") {
    addMovie({ title: yargs.argv.title, actor: yargs.argv.actor });
  } else if (command === "list") {
    listMovies();
  } else if (command === "update") {
    const searchMovie = { title: yargs.argv.title };
    const updateValues = { actor: yargs.argv.actor };
    await updateMovie(searchMovie, updateValues);
  } else if (command === "delete") {
    const findMovie = {
      title: yargs.argv.title,
    };
    await deleteMovie(findMovie);
  } else if (command === "create-actor") {
    const actorObj = {
      actor_name: yargs.argv.actor_name,
    };
    await addActor(actorObj);
  } else {
    console.log("Incorrect command");
  }
};
app();
