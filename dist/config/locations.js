"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _nodeFetch = require("node-fetch");

var _nodeFetch2 = _interopRequireDefault(_nodeFetch);

var _cheerio = require("cheerio");

var _cheerio2 = _interopRequireDefault(_cheerio);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

var _uitls = require("../uitls");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  name: "Liebstöckel",
  info: function info() {
    return (0, _nodeFetch2.default)("https://liebstoeckel-tagesbar.de/mittagskarte/").then(function (responseRandom) {
      return responseRandom.text();
    }).then(function (res) {
      var $ = _cheerio2.default.load(res);

      var menu = $("#main").find(".entry-content").text();

      var re = /Donnerstag(.*)Freitag/gms;
      var re = new RegExp((0, _uitls.getWeekDay)() + "(.*)" + (0, _uitls.getWeekDayOfTomorrow)(), "gms");

      return re.exec(menu)[0];
    });
  }
}, {
  name: "Azad Grill Jena"
}, {
  name: "Haus im Sack"
}, {
  name: "Stilbruch"
}, {
  name: "JEN Japanische Ramen Küche"
}, {
  name: "Kartoffelhaus Nr.1"
}, {
  name: "Wirtshaus DAHEME"
}, {
  name: "Köz Anatolische Spezialitäten"
}, {
  name: "Göthe Gallerie Pizza Lupo"
}, {
  name: "Sushi Ninjas"
}, {
  name: "Mekkan Döner",
  info: function info() {
    var menu = {
      Montag: "Pizza Tag",
      Dienstag: "Dönertag",
      Freitag: "Nudeltag"
    };
    return (0, _get2.default)(menu, _uitls.getWeekDay, "Normales Menü");
  }
}, {
  name: "Syrisches Restraurant"
}, {
  name: "Fritz Mitte"
}, {
  name: "Cheers"
}, {
  name: "Versilia"
}, {
  name: "Osteria Pizza"
}, {
  name: "Rosenmensa"
}, {
  name: "Bunshi",
  info: "Lust auf Spaziergang?"
}, {
  name: "Immergrün"
}, {
  name: "Grünovski"
}, {
  name: "Teufelsgrill 😈 ",
  info: function info() {
    return "Bratwurst & Rostbrätel ohne Ende";
  }
}];