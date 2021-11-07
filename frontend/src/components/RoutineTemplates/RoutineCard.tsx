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
        margin: "0px",
        marginBottom: "1px",
      }}
    >
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMore style={{ color: "#fff" }} />}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: bgColor,
            color: textColor,
            fontWeight: 700,
          }}
        >
          <Box>{routine.name}</Box>
        </AccordionSummary>
        <AccordionDetails>
          <DetailedRoutine routine={routine} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default RoutineCard;
