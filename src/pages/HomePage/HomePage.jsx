import React from "react";
import Resource from "../../components/Resource/Resource";
import Layout from "../../components/Layout/Layout";
import "./HomePage.scss";

const HomePage = () => {
    return (
        <Layout>
                <p className="homepage__text">My checklist</p>
                <Resource />
        </Layout>
    );
}

export default HomePage;