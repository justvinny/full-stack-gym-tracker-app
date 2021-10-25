import { Box, TableRow, TableCell, IconButton } from "@mui/material";
import { Delete, Edit } from "@material-ui/icons";

const SetComponent = ({ set, deleteSet, setIndex, editClick }) => {
  return (
    <TableRow>
      <TableCell></TableCell>
      <TableCell align="right">{set.weight}</TableCell>
      <TableCell align="right">{set.reps}</TableCell>
      <TableCell width="100px" align="center">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton size="small" onClick={editClick(set, setIndex)}>
            <Edit size="small" color="primary" />
          </IconButton>
          <IconButton size="small" onClick={deleteSet(setIndex)}>
            <Delete size="small" color="primary" />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default SetComponent;