import './App.css';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Typography } from "@material-ui/core";
import TopAppBar from './components/MenuNavigation/TopAppBar';
import RoutineTemplates from './pages/RoutineTemplates';
import TrackProgress from './pages/TrackProgress';

const App = () => {
  return (
    <div className="App">
      <Router>
        <TopAppBar />
        <main>
          <Switch>
            <Route exact path="/">
              <h1>Dashboard</h1>
            </Route>
            <Route path="/track-progress">
              <TrackProgress />
            </Route>
            <Route path="/routine-templates">
              <RoutineTemplates />
            </Route>
          </Switch>
        </main>
        <footer>
          <Typography variant="body1">&copy; Copyright 2021 by Vinson Beduya. All rights reserved.</Typography>
        </footer>
      </Router>
    </div>
  );
}

export default App;
