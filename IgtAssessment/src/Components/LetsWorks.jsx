import { Box, Button, Grid, Paper, styled, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import convertWeb from '../assets/img.png';
import LetsWork from "../assets/works.png"
import PricingPlan from './PricePlanning';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function LetsWorks() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <LetWorksStyle>
            <Box className="letConnect">
                <img alt="letsWorks" src={LetsWork} className='letsWork' />
            </Box>
            <PricingPlan />
            <Box className="tutorial">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={7}>
                        <Slider {...sliderSettings}>
                            {[1, 2, 3, 4, 5].map((_, index) => (
                                <Box className="box1" key={index} sx={{ textAlign: "center" }}>
                                    <img
                                        src={convertWeb}
                                        alt={`Slide ${index + 1}`}
                                        className="imgeBox"
                                        style={{ maxWidth: "100%", borderRadius: "8px" }}
                                    />
                                </Box>
                            ))}
                        </Slider>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5}>
                        <Box className="box1">
                            <Typography variant="h6">Free Tutorial</Typography>
                            <Typography className="tutorialHeading">
                                More than a thousand free tutorials uploaded every week
                            </Typography>
                            <Typography className="tutorialPara">
                                Get your tests delivered at home and collect samples from the best design system guidelines. Our tutorials are crafted with care to help you learn and grow.
                            </Typography>
                            <Button className="buttonStyle" variant="contained">Explore Details</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </LetWorksStyle>
    )
}

const LetWorksStyle = styled(Box)({
    "& .letsWork": {
        height: "100%",
        width: "100%"
    },
    "& .pricePolicy": {
        marginBottom: "200px"
    },
    "& .letConnect": {
        background: "#C2CBDE"
    },
    "& .box1": {
        height: "min-content",
    },
    "& .tutorial": {
        marginBottom: "177px",
        padding: "0px 150px"
    },
    "& .tutorialHeading": {
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '48px',
        fontWeight: 700,
        lineHeight: '55px',
        letterSpacing: '-1.5px',
        textAlign: 'left',
        textUnderlinePosition: 'from-font',
        textDecorationSkipInk: 'none',
    },
    "& .tutorialPara": {
        fontFamily: "'DM Sans', sans-serif",
        fontSize: '18px',
        textAlign: 'left',
        textUnderlinePosition: 'from-font',
        textDecorationSkipInk: 'none',
    },
    "& .buttonStyle": {
        width: '150px',
        height: '50px',
        borderRadius: '5px 0px 0px 0px',
        background: "#FCF2E8",
        color: "#EF9E48",
        marginTop: "15px"
    },
    "& .imgeBox": {
        width: "100%",
        height: "496px",
        objectFit: "contain",
    }
})