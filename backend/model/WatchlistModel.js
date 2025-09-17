const{model} = require("mongoose");

const{WatchlistSchema} = require("../schemas/WatchlistSchema");

const WatchlistModel = new model("watchlist",WatchlistSchemas);

module.exports = {WatchlistModel};