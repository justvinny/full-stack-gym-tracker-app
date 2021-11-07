import RoutineCard from "../components/RoutineTemplates/RoutineCard";
import { Box } from "@mui/material";
import PageTitleHeader from "../components/PageTitleHeader";

const mockData = [
  {
    name: "Push Pull Split - 4 Days",
    content: [
      {
        day: 1,
        name: "Push A",
        exercises: [
          "Barbell Squats",
          "Leg Extension",
          "Bench Press",
          "Incline DB Bench",
          "Seated DB Shoulder Press",
          "DB Side Lateral Raise",
          "Tricep Pushdown",
          "Cable Tricpe Kickback",
          "Cable Crunches",
          "Weighted Calf Raises",
        ],
      },
      {
        day: 2,
        name: "Pull A",
        exercises: [
          "Pullups",
          "Romanian Deadlift",
          "Hamstring Curls",
          "Lat Pulldown",
          "DB Row",
          "Face Pulls",
          "DB Hammer Curl",
          "DB Bicep Curl",
          "Barbell Shrugs",
          "Cable Crunches",
          "Weighted Calf Raises",
        ],
      },
      {
        day: 3,
        name: "Push B",
        exercises: [
          "Military Press",
          "Barbell Squats",
          "Leg Extension",
          "Incline DB Bench",
          "DB Shoulder Press",
          "DB Side Lateral Raise",
          "Tricep Pushdown",
          "Cable Tricpe Kickback",
          "Cable Crunches",
          "Weighted Calf Raises",
        ],
      },
      {
        day: 4,
        name: "Pull B",
        exercises: [
          "Conventional Deadlift",
          "Hamstring Curls",
          "Lat Pulldown",
          "Seated Cable Row",
          "Facepulls",
          "DB Hammer Curls",
          "DB Bicep Curls",
          "DB Shrugs",
          "Cable Crunches",
          "Weighted Calf Raises",
        ],
      },
    ],
  },
];

const RoutineTemplates = () => {
  return (
    <Box sx={{ width: "90vw", maxWidth: "650px" }}>
      <PageTitleHeader title="Routine Templates" />
      {mockData.map((routine, index) => (
        <RoutineCard key={routine.name + index} routine={routine} />
      ))}
    </Box>
  );
};

export default RoutineTemplates;
