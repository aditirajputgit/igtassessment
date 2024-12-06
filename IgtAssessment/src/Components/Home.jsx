import React from 'react'
import Footer from './Footer'
import FAQAccordion from './Accodioan'
import LetsWorks from './LetsWorks'
import Main from './MainLandingPage'
import Tutorials from './Tutorials'
import CourseListing from './CourseCard'
import SmartJackpots from "./SmartJackpot"

function Home() {
    return (
        <>
            <Main />
            <Tutorials />
            <SmartJackpots />
            <CourseListing />
            <LetsWorks />
            <div className="outerAccordion"><FAQAccordion /></div>
            <Footer />
        </>
    )
}

export default Home