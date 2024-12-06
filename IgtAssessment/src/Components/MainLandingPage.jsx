import React, { useState } from "react";
import { Box, Typography, Button, TextField, Grid, IconButton, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ladyImage from "../assets/ladyImage.png"
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import SearchIcon from '@mui/icons-material/Search';
import socialLogo from "../assets/logo.png"
import mainVideoSrc from "../assets/mainSrc.mp4";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const StyledButton = styled(Button)({
    backgroundColor: "#FCF2E8",
    color: "white",
    borderRadius: "5px",
    fontSize: "1rem",
    padding: "10px 20px",
    cursor: "pointer",
    textTransform: "capitalize",
    '&:hover': {
        backgroundColor: "#ff8c00",
    }
});

const Main = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleImageClick = () => {
        setShowVideo(true);
    };
    return (
        <MainStyle>
            <Box className="navbar">
                <Typography variant="h6" className="logo">Landguru</Typography>
                <Box>
                    <ul className="nav-links">
                        <li>Home</li>
                        <li>Advertise <KeyboardArrowDownIcon /></li>
                        <li>Supports <KeyboardArrowDownIcon /></li>
                        <li>Contact</li>
                    </ul>
                </Box>
                <StyledButton className="cta-btn">Try for Free</StyledButton>
            </Box>

            <Box className="content">
                <Box className="left-section">
                    <Typography className="trusted-text"><StarIcon /><StarIcon /><StarIcon /><StarIcon /> <StarBorderIcon /> Trusted by over 4,332 students</Typography>
                    <Typography variant="h4" className="heading">Learn Design with Nia Matos</Typography>
                    <Typography className="description">
                        Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.
                    </Typography>
                    <Box className="search-bar">
                        <TextField
                            variant="outlined"
                            fullWidth
                            placeholder="Search Course Name"
                            className="search-input"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                    <Box className="sponsors">
                        <img src={socialLogo} alt="sponsorLogo" />
                    </Box>
                </Box>

                <Box className="right-section">
                    <Box className="image-wrapper">
                        {showVideo ? (
                            <video
                                src={mainVideoSrc}
                                controls
                                autoPlay
                                className="main-image"
                            />
                        ) : (
                            <img
                                src={ladyImage}
                                alt="Woman working with laptop"
                                className="main-image"
                                style={{ width: "100%", cursor: "pointer", borderRadius: "8px" }}
                                onClick={handleImageClick}
                            />
                        )}
                    </Box>
                </Box>
            </Box>
        </MainStyle>
    );
};

export default Main;

const MainStyle = styled(Box)({
    backgroundImage: "linear-gradient(106.43deg, #E0F5FA -1.4%, #FFFDE6 100.87%)",
    padding: "20px",
    maxWidth: "100%",
    margin: "0 0",
    '.navbar': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '40px',
    },
    '.logo': {
        fontWeight: 'bold',
    },
    '.nav-links': {
        listStyle: 'none',
        display: 'flex',
        gap: '20px',
        margin: '0',
        padding: '0',
        justifyContent: "center",
        alignItems: "Center"
    },
    '.nav-links li': {
        cursor: 'pointer',
        fontSize: '1rem',
        justifyContent: "center",
        alignItems: "Center",
        display: 'flex',
    },
    '.cta-btn': {
        backgroundColor: '#ffa500',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '1rem',
        cursor: 'pointer',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: '#ff8c00',
        }
    },
    '.content': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: "93px",
        marginBottom: "90px"
    },
    '.left-section': {
        maxWidth: '50%',
        marginLeft: "10%"
    },
    '.trusted-text': {
        color: 'gray',
        fontSize: '0.9rem',
        marginBottom: '10px',
        display: "flex",
        // justifyContent: "center",
        alignItems: "center"

    },
    '.heading': {
        margin: '10px 0',
        fontSize: "80px",
    },
    '.description': {
        fontSize: '1rem',
        color: 'gray',
        marginBottom: '20px',
        maxWidth: "500px",
        lineHeight: "35px"
    },
    '.search-bar': {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
    },
    '.search-input': {
        borderRadius: '5px',
        backgroundColor: "white",
        color: "black",
        width: "500px"
    },
    '.search-btn': {
        backgroundColor: '#ffa500',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    '.sponsors': {
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginTop: '20px',
    },
    '.sponsor-logo': {
        width: '50px',
        height: 'auto',
    },
    '.right-section': {
        position: 'relative',
    },
    '.image-wrapper': {
        position: 'relative',
    },
    '.main-image': {
        width: '400px',
        height: 'auto',
        borderRadius: '10px',
    },
    '.play-button': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        border: '2px solid #ffa500',
        color: '#ffa500',
        borderRadius: '50%',
        padding: '15px',
        fontSize: '1.5rem',
    }
});
