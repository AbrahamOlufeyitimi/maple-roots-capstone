import Button from "../../components/Button/Button";
import Student from "../../assets/international-student.jpg";
import React from 'react';
import "./WelcomePage.scss";

const WelcomePage = () => {
    return (
        <div className="welcome">

            <div className="welcome__container">
                <img className="welcome__image" src={Student} alt="a girl holding books and smiling" />
                <h1 className="welcome__title">Maple Roots</h1>
                <p className="welcome__text">Your personalized immigration checklist</p>
            </div>

            <Button className="welcome__btn"> Get Started </Button>

        </div>
    )
}

export default WelcomePage;