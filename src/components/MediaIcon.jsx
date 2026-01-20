const MediaIcon = ({className, image, onClick}) => {
    return (
        <>
        <div className={`media-icon ${className || ''}`} style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '50px',
            height: '50px',
            cursor: onClick ? 'pointer' : 'default',
        }} onClick={onClick}/>
        </>
    );
}

export default MediaIcon;