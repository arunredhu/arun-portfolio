import { h } from 'preact';

import ContactItem from './ContactItem';
import SocialLinks from './SocialLinks';
import './style';

const Contact = ({ mailId, phone }) => (
    <div class="contact text-center">
        <p class="paragraph animated delay003 fadeInUp">Drop me a line on</p>
        <ContactItem {...mailId} classNames="animated delay005 fadeInUp" />
        <p class="paragraph uppercase animated delay007 fadeInUp">Or</p>
        <p class="paragraph animated delay009 fadeInUp">Reach me out at</p>
        <ContactItem {...phone} classNames="animated delay011 fadeInUp" />
        <p class="paragraph uppercase animated delay013 fadeInUp">Or</p>
        <p class="paragraph animated delay015 fadeInUp">We can have a coffee together. Also, you can find me on:</p>
        <SocialLinks />
    </div>
);

Contact.defaultProps = {
    mailId: {
        'text': 'arun.redhu05@gmail.com',
        'value': 'mailto:arun.redhu05@gmail.com'
    },
    phone: {
        'text': '+91-8950-4479-92',
        'value': 'tel:+918950447992'
    }
}

export default Contact;