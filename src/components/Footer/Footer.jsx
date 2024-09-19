import User from "../../assets/icons/user.svg";
import Home from "../../assets/icons/home.svg";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
            <img className="footer__image" src={Home} alt="a grey icon that represents home" />
            </div>
            <div className="footer__container">
                <img className="footer__user" src={User} alt="an icon that has the shape of a person" />
            </div>
        </div>
    )
}

export default Footer;