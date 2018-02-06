import { h } from 'preact';

import ImageItem from '../../shared/ImageItem';
import { images } from '../../shared/imagesJson';

import './style';

const SocialLinks = ({ socialLinks }) => (
    <div class="social-links flex">
        {
            socialLinks.map((socialItem, index) => (
                <div key={index} class="social-link-item animated delay017 fadeInUp">
                    <ImageItem {...socialItem} />
                </div>
            ))
        }
    </div>
)

SocialLinks.defaultProps = {
    socialLinks: images.socialLinks
}

export default SocialLinks;

