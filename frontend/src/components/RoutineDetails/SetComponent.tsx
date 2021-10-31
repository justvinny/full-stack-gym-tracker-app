import { Box, TableRow, TableCell, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { SyntheticEvent } from "react";
import { WorkSet } from "../../types";

interface Props {
  set: WorkSet;
  deleteSet(setIndex: number): (event: SyntheticEvent) => void;
  setIndex: number;
  editClick(set: WorkSet, setIndex: number): (event: SyntheticEvent) => void;
}

const SetComponent = ({ set, deleteSet, setIndex, editClick }: Props) => {
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
          <IconButton size="small" color="primary" onClick={editClick(set, setIndex)}>
            <Edit fontSize="small" color="inherit" />
          </IconButton>
          <IconButton size="small" color="primary" onClick={deleteSet(setIndex)}>
            <Delete fontSize="small" color="inherit" />
          </IconButton>
        </Box>
      </TableCell>
    </TableRow>
  );
};

export default SetComponent;
