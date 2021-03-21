import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div className="skill-dev">

                    <h1 className="tech">TECHNICAL SKILLS</h1>
                
                <div className="skills">
                    
                    <ul className="tech-list">
                        <li className="skill-header">Dev Tools</li>
                        <li>Git</li>
                        <li>Jest</li>
                        <li>Webpack</li>
                        <li>Passport.js</li>
                    </ul>

                    <ul className="tech-list">
                        <li className="skill-header">Front-End</li>
                        <li>JavaScript/ES6</li>
                        <li>React/Redux</li>
                        <li>Vue.js</li>
                        <li>Sass</li>
                        <li>Styled Components</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Material UI</li>
                    </ul>

                    <ul className="tech-list">
                        <li className="skill-header">Back-End</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>Nginx</li>
                    </ul>

                </div>
            </div>
        );
    }
}

export default Skills;