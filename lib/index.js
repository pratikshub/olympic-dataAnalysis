"use strict";

var _events = _interopRequireDefault(require("../data/events.json"));

var _nocRegions = _interopRequireDefault(require("../data/noc-regions.json"));

var _olympic = require("./olympic");

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Tojson
const stringify = jsonData => {
  return JSON.stringify(jsonData, null, 4);
}; // writing File


const writeEachFile = (path, jsonObject) => {
  _fs.default.writeFile(path, jsonObject, err => {
    if (err) {
      console.log(err);
    }
  });
};

async function getOutput() {
  try {
    await writeEachFile('./output/olympicsHostedPerCity.json', stringify((0, _olympic.noOfTimesHostedCity)(_events.default)));
    await writeEachFile('./output/olympicsTopMedalWon.json', stringify((0, _olympic.medalWonPerCountry)(_events.default, _nocRegions.default, 2000)));
    await writeEachFile('./output/olympicsParticipationByGender.json', stringify((0, _olympic.participationByGender)(_events.default)));
    await writeEachFile('./output/olympicsAverageAgeYear.json', stringify((0, _olympic.averageAgeBuilder)(_events.default, "Boxing Men's Heavyweight")));
    await writeEachFile('./output/olympicsMeadalWonIndia.json', stringify((0, _olympic.medalWonByIndia)(_events.default, 'India')));
  } catch (error) {
    console.log(error);
  }
}

getOutput();