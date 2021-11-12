const Actor = require("./actor.model");

exports.addActor = async (actorObj) => {
    try {
        await Actor.sync();
        await Actor.create(actorObj);
        console.log("Actor successfully added to db");
    } catch (error) {
        console.log(error);
    }
};