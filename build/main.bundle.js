"use strict";

var _artists = require("./api/artists.services");

var _artists2 = _interopRequireDefault(_artists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("Loading...");

_artists2.default.getAll("Believe").then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});
