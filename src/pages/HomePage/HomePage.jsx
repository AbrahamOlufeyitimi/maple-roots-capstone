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
            <Resource className="homepage__resource" text="Attend orientation session" link="https://smu.ca" />
            <Resource className="homepage__resource" text="Get your student health card" link="https://www.smu.ca/healthclinic/student-health-plan.html" />
            <Resource className="homepage__resource" text="Explore public transportation" link="https://www.halifax.ca/transportation/halifax-transit" />
            <Resource className="homepage__resource" text="Find part-time employment" link="https://www.maxsys.ca/office/halifax/#" />
            <Resource className="homepage__resource" text="Setup a canadian bank account" link="https://www.td.com/us/en/personal-banking" />
            <Resource className="homepage__resource" text="Setup a canadian phone plan" link="https://www.virginplus.ca/en/home/index.html?province=ON&geoResult=failed" />
            <Resource className="homepage__resource" text="Get a Nova Scotian ID cards" link="https://novascotia.ca/sns/paal/rmv/paal275.asp" />
            <Resource className="homepage__resource" text="Get a social insurance number" link="https://www.canada.ca/en/employment-social-development/services/sin/apply.html" />
            <Footer />
        </Screen>
    );
}

export default HomePage;