import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import "./DetailedRoutine.css";
import { RoutineTemplate } from "../../types";

interface Props {
  routine: RoutineTemplate;
}

const DetailedRoutine = ({ routine }: Props) => {
  return (
    <Box>
      {routine.content.map((workout, index) => {
        return (
          <TableContainer
            key={workout.day + workout.name + index}
            component={Paper}
            sx={{
              marginBottom: "20px",
              padding: 0,
            }}
          >
            <Box
              sx={{
                marginTop: "16px",
                marginLeft: "16px",
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              Day {workout.day} - {workout.name}
            </Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, paddingTop: "4px" }}>
                    Exercise
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {workout.exercises.map((exercise, index) => {
                  return (
                    <TableRow key={exercise + index}>
                      <TableCell component="th" scope="row">
                        {exercise}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        );
      })}
    </Box>
  );
};

export default DetailedRoutine;
