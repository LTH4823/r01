import React from 'react';
import ProjectItem from "./ProjectItem";




const projectArr =[
    {
        full: 'assets/img/portfolio/fullsize/1.jpg',
        thumb: 'assets/img/portfolio/thumbnails/1.jpg',
        category: 'cat1',
        pname: 'Project1'
    },
    {
        full: 'assets/img/portfolio/fullsize/2.jpg',
        thumb: 'assets/img/portfolio/thumbnails/2.jpg',
        category: 'cat2',
        pname: 'Project2'
    },
    {
        full: 'assets/img/portfolio/fullsize/3.jpg',
        thumb: 'assets/img/portfolio/thumbnails/3.jpg',
        category: 'cat3',
        pname: 'Project3'
    },
    {
        full: 'assets/img/portfolio/fullsize/4.jpg',
        thumb: 'assets/img/portfolio/thumbnails/4.jpg',
        category: 'cat4',
        pname: 'Project4'
    },
    {
        full: 'assets/img/portfolio/fullsize/5.jpg',
        thumb: 'assets/img/portfolio/thumbnails/5.jpg',
        category: 'cat5',
        pname: 'Project5'
    },
    {
        full: 'assets/img/portfolio/fullsize/6.jpg',
        thumb: 'assets/img/portfolio/thumbnails/6.jpg',
        category: 'cat6',
        pname: 'Project6'
    }
]


const Project = () => {

    const list = projectArr.map((project,idx) => <ProjectItem {...project} key={idx}></ProjectItem>)

    return (
        <>
            {list}
        </>
    );
};

export default Project;