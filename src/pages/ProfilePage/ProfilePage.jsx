import Screen from "../../components/Screen/Screen";
import Student from "../../assets/student-pic.jpg";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
import "./ProfilePage.scss";

const ProfilePage = () => {
    return (
        <Screen>
            <div className="profile">
                <div className="profile__container">
                    <img className="profile__image" src={Student} alt="a young male in a red jacket" />
                </div>

                <div className="profile__wrapper">
                    <p className="profile__name">New Student</p>
                    <p className="profile__text">Settle in with ease, thrive with confidence</p>
                    <Button className="profile__edit">Customize Profile</Button>
                </div>

                <div className="profile__block">
                    <p className="profile__element">Community</p>
                    <div className="profile__card">
                        <p className="profile__tag">Meet Students</p>
                        <Button className="profile__btn">Connect</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </Screen>
    );
};

export default ProfilePage;