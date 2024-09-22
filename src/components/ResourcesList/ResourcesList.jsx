// import React, { useEffect, useState } from "react";
// import Resource from "../Resource/Resource";
// import { MapleRootsApi } from "../../scripts/mapleroots-api"; 


// const ResourcesList = () => {
//     const [resources, setResources] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const api = new MapleRootsApi();

//     const fetchResources = async () => {
//         try {
//             const resourcesData = await api.getResources();
//             setResources(resourcesData);
//         } catch (error) {
//             console.error("Error fetching resources:", error);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchResources();
//     }, []);

//     if (loading) {
//         return <p>Loading resources...</p>;
//     }

//     return (
//         <div>
//             {resources.map((resource) => (
//                 <Resource key={resource.id} text={resource.resource} link={resource.link} />
//             ))}
//         </div>
//     );
// };

// export default ResourcesList;