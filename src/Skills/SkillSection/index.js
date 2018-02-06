import { h } from 'preact';

import SkillList from '../SkillList';

import './style';

const SkillSection = ({ sectionTitle, sectionData }) => (
    <div class="skill-section">
        <h3 class="uppercase animated delay005 fadeIn">{sectionTitle}</h3>
        <SkillList listData={sectionData} />
    </div>
);

export default SkillSection;