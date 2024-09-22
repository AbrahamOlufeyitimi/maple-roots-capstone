import React, { useState } from "react";
import Screen from "../../components/Screen/Screen";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/icons/arrow-left.svg";
import Button from "../../components/Button/Button";
import "./OnboardingPage.scss";



const OnboardingPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ name: "", school: "" });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.school) newErrors.school = "School is required";
        return newErrors;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            console.log("Form Data:", formData);
            navigate('/home', { state: { school: formData.school } });
            navigate('/profile', { state: { name: formData.name } });
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <Screen className = "onboarding">
            <img className="onboarding__image" src={Arrow} alt="a black arrow that points left" />
            <p className="onboarding__text">Tell us about you!</p>

            <form className="onboarding__form" onSubmit={handleSubmit}>
                <label className="onboarding__form-label">
                    Name:
                    <input className="onboarding__form-input" type="text" name="name" placeholder="John" value={formData.name} onChange={handleInputChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                </label>

                <label className="onboarding__form-label">
                    School:
                    <input className="onboarding__form-input"  type="text" name="school" placeholder="Acadia University" value={formData.school} onChange={handleInputChange} />
                    {errors.school && <span className="error">{errors.school}</span>}

                </label>
            <Button className="onboarding__btn" type="submit">Proceed</Button>
            </form>

        </Screen>
    )
}

export default OnboardingPage;

