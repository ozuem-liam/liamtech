import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <section className="intro">
                    <div className="welcome-message">
                    <h2 className="introContent-h2">WILLIAMS 0. OZUEM</h2>
                    <h3 className="introContent-h3">Full Stack Web Developer <br /> Social  
                        Media Marketer</h3>

                    <a className="introContent-a" href="contact.html">HIRE ME</a>
                    </div>
                    <div className="social-icons">
                    <a href="https://twitter.com/williams_ozuem">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a>
                    <a href="https://web.facebook.com/Ozuemwilliams">
                        <i className="fab fa-facebook fa-2x"></i>
                    </a>
                    <a href="https://www.instagram.com/ozuem_williams/">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="https://github.com/ozuem-liam">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;