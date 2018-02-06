import { h } from 'preact';

import ImageItem from '../../shared/ImageItem';

import './style';

const SkillList = ({ listData }) => (
    <div class="skill-list flex wrap">
        {
            listData.map((imageObj, index) => (
                <div key={index} class={`skill-list-item text-center animated delay00${index % 7 + 3} fadeInRight`}>
                    <ImageItem {...imageObj} />
                </div>
            ))
        }
    </div>
);

export default SkillList;