import React from 'react';
import "./styles.css"

const StatCard = ({ number, text, className = '' }) => (
    <div className={`stat-card ${className}`}>
        <h3 className="stat-number">{number}</h3>
        <p className="stat-text">{text}</p>
    </div>
);

const SmartJackpots = () => {
    return (
        <div className="smart-jackpots">
            <div className="jackpots-container">
                <div className="stats-grid">
                    <StatCard
                        number="80K+"
                        text="We have more than students"
                        className="orange-stat"
                    />
                    <StatCard
                        number="150+"
                        text="Free online tutorials videos available"
                        className="offset-top"
                    />
                    <StatCard
                        number="90+"
                        text="Daily updated blog post maintain"
                        className="pink-stat"
                    />
                    <StatCard
                        number="& 3M"
                        text="Job posted everydays with qualification"
                        className="purple-stat offset-bottom"
                    />
                </div>

                {/* Right side - Content */}
                <div className="content-section">
                    <div className="content-wrapper">
                        <span className="feature-tag">CORE FEATURES</span>
                        <h2 className="main-heading">
                            Smart Jackpots that you may love this anytime & anywhere
                        </h2>
                        <p className="description">
                            Get your tests delivered at let home collect sample from the victory
                            of the managements that supplies best design system guidelines ever.
                            Get your tests delivered at let home collect sample.
                        </p>
                        <button className="explore-button">
                            Explore details →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartJackpots;