"use strict";

var _conversion = _interopRequireDefault(require("./conversion"));

require("./olympic");

var _fileio = require("./fileio");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _conversion.default)().then(async data => {
  let events = data.events;
  let noc = data.noc;

  try {
    await (0, _fileio.writeFile)("./output/getNoOfMatchesPlayed.json", getNoOfMatchesPlayed(matche));
    await (0, _fileio.writeFile)("./output/getNoOfMatchesWonPerTeamPerYear.json", getNoOfMatchesWonPerTeamPerYear(matches));
    await (0, _fileio.writeFile)("./output/getExtraRunsPerTeamForYear.json", getExtraRunsPerTeamForYear(matches, deliveries, 2016));
    await (0, _fileio.writeFile)("./output/getEconomicalBowlersForYear.json", getEconomicalBowlersForYear(matches, deliveries, 2015));
  } catch (error) {
    console.log(error);
  }
});