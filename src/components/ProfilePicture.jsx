import profileImage from '../assets/pfp.png'

const ProfilePicture = () => {

    return (
        <div style={
            {
                backgroundImage: `url(${profileImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
            }}>

        </div>
    );
}

export default ProfilePicture;