import axios from "axios";

const getAllRoutines = () => {
    return axios.get("http://localhost:3001/api/routines")
        .then(res => res.data);
}

const addRoutine = (routine) => {
    return axios.post("http://localhost:3001/api/routines", routine)
        .then(res => res.data);
}

const updateRoutine = (routine) => {
    return axios.put(`http://localhost:3001/api/routines/${routine._id}`, routine)
        .then(res => res.data);
}

const routineServices = { addRoutine, getAllRoutines, updateRoutine };
export default routineServices;