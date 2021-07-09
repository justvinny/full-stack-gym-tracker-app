import { makeStyles, Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { bgColor, textColor } from "../../defaults";
import "./RoutineCard.css";
import DetailedRoutine from "./DetailedRoutine";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: "0px 10px",
        marginBottom: 10,
    }, fontColor: {
        color: textColor
    },
    accordion: {
        // paddingTop: 50
    },
    summary: {
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        justifyContent: "space-between",
        height: 100,
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: 4,
        fontSize: "3em",
        fontWeight: 700
    },
    summaryLabel: {
        alignSelf: "start"
    }
}));

const RoutineCard = ({ routine }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Accordion className={classes.accordion}>
                <AccordionSummary expandIcon={<ExpandMore />} className={classes.summary}>
                    <Typography variant="h5">{routine.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <DetailedRoutine routine={routine} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default RoutineCard;