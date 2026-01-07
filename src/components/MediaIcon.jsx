import React from 'react';

const MediaIcon = ({image, onClick}) => {
    return (
        <>
        <div className="media-icon" style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '30px',
            height: '30px',
            cursor: onClick ? 'pointer' : 'default',
            display: 'inline-flex',
            marginInline: '.2vw',
        }} onClick={onClick}/>
        </>
    );
}

export default MediaIcon;