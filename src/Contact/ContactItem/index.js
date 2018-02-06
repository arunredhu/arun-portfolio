import { h } from 'preact';

import './style';

const ContactItem = ({ hrefLink, text, classNames }) => (
    <div class="contact-item">
        <h4 >
            <a href={hrefLink} title={text} class={`uppercase ${classNames}`}>
                {text}
            </a>
        </h4>
    </div>
)

export default ContactItem;