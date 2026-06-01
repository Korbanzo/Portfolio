import profileImage from '../assets/pfp.png'

const ProfilePicture = () => {

    return (
            <img 
                src={profileImage} 
                alt="profile"
                style={{
                    width: '400px',
                    objectFit: 'contain',
                    borderRadius: '5%'
                }}
            />
    );
}

export default ProfilePicture;