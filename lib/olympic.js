"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.medalWonByIndia = exports.averageAgeBuilder = exports.participationByGender = exports.medalWonPerCountry = exports.noOfTimesHostedCity = void 0;

function mapValues(data, fun) {
  let result = Object.keys(data).reduce((acc, values) => {
    acc[values] = fun(data[values]);
    return acc;
  }, {});
  return result;
} // Number of times olympics hosted per City over the years - Pie chart


const noOfTimesHostedCity = data => {
  let result = data.reduce((res, event) => {
    if (!res[event['City']]) {
      let temp = new Set();
      res[event['City']] = temp;
      res[event['City']].add(event['Games']);
    } else {
      res[event['City']].add(event['Games']);
    }

    return res;
  }, {});
  return mapValues(result, function (element) {
    return element.size;
  });
}; // Top 10 countries who have won most medals after 2000 - stacked column - split gold/silver/bronze
//Extracting the Data By Years


exports.noOfTimesHostedCity = noOfTimesHostedCity;

const getDataForYear = (events, year) => {
  let eventsByYear = events.filter(element => {
    if (parseInt(element['Year']) > year && element['Medal'] !== 'NA') {
      return element;
    }
  });
  return eventsByYear;
}; //Changing NOC name to Region


const changeNocToRegion = (result, noc) => {
  let nameMap = noc.reduce((acc, item) => {
    acc[item['NOC']] = item['region'];
    return acc;
  }, {});
  let changedName = Object.keys(result).reduce((acc, item) => {
    acc[nameMap[item]] = result[item];
    return acc;
  }, {});
  return changedName;
}; //Sorting


const sortedCountriesMedal = data => {
  var arr = Object.entries(data).sort((a, b) => {
    return b[1]['Total'] - a[1]['Total'];
  }).slice(0, 10).reduce((acc, element) => {
    acc[element[0]] = element[1];
    return acc;
  }, {});
  return arr;
}; // Question 2nd 


const medalWonPerCountry = (events, noc, year) => {
  let eventsByYear = getDataForYear(events, year);
  let result = eventsByYear.reduce((res, element) => {
    if (!res[element['NOC']]) {
      res[element['NOC']] = {};
      res[element['NOC']][element['Medal']] = 1;
      res[element['NOC']]['Total'] = 1;
    } else if (!res[element['NOC']][element['Medal']]) {
      res[element['NOC']][element['Medal']] = 1;
      res[element['NOC']]['Total']++;
    } else {
      res[element['NOC']][element['Medal']]++;
      res[element['NOC']]['Total']++;
    }

    return res;
  }, {});
  return changeNocToRegion(sortedCountriesMedal(result), noc);
}; //M/F participation by decade - column chart
//DecadeBuilding


exports.medalWonPerCountry = medalWonPerCountry;

const participationByDecade = result => {
  let participationByGender = Object.keys(result).reduce((acc, year) => {
    let decade = `${year.substring(0, 3)}0-${year.substring(0, 3)}9`;

    if (!acc[decade]) {
      acc[decade] = {};
      acc[decade]['M'] = result[year]['M'];
      acc[decade]['F'] = result[year]['F'];
    } else {
      acc[decade]['M'] += result[year]['M'];
      acc[decade]['F'] += result[year]['F'];
    }

    return acc;
  }, {});
  return participationByGender;
}; // Question 3


const participationByGender = events => {
  let result = events.reduce((res, element) => {
    if (!res[element['Year']]) {
      res[element['Year']] = {};
      res[element['Year']]['ID'] = [];
      res[element['Year']]['ID'].push(element['ID']);
      res[element['Year']]['M'] = element['Sex'] === 'M' ? 1 : 0;
      res[element['Year']]['F'] = element['Sex'] === 'F' ? 1 : 0;
    } else if (!res[element['Year']]['ID'].includes(element['ID'])) {
      res[element['Year']]['ID'].push(element['ID']);
      res[element['Year']][element['Sex']]++;
    }

    return res;
  }, {});
  return participationByDecade(result); // return result;
}; //Per year average age of athletes who participated in Boxing Men’s Heavyweight - Line
//Extracting Boxing Men’s Heavyweight data


exports.participationByGender = participationByGender;

const getDataForEvent = (events, GamesType) => {
  let eventsByGames = events.filter(element => {
    if (element['Event'] === GamesType) {
      return element;
    }
  });
  return eventsByGames;
}; //Question 4


const averageAgeBuilder = (events, GamesType) => {
  let eventsByGames = getDataForEvent(events, GamesType);
  let result = eventsByGames.reduce((result, element) => {
    if (result.hasOwnProperty(element['Year']) && element['Age'] !== 'NA') {
      result[element['Year']]['Age'] += parseInt(element['Age']);
      result[element['Year']]['Count']++;
    } else if (!result.hasOwnProperty(element['Year']) && element['Age'] !== 'NA') {
      result[element['Year']] = {
        'Age': parseInt(element['Age']),
        'Count': 1
      };
    }

    return result;
  }, {});
  let averageAge = Object.keys(result).reduce((acc, year) => {
    acc[year] = (result[year]['Age'] / result[year]['Count']).toFixed(2);
    return acc;
  }, {});
  return averageAge;
}; //Find out all medal winners from India per season - Table
//Extraction Data by Team


exports.averageAgeBuilder = averageAgeBuilder;

const getDataForTeam = (events, Team) => {
  let eventsByTeam = events.filter(element => {
    if (element['Team'] === Team) {
      return element;
    }
  });
  return eventsByTeam;
}; //Question 5


const medalWonByIndia = (events, Team) => {
  let dataByTeam = getDataForTeam(events, Team);
  let medalIndiaWon = dataByTeam.reduce((result, element) => {
    if (result.hasOwnProperty(element['Year']) && element['Medal'] !== 'NA') {
      if (!result[element['Year']].includes(element['Name'])) {
        result[element['Year']].push(element['Name']);
      }
    } else if (!result.hasOwnProperty(element['Games']) && element['Medal'] !== 'NA') {
      result[element['Games']] = [];
      result[element['Games']].push(element['Name']);
    }

    return result;
  }, {});
  return medalIndiaWon;
};

exports.medalWonByIndia = medalWonByIndia;