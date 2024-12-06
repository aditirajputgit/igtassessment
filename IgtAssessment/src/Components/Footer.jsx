import React, { Component } from "react";
import { Box, Button, Divider, Grid, Typography, styled } from "@material-ui/core";

// Footer Class Component
class Footer extends Component {
    render() {
        return (
            <FotterStyle>
                <Box className="readyBox">
                    <Typography className="readingHeading">Ready to learn design</Typography>
                    <Typography className="readingHeading">with Nia Matos</Typography>
                    <Button className="readyButton">Start Learning Today</Button>
                </Box>
                <Box className="divider" ></Box>
                <Grid container spacing={4}>
                    {/* Column 1 */}
                    <Grid item xs={12} sm={6} md={3} className="footerColumn">
                        <Typography variant="h6" gutterBottom className="footerHeader">
                            About Us
                        </Typography>
                        <Typography className="footerText">Support Center</Typography>
                        <Typography className="footerText">Customer Support</Typography>
                        <Typography className="footerText">About Us</Typography>
                        <Typography className="footerText">Copyright</Typography>
                        <Typography className="footerText">Popular Campaign</Typography>
                    </Grid>

                    {/* Column 2 */}
                    <Grid item xs={12} sm={6} md={3} className="footerColumn">
                        <Typography variant="h6" gutterBottom className="footerHeader">
                            Our Information
                        </Typography>
                        <Typography className="footerText">Return Policy</Typography>
                        <Typography className="footerText">Privacy Policy</Typography>
                        <Typography className="footerText">Terms & Conditions</Typography>
                        <Typography className="footerText">Site Map</Typography>
                        <Typography className="footerText">Store Hours</Typography>
                    </Grid>

                    {/* Column 3 */}
                    <Grid item xs={12} sm={6} md={3} className="footerColumn">
                        <Typography variant="h6" gutterBottom className="footerHeader">
                            My Account
                        </Typography>
                        <Typography className="footerText">Press inquiries</Typography>
                        <Typography className="footerText">Social media</Typography>
                        <Typography className="footerText">Directories</Typography>
                        <Typography className="footerText">Images & B-roll</Typography>
                    </Grid>

                    {/* Column 4 */}
                    <Grid item xs={12} sm={6} md={3} className="footerColumn">
                        <Typography variant="h6" gutterBottom className="footerHeader">
                            Policy
                        </Typography>
                        <Typography className="footerText">Press inquiries</Typography>
                        <Typography className="footerText">Social media</Typography>
                        <Typography className="footerText">Directories</Typography>
                        <Typography className="footerText">Images & B-roll</Typography>
                    </Grid>
                </Grid>
            </FotterStyle>
        );
    }
}

export default Footer;



// Styled Footer
const FotterStyle = styled(Box)({
    padding: "0 30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& .footerColumn": {
        textAlign: "left",
    },
    "& .footerText": {
        display: "block",
        color: "#555",
        marginBottom: "8px",
        fontWeight: "bold",
        cursor: "pointer",
        "&:hover": {
            color: "#007BFF",
        },
    },
    "& .footerHeader": {
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "18px",
        lineHeight: "30px",
        marginBottom: "16px",
        fontWeight: 600,
        color: "#0F2137",
        cursor: "pointer",
    },
    "& .readyBox": {
        width: "908px",
        height: "241px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "DM Sans",
        marginBottom: "146px",

    },
    "& .readingHeading": {
        fontFamily: 'DM Sans',
        fontSize: '50px',
        lineHeight: '65px',
        margin: '1px 0',
        letterSpacing: '-2px',
        textAlign: 'center',
    },
    "& .readyButton": {
        width: '205px',
        height: '50px',
        gap: '0px',
        borderRadius: '5px 0px 0px 0px',
        background: "#FCF2E8",
        color: "#EF9E48",
        textTransform: "capitalize",
        fontFamily: "DM Sans"
    },
    "& .divider": {
        marginBottom: "58px",
        borderBottom: "1px solid grey",
        width: "90%"
    }
});


