import axios from "axios";

const getAllRoutines = () => {
    return axios.get("http://localhost:3001/")
        .then(res => res.data);
}

const addRoutine = (routine) => {
    return axios.post("http://localhost:3001/", routine)
        .then(res => res.data);
}

const routineServices = { addRoutine, getAllRoutines };
export default routineServices;