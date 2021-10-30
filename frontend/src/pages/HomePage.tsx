import { Box } from "@material-ui/core";

const HomePage = () => {
  return (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            height: "80vh",
            width: "90vw",    
            bgcolor: "#fff",
            border: "1px solid black",
        }}
    >
      <h1>This is the home page.</h1>

      <Box
        sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "yellow",
        }}
      >
        <div className="profile-photo"></div>
        <div className="text-summary"></div>

        <h1>Top container</h1>
        {/* Most recent exercises container */}
      </Box>      
      <Box
        sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "green",
        }}
      >
        <h1>Middle container</h1>
        {/* 1 box contains name, age, and height */}
        {/* 3 circles Weight: starting, current, goal */}
      </Box>    

      <Box
        sx={{
            display: "flex",
            flexDirection: "row",
            bgcolor: "pink",
        }}
      >
        {/* 3 boxes showing 3 favourite exercises with information: exercise name, best weight, reps */}
        {/* Shows 5 recent workouts and their dates, and duration. */}
        <h1>Bot container</h1>
      </Box>    
    </Box>
  );
};

export default HomePage;
