import React from 'react';

function Projects({title, image, deployedlink, githublink}) {
    return (
        <div className="Projects">
            <h2>{title}</h2>
            <img> src={image} alt={title} style={{maxWidth: '300px'}}</img>
            <div className="projects-links">
                <a href={deployedlink}>Deployed App</a>
                <a href={githublink}>GitHub Repo</a>
            </div>
        </div>
    );
}

export default Projects;