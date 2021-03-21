import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                        <h1 className="text-secondary">RECENT PROJECTS</h1>
                    

                    <div className="project__items">
                        <div className="projects__item">
                           <img src="./image/img_2.jpg" alt="My Projects" />
                                <div className="projects__btns">
                                    <a href="https://naughty-hermann-048acf.netlify.app/" className="projects__btn">
                                        <i className="fas fa-eye"></i> Preview
                                    </a>
                                    <a href="https://github.com/ozuem-liam/liam-task-tracker/tree/master" className="projects__btn">
                                        <i className="fab fa-github"></i> Github
                                    </a>
                                </div>
                        </div>

                        <div className="projects__item">
                            <img src="./image/img_3.jpg" alt="My Projects" />
                                <div className="projects__btns">
                                    <a href="#!" className="projects__btn">
                                        <i className="fas fa-eye"></i> Preview
                                    </a>
                                    <a href="https://github.com/ozuem-liam/ozfood" className="projects__btn">
                                        <i className="fab fa-github"></i> Github
                                    </a>
                                </div>
                        </div>
                       
                        <div className="projects__item">
                            <img src="./image/img_4.jpg" alt="My Projects" />
                                <div className="projects__btns">
                                    <a href="https://vibrant-boyd-fdadc1.netlify.app/" className="projects__btn">
                                        <i className="fas fa-eye"></i> Preview
                                    </a>
                                    <a href="https://github.com/ozuem-liam/my-form" className="projects__btn">
                                        <i className="fab fa-github"></i> Github
                                    </a>
                                </div>
                        </div>
                        
                            <div className="projects__item">
                                <img src="./image/img_5.jpg" alt="My Projects" />
                                    <div className="projects__btns">
                                        <a href="https://festive-feynman-eedd4d.netlify.app" className="projects__btn">
                                            <i className="fas fa-eye"></i> Preview
                                        </a>
                                        <a href="https://github.com/ozuem-liam/my-app" className="projects__btn">
                                            <i className="fab fa-github"></i> Github
                                        </a>
                                    </div>
                            </div>
                        </div>
                </div>
        );
    }
}

export default Projects;