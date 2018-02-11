import { h } from 'preact';

import SectionHeader from '../shared/SectionHeader';

import './style';

const WorkExperience = ({ workList }) => (
    <div class="work-exp-list">
        {
            workList.map(({ name, period, summary }, index) => (
                <div key={index} class="work-exp-item">
                    <h3 class="animated delay005 fadeInUp">{name}</h3>
                    <label class="animated delay007 fadeInDown">{period}</label>
                    <p class="paragraph animated delay003 fadeIn">{summary}</p>
                </div>
            ))
        }
    </div>
)

WorkExperience.defaultProps = {
    workList: [
        {
            name: 'Nagarro Software',
            period: 'Sept, 2016 - Present',
            summary: `Looking for new opportunities I joined the team of brightest people (Center Of Excellence) at Nagarro who works on bleeding edge of technology and basically they are technology enablers, provides the technical architecture solutions, 
                trainings and webinars. 
                My aim is to make the most effective use of my time utilizing my expertise especially in JavaScript to deliver quality solutions.`
        },
        {
            name: 'Decimal Technologies',
            period: 'Jun, 2015 - Sept, 2016',
            summary: `Being a part of Decimal Technologies, I was amplified with various opportunities to work for different domains including Banking, IT in a wide range of JavaScript projects. I worked with senior developers to manage large, complex design projects and involved in architecting the applications and development of common components.`
        },
        {
            name: 'GB Infotech',
            period: 'May, 2014 - Jul, 2014',
            summary: `In the span of summer vocation of graduation I successfully completed the professional training of web development with PHP at GB Infotech. It was good experience while working with PHP but It sparks my interest toward JavaScript.`
        },
        {
            name: 'IBM Career Education',
            period: 'May, 2013 - Jun, 2013',
            summary: `During the summer vocation of graduation I joined IBM Career Education Group as a Software Trainee 
                where I learned the basic concepts of core java, android development, lifecycles of an android app etc.`
        },
        {
            name: 'JMIT Radaur',
            period: 'Aug, 2011 - May, 2015',
            summary: `Graduation plays an important role for my career. During this span of time I not only studied my engineering subject but also worked on live projects for college.`
        }
    ]
}

export default WorkExperience;