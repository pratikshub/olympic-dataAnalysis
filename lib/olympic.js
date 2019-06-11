"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.medalWonPerCountry = exports.noOfTimesHostedCity = void 0;

//Extracting the Data By Years
const getDataForYear = (events, year) => {
  let eventsByYear = events.filter(element => {
    if (parseInt(element['Year']) >= year && element['Medal'] !== 'NA') {
      return element;
    }
  });
  return eventsByYear;
}; 

// Number of times olympics hosted per City over the years - Pie chart


const noOfTimesHostedCity = events => {
  let result = events.reduce((result, event) => {
    if (result.hasOwnProperty(event['City'])) {
      if (!result[event['City']].includes(event['Games'])) {
        result[event['City']].push(event['Games']);
      }
    } else {
      result[event['City']] = [];
      result[event['City']].push(event['Games']);
    }

    return result;
  }, {});

  for (let event in result) {
    result[event] = result[event].length;
  }

  return result;
};

// Top 10 countries who have won most medals after 2000 - stacked column - split gold/silver/bronze


exports.noOfTimesHostedCity = noOfTimesHostedCity;

const medalWonPerCountry = (events, year) => {
  let eventsByYear = getDataForYear(events, year);
  let result = eventsByYear.reduce((result, element) => {
    if (result.hasOwnProperty(element['NOC'])) {
      if (result[element['NOC']].hasOwnProperty(element['Medal'])) {
        result[element['NOC']][element['Medal']]++;
        result[element['NOC']]['Total']++;
      } else {
        result[element['NOC']][element['Medal']] = 1;
        result[element['NOC']]['Total']++;
      }
    } else {
      result[element['NOC']] = {};
      result[element['NOC']][element['Medal']] = 1;
      result[element['NOC']]['Total'] = 1;
    }
  });
  var arr = Object.keys(result).sort((a, b) => {
    return result[b]["Total"] - result[a]["Total"];
  }).slice(0, 10).map(element => {
    let temp = {};
    temp[element] = result[element];
    return temp;
  });
  return arr;
}; 
//M/F participation by decade - column chart
//Per year average age of athletes who participated in Boxing Men’s Heavyweight - Line
//Find out all medal winners from India per season - Table


exports.medalWonPerCountry = medalWonPerCountry;