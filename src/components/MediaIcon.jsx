const MediaIcon = ({image, onClick}) => {
    return (
        <>
        <div className="media-icon" style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '2vw',
            height: '2vw',
            cursor: onClick ? 'pointer' : 'default',
            display: 'inline-flex',
            marginInline: '.2vw',
        }} onClick={onClick}/>
        </>
    );
}

export default MediaIcon;