import events from '../data/events.json';
import noc from '../data/noc-regions.json';

import {
noOfTimesHostedCity,
medalWonPerCountry,
participationByGender,
averageAgeBuilder,
medalWonByIndia
} from "./olympic";
import { writeFile } from "./fileio";

const olympicHostedPerCity=noOfTimesHostedCity(events);
const medalWonbyCountry=medalWonPerCountry(events,noc,2000);
const participations=participationByGender(events);
const averageAge=averageAgeBuilder(events,"Boxing Men's Heavyweight");
const medalWonIndia=medalWonByIndia(events,'India');
// console.log(olympicHostedPerCity)
console.log(medalWonbyCountry)
// console.log(participations)
// console.log(averageAge)
// console.log(medalWonIndia)