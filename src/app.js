const yargs = require("yargs");
const { addMovie } = require("./movie/movie.method");
const command = process.argv[2];

const app = async () => {
    if (command === "add") {
      addMovie({ title: yargs.argv.title, actor: yargs.argv.actor });
    } else {
        console.log("Incorrect command")
    }
};
app();