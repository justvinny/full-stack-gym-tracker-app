import { Route, Switch, useRouteMatch, Link } from "react-router-dom";

const TrackProgress = () => {
    const { path, url } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${path}`}>
                <h1>Track progress!</h1>
                <Link to={`${path}/ppl`}>{path}/ppl</Link>
            </Route>
            <Route path={`${path}/ppl`}>
                <h1>PPL</h1>
            </Route>
        </Switch>
    )
}

export default TrackProgress;