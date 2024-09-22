import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Screen from "../../components/Screen/Screen";
import Resource from "../../components/Resource/Resource";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <Screen>
            <Header />
            <p className="homepage__text">My checklist</p>
            <Resource />
            <Footer />
        </Screen>
    );
}

export default HomePage;