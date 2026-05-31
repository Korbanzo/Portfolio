import profileImage from '../assets/pfp.png'

const ProfilePicture = () => {

    return (
        <div style={
            {
                backgroundImage: `url(${profileImage})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '400px',
            }}>

        </div>
    );
}

export default ProfilePicture;