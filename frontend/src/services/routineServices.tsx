import axios from "axios";
import { ObjectId } from "mongodb";

interface Routine {
  _id?: ObjectId;
  name: string;
  workouts: Workout[];
}

interface Workout {
  _id?: ObjectId;
  day: string;
  exercises: Exercise[];
}

interface Exercise {
  _id?: ObjectId;
  name: string;
  sets: WorkSet[];
}

interface WorkSet {
  _id?: ObjectId;
  weight: number;
  reps: number;
}

const getAllRoutines = () => {
  return axios.get("/api/routines").then((res) => res.data);
};

const addRoutine = (routine: Routine) => {
  return axios.post("/api/routines", routine).then((res) => res.data);
};

const updateRoutine = (routine: Routine) => {
  return axios
    .put(`/api/routines/${routine._id}`, routine)
    .then((res) => res.data);
};

const routineServices = { addRoutine, getAllRoutines, updateRoutine };
export default routineServices;
