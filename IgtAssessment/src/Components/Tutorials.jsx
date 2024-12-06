import React from "react";
import Slider from "react-slick";
import { Box, Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import VisibilityIcon from '@mui/icons-material/Visibility';
import videoSrc from "../assets/doingWork.mp4";
import videoSrc2 from "../assets/video.mp4";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tutorials = [
    {
        image: videoSrc,
        title: "How to work with prototype design with adobe xd featuring tools",
        rating: 5.0,
        reviews: 392,
        students: 2538,
    },
    {
        image: videoSrc2,
        title: "Create multiple artboard by using figma prototyping tools development",
        rating: 4.5,
        reviews: 524,
        students: 3532,
    },
    {
        image: videoSrc,
        title: "Convert your web layout theming easily with sketch zeplin extension",
        rating: 5.0,
        reviews: 392,
        students: 1037,
    },
    {
        image: videoSrc2,
        title: "Create multiple artboard by using figma prototyping tools development",
        rating: 4.0,
        reviews: 765,
        students: 1345,
    },
];

const StyledCard = styled(Card)({
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease",
    margin: "40px",
    "&:hover": {
        transform: "translateY(-10px)",
    },
});

const TutorialsSection = styled(Box)({
    maxWidth: "1200px",
    margin: "80px auto",
    padding: "40px 20px",
    textAlign: "center",
});

function Tutorials() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
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
        <TutorialsSection>
            <Typography variant="subtitle1" sx={{ color: "#ffa500", fontWeight: "bold", marginBottom: "10px" }}>
                Quality Features
            </Typography>
            <Typography variant="h4" sx={{ marginBottom: "40px" }}>
                Tutorials that people love most
            </Typography>

            <Slider {...sliderSettings}>
                {tutorials.map((tutorial, index) => (
                    <Box key={index} px={2}>
                        <StyledCard>
                            <video
                                src={tutorial.image}
                                controls
                                style={{ width: "100%" }}
                            />
                            <CardContent sx={{ textAlign: "left" }}>
                                <Typography sx={{ color: "#ffa500", fontSize: "0.9rem", marginBottom: "10px" }}>
                                    {"⭐".repeat(Math.floor(tutorial.rating))} {tutorial.rating} ({tutorial.reviews} reviews)
                                </Typography>
                                <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                                    {tutorial.title}
                                </Typography>
                                <Typography sx={{ color: "gray", fontSize: "0.9rem" }} className="visible">
                                    <VisibilityIcon /> {tutorial.students.toLocaleString()} students watched
                                </Typography>
                            </CardContent>
                        </StyledCard>
                    </Box>
                ))}
            </Slider>
        </TutorialsSection>
    );
}

export default Tutorials;
