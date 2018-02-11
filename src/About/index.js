import { h } from 'preact';

import style from './style';

const About = () => {
    return (
        <div class="about">
            <div class="">
                <span class="name-label animated delay003 fadeInDown">Arun Redhu</span>
                <div class="name-subheader animated delay005 fadeIn">
                    ( Professional Full-Stack JavaScript developer )
                </div>
            </div>
            <div class="about-details">
                <p class="paragraph animated delay007 fadeInUp">
                    I am a full stack JavaScript developer by profession and tech enthusiast at heart. I love to play around with emerging technologies and mix and match to develop cross-platform cutting edge applications.
                </p>
                <p class="paragraph animated delay009 fadeInUp">
                    I always have been interested in coding and aspect of art that code can bring make me very interested.
                </p>
                <p class="paragraph animated delay011 fadeInUp">
                    I enjoy learning new things, spending my time working on JavaScript and strongly believe that continuous education is the only way for all of us to evolve.
                </p>
            </div>
            <div class="download-resume-btn animated delay015 fadeInDown">
                <a href="/assets/resume.pdf" target="_blank">Download Resume</a>
            </div>
        </div>
    )
}

export default About;