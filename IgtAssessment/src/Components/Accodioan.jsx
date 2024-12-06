import React, { Component } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    styled,
    Box,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class FAQAccordion extends Component {
    render() {
        return (
            <AccordionStyle>
                <Box className="frequencyBox">
                    <Typography className="frequent">Frequent Question</Typography>
                    <Typography className="questions">Do you have any question</Typography>
                </Box>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <AddCircleIcon className="addStyle" />
                        <Typography>What is React.js?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            React.js is a JavaScript library for building user interfaces. It
                            is maintained by Facebook and is widely used for building web
                            applications.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <AddCircleIcon className="addStyle" />
                        <Typography>What is Material-UI?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Material-UI (MUI) is a popular React UI framework that implements
                            Google's Material Design system to create beautiful and
                            consistent user interfaces.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        <AddCircleIcon className="addStyle" />
                        <Typography>How does useState work in React?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            The `useState` hook is used to manage state in React functional
                            components. It returns a state variable and a function to update
                            its value.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                    >
                        <AddCircleIcon className="addStyle" />
                        <Typography>What is JSX?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            JSX is a syntax extension for JavaScript that looks similar to
                            HTML. It is used with React to describe the UI structure.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </AccordionStyle>
        );
    }
}

export default FAQAccordion;

const AccordionStyle = styled(Box)({
    marginBottom: "150px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    width: "70%",
    "& .addStyle": {
        marginLeft: "10px",
        marginRight: "20px",
        color: "#3FDBB1"
    },
    "& .frequent": {
        color: "#EF9E48",
        fontSize: "18px",
        fontWeight: 600,
    },
    "& .frequencyBox": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginBottom: "90px"
    },
    "& .questions": {
        fontWeight: 600,
        fontSize: "36px",
    }
})
