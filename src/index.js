import getData from "./conversion";
import {
//   getNoOfMatchesPlayed,
//   getNoOfMatchesWonPerTeamPerYear,
//   getExtraRunsPerTeamForYear,
//   getEconomicalBowlersForYear
} from "./olympic";
import { writeFile } from "./fileio";

getData().then(async data => {
  let events = data.events;
  let noc= data.noc;
  try {
    await writeFile(
      "./output/getNoOfMatchesPlayed.json",
      getNoOfMatchesPlayed(matche)
    );

    await writeFile(
      "./output/getNoOfMatchesWonPerTeamPerYear.json",
      getNoOfMatchesWonPerTeamPerYear(matches)
    );

    await writeFile(
      "./output/getExtraRunsPerTeamForYear.json",
      getExtraRunsPerTeamForYear(matches, deliveries, 2016)
    );

    await writeFile(
      "./output/getEconomicalBowlersForYear.json",
      getEconomicalBowlersForYear(matches, deliveries, 2015)
    );
  } catch (error) {
    console.log(error);
  }
});
