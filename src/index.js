import sample from "lodash/sample"
import locations from "./config/locations"

export default function getLocation(name) {
  return sample(locations)
}
