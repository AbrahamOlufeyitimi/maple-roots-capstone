import React from "react";
import Screen from "../Screen/Screen";
import Button from "../Button/Button";
import CircleCheckbox from "../CircleCheckbox/CircleCheckbox";
import "./Resource.scss";



const Resource = ({ text, link }) => {
    return (

        <div className="test">

        <div className="resource">
            <div className="resource__elements">
                <p className="resource__text">{text}</p>
                <Button className="resource__btn" onClick={() => window.open(link, "_blank")}>Link</Button>
            </div>     

            <div className="resource__status">
                <CircleCheckbox />
            </div>
        </div>
        <hr />
        </div>

    )
}

export default Resource;