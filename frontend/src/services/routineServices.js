import axios from "axios";

const getAllRoutines = () => {
    return axios.get("/api/routines")
        .then(res => res.data);
}

const addRoutine = (routine) => {
    return axios.post("/api/routines", routine)
        .then(res => res.data);
}

const updateRoutine = (routine) => {
    return axios.put(`/api/routines/${routine._id}`, routine)
        .then(res => res.data);
}

const routineServices = { addRoutine, getAllRoutines, updateRoutine };
export default routineServices;