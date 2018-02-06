import { h } from 'preact';

import SkillSection from './SkillSection';
import { images } from '../shared/imagesJson';

import './style';

const Skills = ({ skills }) => (
    <div class="skills">
        <p class="paragraph animated delay005 fadeInUp">
            The universe of web is ever so expanding with new technologies coming every day with their new features and ideology. Here are some of those which I feel passionate about and love working with.
            {/* The universe of web is changing so rapidly and everyday a new technology is out with its unique and poweful features. Here are some of them which makes my skillset more impressive. */}
        </p>
        {
            Object.keys(skills).map((objectKey, index) => (
                <SkillSection key={index + objectKey} sectionTitle={objectKey} sectionData={skills[objectKey]} />
            ))
        }
    </div>
);

Skills.defaultProps = {
    skills: images.skills
}

export default Skills;