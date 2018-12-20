import sample from "lodash/sample"
import locations from "./config/locations"
import { getWeekDay, getWeekDayOfTomorrow } from "./uitls"

export default function getLocation() {
  return sample(locations)
}

getLocation()
