import {SyntheticEvent} from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
} from "@mui/material";
import { Delete } from "@material-ui/icons";
import { FeaturedExercises } from "../../../types";

interface Props {
  featuredExercises: FeaturedExercises;
  deleteExercise(index: number): (event: SyntheticEvent) => void;
}

const FeaturedExercisesTable = ({featuredExercises, deleteExercise}: Props) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Exercise</TableCell>
            <TableCell align="center">Weight</TableCell>
            <TableCell align="center">Reps</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {featuredExercises.map((exercise, index) => (
            <TableRow>
              <TableCell align="center">
                {exercise !== undefined ? exercise.name : "-"}
              </TableCell>
              <TableCell align="center">
                {exercise !== undefined
                  ? exercise.sets[exercise.sets.length - 1].weight
                  : "-"}
              </TableCell>
              <TableCell align="center">
                {exercise !== undefined
                  ? exercise.sets[exercise.sets.length - 1].reps
                  : "-"}
              </TableCell>
              <TableCell align="center">
                {exercise !== undefined ? (
                  <IconButton size="small" onClick={deleteExercise(index)}>
                    <Delete fontSize="small" color="error" />
                  </IconButton>
                ) : (
                  "-"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeaturedExercisesTable;
