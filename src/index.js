import events from '../data/events.json';
import noc from '../data/noc-regions.json';

import {
noOfTimesHostedCity,
medalWonPerCountry,
participationByGender,
averageAgeBuilder,
medalWonByIndia
} from "./olympic";
import fs from 'fs';
//Tojson
const stringify = (jsonData) => {
    return JSON.stringify(jsonData, null, 4);
 }
 // writing File
 
 const writeEachFile = (path,jsonObject) => {
    fs.writeFile(path, jsonObject, (err) => {
      if( err){
       console.log(err);
      }   
    })
 }
 
const olympicHostedPerCity=noOfTimesHostedCity(events);
const jsonObjectHosting = stringify(olympicHostedPerCity);
writeEachFile('./output/olympicsHostedPerCity.json',jsonObjectHosting);

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
