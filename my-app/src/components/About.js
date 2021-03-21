import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <section className="about">
                    <div className="aboutContent">
                    <div className="about__bio">
                            <h1 className="text-secondary">ABOUT</h1>
                            <p>
                                My name is <span>Williams Ozuem</span>  and I am a full stack web developer insearch of new opportunities. </p><br/>
                                <p>I am passionate about solving technical problems. I have over 2 years of experience on creating sales funnels, over 5 years experience in
                                social media marketing and business development for small businesses. </p><br/>
                                <p>I am also an enthusiast in data science, strategy, finance, sales, copy writing, and project management. </p>
                                <p>My am skilled in <span>JavaScript</span>, PostgreSQL, <span>React.js</span>, Vue.js, <span>Node.js/Express</span>, Git and <span>more</span>.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default About;