import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent, Grid, Chip, List, ListItem, ListItemText } from "@mui/material";
import { styled, textAlign } from "@mui/system";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const plans = [
    {
        name: "Free Plan",
        description: "For small teams or office",
        price: null,
        features: [
            "Ultimate access to all courses, exercises, and assessments",
            "Free access for all kinds of exercise corrections with downloads",
            "Total assessment corrections with free download access system",
            "Unlimited download of courses on the mobile app contents",
            "Download and print courses and exercises in PDF",
        ],
        disabled: [3, 4],
    },
    {
        name: "Premium",
        description: "For startup enterprise",
        price: "49.99",
        features: [
            "Ultimate access to all courses, exercises, and assessments",
            "Free access for all kinds of exercise corrections with downloads",
            "Total assessment corrections with free download access system",
            "Unlimited download of courses on the mobile app contents",
            "Download and print courses and exercises in PDF",
        ],
        recommended: true,
    },
];

const PricingPlan = () => {
    const [planType, setPlanType] = useState("Monthly");

    const StyledCard = styled(Card)({
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        borderRadius: "10px",
        textAlign: "left",
        position: "relative",
        padding: "20px",
        border: "1px solid #ddd",
        "&.recommended": {
            border: "2px solid #3FDBB1",
        },
    });

    const SwitchButton = styled(Button)(({ active }) => ({
        backgroundColor: active ? "#fff" : "#F7F8FB",
        color: active ? "black" : "#333",
        padding: "10px 20px",
        fontSize: "1rem",
        cursor: "pointer",
        transition: "0.3s ease",
        "&:hover": {
            backgroundColor: "#F7F8FB",
            color: "black",
        },
    }));

    return (
        <Box sx={{ maxWidth: "1200px", margin: "50px auto", padding: "20px", textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column" }}>
            <Box className="planBox">
                <Typography variant="subtitle1" sx={{ color: "#ffa500", fontWeight: "bold" }}>
                    PRICING PLAN
                </Typography>
                <Typography variant="h4" sx={{ margin: "10px 0 30px" }}>
                    Choose your pricing policy
                </Typography>

                <Box sx={{
                    display: "flex", justifyContent: "center", gap: "10px", marginBottom: "40px", background: "#F7F8FB"
                    , padding: "10px", width: "350px", alignItems: "center", textAlign: "center"
                }}>
                    <SwitchButton active={planType === "Monthly"} onClick={() => setPlanType("Monthly")}>
                        Monthly Plan
                    </SwitchButton>
                    <SwitchButton active={planType === "Annual"} onClick={() => setPlanType("Annual")}>
                        Annual Plan
                    </SwitchButton>
                </Box>
            </Box>
            {/* Pricing Plans */}
            <Grid container spacing={4} justifyContent="center">
                {plans.map((plan, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <StyledCard className={plan.recommended ? "recommended" : ""}>
                            {plan.recommended && (
                                <Chip
                                    label="Recommended"
                                    sx={{
                                        // position: "absolute",
                                        // top: "10px",
                                        // left: "10px",
                                        backgroundColor: "#ffa500",
                                        color: "#fff",
                                        fontWeight: "bold",
                                        marginBottom: "25px"
                                    }}
                                />
                            )}
                            <CardContent>
                                <Typography variant="h5" sx={{ fontWeight: "bold", marginBottom: "5px" }}>
                                    {plan.name}
                                </Typography>
                                <Typography sx={{ color: "gray", marginBottom: "20px" }}>{plan.description}</Typography>

                                {plan.price ? (
                                    <Box sx={{ marginBottom: "20px" }}>
                                        <Typography sx={{ fontSize: "0.8rem", color: "gray" }}>Starting from</Typography>
                                        <Typography sx={{ fontSize: "2rem", fontWeight: "bold", color: "#4caf50" }}>
                                            {plan.price}
                                            <Typography component="span" sx={{ fontSize: "0.8rem", color: "gray" }}>
                                                /mo
                                            </Typography>
                                        </Typography>
                                    </Box>
                                ) : null}

                                <List sx={{ marginBottom: "20px", paddingLeft: 0 }}>
                                    {plan.features.map((feature, i) => (
                                        <ListItem key={i} disablePadding>
                                            {plan.disabled?.includes(i) ? <CancelIcon /> : <CheckCircleIcon />}
                                            <ListItemText
                                                primary={feature}
                                                sx={{
                                                    fontSize: "0.9rem",
                                                    color: plan.disabled?.includes(i) ? "#ccc" : "#333",
                                                    marginLeft: "15px"
                                                }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Box style={{ textAlign: "center" }}>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: plan.recommended ? "#FCF2E8" : "#FCF2E8",
                                            color: "orange",
                                        }}
                                    >
                                        {plan.price ? "Subscribe Now" : "Start Free Trial"}
                                    </Button>
                                </Box>
                            </CardContent>
                        </StyledCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default PricingPlan;
