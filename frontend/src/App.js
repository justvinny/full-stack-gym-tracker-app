import './App.css';
import { HashRouter as Router, Switch } from "react-router-dom";
import { Typography } from "@material-ui/core";
import TopAppBar from './components/TopAppBar';
import RoutineTemplates from './pages/RoutineTemplates';

const App = () => {
  return (
    <div className="App">
      <Router>
        <TopAppBar />
        <main>
          <Switch>
            <RoutineTemplates />
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
