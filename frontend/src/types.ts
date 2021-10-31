import { ObjectId } from "mongodb";

export interface Routine {
  _id?: ObjectId;
  name: string;
  workouts: Workout[];
}

export interface Workout {
  _id?: ObjectId;
  day: string;
  exercises: Exercise[];
}

export interface Exercise {
  _id?: ObjectId;
  name: string;
  sets: WorkSet[];
}

export interface WorkSet {
  _id?: ObjectId;
  weight: number;
  reps: number;
}

export interface RoutineTemplate {
  name: string;
  content: Day[];
}

export interface Day {
  day: number;
  name: string;
  exercises: string[];
}
