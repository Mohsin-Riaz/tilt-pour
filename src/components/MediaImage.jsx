import { Magnifier, MagnifierContainer } from '@datobs/react-image-magnifiers';
import React, { useState } from 'react';
import { FaMagnifyingGlassPlus } from 'react-icons/fa6';

const MediaImage = (prop) => {
    const { image } = prop;
    const [hover, setHover] = useState(false);
    const [show, setShow] = useState(true);
    return (
        <div
            className="media-wrapper"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ width: '100%' }}
        >
            <FaMagnifyingGlassPlus
                className={'magnify-icon'}
                style={{
                    opacity: hover ? 0.6 : null,
                    display: show ? null : 'none',
                }}
            />
            {/* <img
                src={image}
                style={{ display: 'flex', maxWidth: '100%' }}
            ></img> */}
            <MagnifierContainer>
                <Magnifier
                    imageSrc={image}
                    dragToMove={false}
                    onZoomStart={() => setShow(false)}
                    onZoomEnd={() => setShow(true)}
                />
            </MagnifierContainer>
        </div>
    );
};

export default MediaImage;
