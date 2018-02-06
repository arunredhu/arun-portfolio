import { h, Component } from 'preact';

import './style';

const SectionHeader = ({ headerTitle }) => (
    <div class="section-header animated delay003 fadeInLeft">
        <h2>
            {headerTitle}
        </h2>
    </div>
);

export default SectionHeader;