import {
  Box,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { Workout } from "../../types";

interface Props {
  lastWorkout: Workout;
}

const RecentWorkoutContainer = ({ lastWorkout }: Props) => (
  <Grid
    item
    xs={12}
    lg={5}
    sx={{
      padding: "0px !important",
      alignSelf: "flex-start",
    }}
  >
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "0px 0px 5px 2px",
        height: { lg: "533px" },
        borderRadius: "0px",
        marginLeft: { lg: "12px" },
        width: "auto",
      }}
    >
      <Box
        sx={{
          marginTop: "16px",
          marginLeft: "16px",
          fontWeight: "bold",
        }}
      >
        Last Workout - {lastWorkout.day}
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Weight</TableCell>
            <TableCell>Sets</TableCell>
            <TableCell>Reps</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lastWorkout.exercises.map((exercise) => (
            <TableRow>
              <TableCell>{exercise.name}</TableCell>
              <TableCell>
                {exercise.sets[exercise.sets.length - 1].weight}
              </TableCell>
              <TableCell>{exercise.sets.length}</TableCell>
              <TableCell>
                {exercise.sets[exercise.sets.length - 1].reps}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
);

export default RecentWorkoutContainer;
