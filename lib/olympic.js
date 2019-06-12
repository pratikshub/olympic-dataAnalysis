"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.medalWonByIndia = exports.averageAgeBuilder = exports.participationByGender = exports.medalWonPerCountry = exports.noOfTimesHostedCity = void 0;

//Extracting Boxing Men’s Heavyweight data
const getDataForEvent = (events, GamesType) => {
  let eventsByGames = events.filter(element => {
    if (element['Event'] === GamesType) {
      return element;
    }
  });
  return eventsByGames;
}; //Extraction Data by Team


const getDataForTeam = (events, Team) => {
  let eventsByTeam = events.filter(element => {
    if (element['Team'] === Team) {
      return element;
    }
  });
  return eventsByTeam;
}; // Number of times olympics hosted per City over the years - Pie chart


const noOfTimesHostedCity = data => {
  let result = data.reduce((res, event) => {
    if (!res[event['City']]) {
      res[event['City']] = [];
      res[event['City']].push(event['Games']);
    } else if (!res[event['City']].includes(event['Games'])) {
      res[event['City']].push(event['Games']);
    }

    return res;
  }, {});
  let hostedCity = Object.entries(result).reduce((city, element) => {
    city[element[0]] = element[1].length;
    return city;
  }, {});
  return hostedCity;
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
  //     let NOCObj=noc.reduce((name,element)=>{
  //          name[element['NOC']]=element['region'];
  //         },{});
  //    let changedRegion= Object.keys(result)
  //     .reduce((acc,element)=>{
  //          acc[NOCObj[element]]=result[element];
  //     },{});
  const nameMap = noc.reduce((acc, item) => {
    acc[item['NOC']] = item['region'];
    return acc;
  }, {});
  const changedName = Object.keys(result).reduce((acc, item) => {
    acc[nameMap[item]] = result[item];
    return acc;
  }, {});
  return changedName;
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
  var arr = Object.keys(result).sort((a, b) => {
    return result[b]["Total"] - result[a]["Total"];
  }).slice(0, 10).reduce((acc, element) => {
    acc[element] = result[element];
    return acc;
  }, {});
  return changeNocToRegion(arr, noc);
}; //M/F participation by decade - column chart


exports.medalWonPerCountry = medalWonPerCountry;

const participationByGender = events => {
  let result = events.reduce((res, element) => {
    if (res.hasOwnProperty(element['Year'])) {
      if (res[element['Year']].hasOwnProperty(element['Sex'])) {
        if (!res[element['Year']][element['Sex']].includes(element['ID'])) {
          res[element['Year']][element['Sex']].push(element['ID']);
        }
      } else {
        res[element['Year']][element['Sex']] = [];
        res[element['Year']][element['Sex']].push(element['ID']);
      }
    } else {
      res[element['Year']] = {};
      res[element['Year']][element['Sex']] = [];
      res[element['Year']][element['Sex']].push(element['ID']);
    }

    return res;
  }, {});
  return result;
}; //Per year average age of athletes who participated in Boxing Men’s Heavyweight - Line


exports.participationByGender = participationByGender;

const averageAgeBuilder = (events, GamesType) => {
  let eventsByGames = getDataForEvent(events, GamesType);
  let result = eventsByGames.reduce((result, element) => {
    if (result.hasOwnProperty(element['Year']) && element['Age'] !== 'NA') {
      result[element['Year']]['Age'] += parseInt(element['Age']);
      result[element['Year']]['Count']++;
      result[element['Year']]['Average'] = (result[element['Year']]['Age'] / result[element['Year']]['Count']).toFixed(2);
    } else if (!result.hasOwnProperty(element['Year']) && element['Age'] !== 'NA') {
      result[element['Year']] = {
        'Age': parseInt(element['Age']),
        'Count': 1
      };
      result[element['Year']]['Average'] = (result[element['Year']]['Age'] / result[element['Year']]['Count']).toFixed(2);
    }

    return result;
  }, {});
  return result;
}; //Find out all medal winners from India per season - Table


exports.averageAgeBuilder = averageAgeBuilder;

const medalWonByIndia = (events, Team) => {
  let dataByTeam = getDataForTeam(events, Team);
  let result = dataByTeam.reduce((result, element) => {
    if (result.hasOwnProperty(element['Games']) && element['Medal'] !== 'NA') {
      if (!result[element['Games']].includes(element['Name'])) {
        result[element['Games']].push(element['Name']);
      }
    } else if (!result.hasOwnProperty(element['Games']) && element['Medal'] !== 'NA') {
      result[element['Games']] = [];
      result[element['Games']].push(element['Name']);
    }

    return result;
  }, {});
  return result;
};

exports.medalWonByIndia = medalWonByIndia;