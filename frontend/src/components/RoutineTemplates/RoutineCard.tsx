import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore } from "@material-ui/icons";
import { bgColor, textColor } from "../../defaults";
import "./RoutineCard.css";
import DetailedRoutine from "./DetailedRoutine";
import { RoutineTemplate } from "../../types";

interface Props {
  routine: RoutineTemplate;
}

const RoutineCard = ({ routine }: Props) => {
  return (
    <Box
      sx={{
        margin: "0px 10px",
        marginBottom: 10,
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "end",
            justifyContent: "space-between",
            height: 100,
            bgcolor: bgColor,
            color: textColor,
            borderRadius: 4,
            fontSize: "3em",
            fontWeight: 700,
          }}
        >
          <Box sx={{ fontSize: "h5.fontSize" }}>{routine.name}</Box>
        </AccordionSummary>
        <AccordionDetails>
          <DetailedRoutine routine={routine} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default RoutineCard;
