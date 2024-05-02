import { get, ref } from "firebase/database";
import db from "./firebase.config.js";

const refAircrafts = ref(db, "/aircrafts");

const getAllAircrafts = () => {
  return get(refAircrafts);
}

export default {
  getAllAircrafts
}