import React from 'react';
import { Star, ChevronDown, Play, Clock } from 'lucide-react';
import { Paper, Button } from '@mui/material';
import './styles.css';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const CourseCard = ({ title, rating, reviews, students, duration, description, features = [] }) => {
    return (
        <Paper className="card">
            <div className="card-header">
                <div className="card-info">
                    <PlayCircleFilledWhiteIcon className="text-gray" fontSize="large" />
                    <div>

                        <div className="card-subinfo">
                            <div className="rating">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        fill={i < Math.floor(rating) ? "yellow" : "white"}
                                        key={i}
                                        size={14}
                                        className={i < Math.floor(rating) ? "star star-filled" : "star"}
                                    />
                                ))}
                                <span className="ml-1">{rating} ({reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock size={14} />
                                <span>{students} students watched</span>
                            </div>
                        </div>
                        <h3 className="card-title">{title}</h3>
                    </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", width: "300px", justifyContent: "flex-end" }}>
                    <Button className="card-action-btn" variant='contained' style={{ backgroundColor: "#3FDBB1", textTransform: "capitalize" }}>
                        View Classes |
                        <span>{duration}hrs</span>
                    </Button>
                    <ExpandMoreIcon />
                </div>
            </div>
            <p className="card-description">{description}</p>
            {features.length > 0 && (
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <CheckCircleIcon />
                            {feature}
                        </div>
                    ))}
                </div>
            )}
        </Paper>
    );
};

const CourseListing = () => {
    const courses = [
        {
            title: "Professional graphic design tutorial full course with exercise file",
            rating: 2,
            reviews: "292",
            students: "2,538",
            duration: 4,
            description: "Get your tutorials delivered at all home collect sample from the victory of the managements."
        },
        {
            title: "Become ultimate photoshop expert within 30 days",
            rating: 5.0,
            reviews: "292",
            students: "2,538",
            duration: 4,
            description: "Get your tutorials delivered at all home collect sample from the victory of the managements.",
            features: [
                "How to reduce file pixel without losing quality",
                "How to make logo pixel perfect with different extensions",
                "Create vector files from rasterized layer styles",
                "Make color gradients with Photoshop built-in tools"
            ]
        },
        {
            title: "After effects animation tutorial with Photoshop documents",
            rating: 3,
            reviews: "292",
            students: "2,538",
            duration: 4,
            description: "Get your tutorials delivered at all home collect sample from the victory of the managements."
        },
        {
            title: "Adobe Illustrator vector art design mockup",
            rating: 4,
            reviews: "292",
            students: "2,538",
            duration: 4,
            description: "Get your tutorials delivered at all home collect sample from the victory of the managements."
        }
    ];

    return (
        <div className="container">
            <div className="header">
                <span>Quality Features</span>
                <h2>Popular Designing Course</h2>
            </div>
            <div className="divide-y divide-gray-100">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </div>
    );
};

export default CourseListing;
