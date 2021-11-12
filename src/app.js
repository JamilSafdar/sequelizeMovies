const yargs = require("yargs");
const { addMovie, listMovies } = require("./movie/movie.method");
const command = process.argv[2];

const app = async () => {
    if (command === "add") {
      addMovie({ title: yargs.argv.title, actor: yargs.argv.actor });
    } else if (command === "list") {
        listMovies(); 
    } else {
        console.log("Incorrect command")
    }
};
app();