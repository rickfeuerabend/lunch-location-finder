import get from "lodash/get"

const weekdays = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag"
]
export const getWeekDay = () => weekdays[new Date().getDay()]
export const getWeekDayOfTomorrow = () =>
  get(weekdays, new Date().getDay() + 1, weekdays[0])
