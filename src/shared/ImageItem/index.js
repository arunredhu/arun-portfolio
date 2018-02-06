import { h } from 'preact';

import './style';

const wrapTargetLink = ({ targetLink, ...props }) => (WrappedComponent) => {
    return (
        <div>
            {
                targetLink.length > 0 ? (
                    <a href={targetLink} target="_blank">
                        <WrappedComponent {...props} />
                    </a>
                ) : (
                        <WrappedComponent {...props} />
                    )
            }
        </div>
    );
};

const ImageItem = ({ title, name, imageClass }) => (
    <div title={title}>
        <div class={`sprite ${imageClass}`}></div>
        {name.length > 0 &&
            <span>{name}</span>
        }
    </div>
);

export default (imageObj) => wrapTargetLink(imageObj)(ImageItem);