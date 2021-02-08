import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import DevCards from "../../components/DevCards/DevCards";

const Developers = () => {
    const [developers, setDevelopers] = useState([
        {
            username: "jdeer74",
            name: "John Deer",
            gitHub: "@jdeer74",
            languages: ["JavaScript","HTML5","CSS"],
            phone: 5555555555,
            experience: 15,
            location: "Atlanta, GA",
            occupation:"Web Developer",
            appRole: "Mentor"
        },
        {
            username: "afox87",
            name: "Alicia Fox",
            gitHub: "@afox87",
            languages: ["JavaScript","HTML5","CSS"],
            phone: 5555555555,
            experience: 15,
            location: "Atlanta, GA",
            occupation:"Web Developer",
            appRole: "Mentee"
        },
        {
            username: "jdeer73",
            name: "John Deer",
            gitHub: "@jdeer73",
            languages: ["JavaScript","HTML5","CSS"],
            phone: 5555555555,
            experience: 15,
            location: "Atlanta, GA",
            occupation:"Web Developer",
            appRole: "Mentor"
        },
    ])

    // useEffect(() => {
    //     },
    //     []
    // )

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">
                    {developers.map((developer) => {
                        return <DevCards {...developer} key={developer.username}/>
                    })}
                </div>
            </div>
        </>
    );
};

export default Developers;
