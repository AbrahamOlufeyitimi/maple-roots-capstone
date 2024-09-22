// import React from "react";
// import Screen from "../Screen/Screen";
// import Button from "../Button/Button";
// import CircleCheckbox from "../CircleCheckbox/CircleCheckbox";
// import "./Resource.scss";



// const Resource = ({ text, link }) => {
//     return (

//         <div className="test">

//         <div className="resource">
//             <div className="resource__elements">
//                 <p className="resource__text">{text}</p>
//                 <Button className="resource__btn" onClick={() => window.open(link, "_blank")}>Link</Button>
//             </div>     

//             <div className="resource__status">
//                 <CircleCheckbox />
//             </div>
//         </div>
//         <hr />
//         </div>

//     )
// }

// export default Resource;













import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../Button/Button";
import CircleCheckbox from "../CircleCheckbox/CircleCheckbox";
import { MapleRootsApi } from "../../scripts/mapleroots-api";

import "./Resource.scss";

const Resource = () => {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const api = new MapleRootsApi();

    const location = useLocation();
    const school = location.state?.school;

    const fetchResources = async (school) => {
        try { 
            console.log(school);
            
            const resourcesData = await api.getAllResources({ school });
            console.log(resourcesData);
            
            setResources(resourcesData);
        } catch (error) {
            console.error("Error fetching resources:", error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (school) {
        fetchResources(school);
        }
    }, [school]);

    if (loading) {
        return <p>Loading resources...</p>;
    }

    return (
        <div>
            {resources.length > 0 ? (
                resources.map((resource) => (
            <div key={resource.id} className="resource">
                <div className="resource__elements">
                    <p className="resource__text">{resource.resource}</p>
                    <Button
                        className="resource__btn"
                        onClick={() => window.open(resource.link, "_blank")}
                    >
                        Link
                    </Button>
                </div>

                <div className="resource__status">
                    <CircleCheckbox />
                </div>
            </div>
                ))
            ) : (
                <p>No resources available</p>
            )}
        </div>
    );
};

export default Resource;