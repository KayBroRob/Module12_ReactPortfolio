import React from "react";
import Projects from "./Projects";

function Portfolio() {
    const Projects = [
        {
            title: 'Vehicle Builder',
            image:
            deployedLink: 'https://github.com/KayBroRob/Module8_VehicleBuilder.git',
            githubLink: 'https://github.com/KayBroRob/Module8_VehicleBuilder.git',
        },
        {
            title: 'README Generator',
            image:
            deployedLink: 'https://github.com/KayBroRob/Module7_READMEGenerator.git',
            githubLink: 'https://github.com/KayBroRob/Module7_READMEGenerator.git',
        },
        {
            title: 'Aquabuddy',
            image:
            deployedLink: 'https://github.com/bans-07/Aqua-Buddy.git',
            githubLink: 'https://github.com/bans-07/Aqua-Buddy.git',
        },
        {
            title: 'Advanced CSS',
            image:
            deployedLink: 'https://github.com/KayBroRob/Module2_Advanced-CSS.git',
            githubLink: 'https://github.com/KayBroRob/Module2_Advanced-CSS.git',
        },
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="projects-grid">
                {projects.map((Projects, index) => (
                    <Projects key={index} {...project} />
                ))}
            </div>
        </section>
    );
}

export default Portfolio;