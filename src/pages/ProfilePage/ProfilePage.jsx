import Screen from "../../components/Screen/Screen";
import Student from "../../assets/student-pic.jpg";
import "./ProfilePage.scss";

const ProfilePage = () => {
    return (
        <Screen>
            <div className="profile">
                <div className="profile__container">
                    <img className="profile__image" src={Student} alt="a young male in a red jacket" />
                </div>
            </div>
        </Screen>
    );
};

export default ProfilePage;