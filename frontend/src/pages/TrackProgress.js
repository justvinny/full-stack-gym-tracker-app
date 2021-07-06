import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import CreateWorkout from "./CreateWorkout";

const TrackProgress = () => {
    const { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${path}`}>
                <h1>Track progress!</h1>
                <Link to={`${path}/ppl`}>{path}/ppl</Link>
                <br/>
                <Link to={`${path}/create-workout`}>{path}/create-workout</Link>
            </Route>
            <Route path={`${path}/ppl`}>
                <h1>PPL</h1>
            </Route>
            <Route path={`${path}/create-workout`}>
                <CreateWorkout />
            </Route>

        </Switch>
    )
}

export default TrackProgress;