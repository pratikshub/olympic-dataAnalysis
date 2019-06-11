import csv from "csvtojson";

let convertToJson = async filePath => {
  let array = await csv().fromFile(filePath);
  return array;
};

let getData = async () => {
  let events = await convertToJson("../data/athlete_events.csv");
  let noc = await convertToJson("../data/noc_regions.csv");
  return {
    events,
    noc
  };
};

export default getData;