import fetch from "node-fetch"
import cheerio from "cheerio"

import get from "lodash/get"

import { getWeekDay, getWeekDayOfTomorrow } from "../uitls"

export default [
  {
    name: "Liebstöckel",
    info: () =>
      fetch("https://liebstoeckel-tagesbar.de/mittagskarte/")
        .then(responseRandom => responseRandom.text())
        .then(res => {
          const $ = cheerio.load(res)

          const menu = $("#main")
            .find(".entry-content")
            .text()

          var re = /Donnerstag(.*)Freitag/gms
          var re = new RegExp(
            `${getWeekDay()}(.*)${getWeekDayOfTomorrow()}`,
            "gms"
          )

          return re.exec(menu)[0]
        })
  },
  {
    name: "Azad Grill Jena"
  },
  {
    name: "Haus im Sack"
  },
  {
    name: "Stilbruch"
  },
  {
    name: "JEN Japanische Ramen Küche"
  },
  {
    name: "Kartoffelhaus Nr.1"
  },
  {
    name: "Wirtshaus DAHEME"
  },
  {
    name: "Köz Anatolische Spezialitäten"
  },
  {
    name: "Göthe Gallerie Pizza Lupo"
  },
  {
    name: "Sushi Ninjas"
  },
  {
    name: "Mekkan Döner",
    info: () => {
      const menu = {
        Montag: "Pizza Tag",
        Dienstag: "Dönertag",
        Freitag: "Nudeltag"
      }
      return get(menu, getWeekDay, "Normales Menü")
    }
  },
  {
    name: "Syrisches Restraurant"
  },
  {
    name: "Fritz Mitte"
  },
  {
    name: "Cheers"
  },
  {
    name: "Versilia"
  },
  {
    name: "Osteria Pizza"
  },
  {
    name: "Rosenmensa"
  },
  {
    name: "Bunshi",
    info: "Lust auf Spaziergang?"
  },
  {
    name: "Immergrün"
  },

  {
    name: "Grünovski"
  },
  {
    name: "Teufelsgrill 😈 ",
    info: () => "Bratwurst & Rostbrätel ohne Ende"
  }
]
