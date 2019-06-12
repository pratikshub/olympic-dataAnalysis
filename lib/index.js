"use strict";

var _events = _interopRequireDefault(require("../data/events.json"));

var _nocRegions = _interopRequireDefault(require("../data/noc-regions.json"));

var _olympic = require("./olympic");

var _fileio = require("./fileio");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const olympicHostedPerCity = (0, _olympic.noOfTimesHostedCity)(_events.default);
const medalWonbyCountry = (0, _olympic.medalWonPerCountry)(_events.default, 2000);
const participations = (0, _olympic.participationByGender)();
const averageAge = (0, _olympic.averageAgeBuilder)(_events.default, "Boxing Men's Heavyweight");
const medalWonIndia = (0, _olympic.medalWonByIndia)(_events.default, 'India');
console.log(olympicHostedPerCity); // console.log(medalWonbyCountry)
// console.log(participations)
// console.log(averageAge)
// console.log(medalWonIndia)