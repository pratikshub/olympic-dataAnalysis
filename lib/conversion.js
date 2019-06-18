"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _csvtojson = _interopRequireDefault(require("csvtojson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let convertToJson = async filePath => {
  let array = await (0, _csvtojson.default)().fromFile(filePath);
  return array;
};

let getEvents = async () => {
  let events = await convertToJson("./data/athlete_events.csv");
  let noc = await convertToJson("./data/noc_regions.csv");
  return {
    events,
    noc
  };
};

var _default = getEvents;
exports.default = _default;