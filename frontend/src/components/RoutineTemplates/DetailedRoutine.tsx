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

interface Props {
  routine: RoutineTemplate;
}

interface RoutineTemplate {
  name: string,
  content: Day[]
}

interface Day {
  day: number,
  name: string,
  exercises: string[]
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
                fontSize: "h5.fontSize",
                marginLeft: "16px",
                fontWeight: 700,
              }}
            >
              Day {workout.day} - {workout.name}
            </Box>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700 }}>Exercise</TableCell>
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