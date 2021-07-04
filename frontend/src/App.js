import './App.css';
import { HashRouter as Router } from "react-router-dom";
import { Typography } from "@material-ui/core";
import TopAppBar from './components/TopAppBar';

const App = () => {
  return (
    <div className="App">
      <Router>
        <TopAppBar />
        <footer>
          <Typography variant="body1">&copy; Copyright 2021 by Vinson Beduya. All rights reserved.</Typography>
        </footer>
      </Router>
    </div>
  );
}

export default App;
