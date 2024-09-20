import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Screen from "../../components/Screen/Screen";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <Screen>
            <Header />
            <p className="homepage__text">My checklist</p>
            <Footer />
        </Screen>
    );
}

export default HomePage;