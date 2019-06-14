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

const olympicHostedPerCity = (0, _olympic.noOfTimesHostedCity)(_events.default);
console.log(olympicHostedPerCity); // const jsonObjectHosting = stringify(olympicHostedPerCity);
// writeEachFile('./output/olympicsHostedPerCity.json',jsonObjectHosting);
// const medalWonbyCountry=medalWonPerCountry(events,noc,2000);
// const jsonObjectMedalWon = stringify(medalWonbyCountry);
// writeEachFile('./output/olympicsTopMedalWon.json',jsonObjectMedalWon);
// const participations=participationByGender(events);
// console.log(participations)
// const jsonObjectparticipation = stringify(participations);
//   writeEachFile('./output/olympicsParticipationByGender.json',jsonObjectparticipation);
// const averageAge=averageAgeBuilder(events,"Boxing Men's Heavyweight");
// const jsonObjectAvgAge= stringify(averageAge);
//   writeEachFile('./output/olympicsAverageAgeYear.json',jsonObjectAvgAge);
// const medalWonIndia=medalWonByIndia(events,'India');
// const jsonObjectmedalWonIndia = stringify(medalWonIndia);
//   writeEachFile('./output/olympicsMeadalWonIndia.json',jsonObjectmedalWonIndia);