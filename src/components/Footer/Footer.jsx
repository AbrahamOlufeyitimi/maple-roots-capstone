import User from "../../assets/icons/user.svg";
import Home from "../../assets/icons/home.svg";
import { useNavigate } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className="footer__container" onClick={() => navigate('/home')}>
                <img className="footer__image" src={Home} alt="a grey icon that represents home" />
            </div>
            <div className="footer__container" onClick={() => navigate('/profile')}>
                <img className="footer__user" src={User} alt="an icon that has the shape of a person" />
            </div>
        </div>
    )
}

export default Footer;