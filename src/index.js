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

const writeEachFile = (path, jsonObject) => {
   fs.writeFile(path, jsonObject, (err) => {
      if (err) {
         console.log(err);
      }
   })
}
async function getOutput(){
   try{
      await writeEachFile('./output/olympicsHostedPerCity.json', 
            stringify(noOfTimesHostedCity(events)));

      await writeEachFile('./output/olympicsTopMedalWon.json', 
            stringify(medalWonPerCountry(events, noc, 2000)));

      await writeEachFile('./output/olympicsParticipationByGender.json', 
            stringify(participationByGender(events)));
   
      await writeEachFile('./output/olympicsAverageAgeYear.json', 
            stringify(averageAgeBuilder(events, "Boxing Men's Heavyweight")));

      await writeEachFile('./output/olympicsMeadalWonIndia.json',
            stringify(medalWonByIndia(events, 'India')));


   }
   catch (error) {
      console.log(error);
    }
}
getOutput();
