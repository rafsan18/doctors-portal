import React from "react";
import InfoCard from "../InfoCard/InfoCard";
import {
    faClock,
    faPhone,
    faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

const infoData = [
    {
        title: "Opening Hours",
        description: "We are open 24/7",
        icon: faClock,
        background: "primary",
    },
    {
        title: "Visit our location",
        description: "Brooklyn, Ny, 10036, United States",
        icon: faMapMarker,
        background: "dark",
    },
    {
        title: "Contact us now",
        description: "+102 356 8565425",
        icon: faPhone,
        background: "primary",
    },
];

const BusinessInfo = () => {
    return (
        <section className=" d-flex justify-content-center">
            <div className="row w-75">
                {infoData.map((info) => (
                    <InfoCard info={info}></InfoCard>
                ))}
            </div>
        </section>
    );
};

export default BusinessInfo;
