import Screen from "../../components/Screen/Screen";
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/icons/arrow-left.svg";
import Button from "../../components/Button/Button";
import "./OnboardingPage.scss";



const OnbboardingPage = () => {
    const navigate = useNavigate();
    return (
        <Screen className = "onboarding">
            <img className="onboarding__image" src={Arrow} alt="a black arrow that points left" />
            <p className="onboarding__text">Tell us about you!</p>

            <form className="onboarding__form">
                <label className="onboarding__form-label">
                    Name:
                    <input className="onboarding__form-input" type="text" placeholder="John" />
                </label>

                <label className="onboarding__form-label">
                    School:
                    <input className="onboarding__form-input"  type="text" placeholder="Acadia University" />
                </label>
            </form>

            <Button className="onboarding__btn" onClick={() => navigate('/home')}>Proceed</Button>
        </Screen>
    )
}

export default OnbboardingPage;

