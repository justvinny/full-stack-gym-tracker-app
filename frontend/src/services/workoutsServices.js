import axios from "axios";

const addWorkout = (workout) => {
    return axios.post("http://localhost:3001/", workout);
}

export default { addWorkout };