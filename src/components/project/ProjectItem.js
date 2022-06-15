import React from 'react';

const ProjectItem = ({full, thumb, category, pname}) => {
    return (
        <div className="col-lg-4 col-sm-6">
            <a className="portfolio-box" href={full} title="Project Name">
                <img className="img-fluid" src={thumb} alt="..."/>
                <div className="portfolio-box-caption">
                    <div className="project-category text-white-50">{category}</div>
                    <div className="project-name">{pname}</div>
                </div>
            </a>
        </div>
    );
};

export default ProjectItem;