import profileImage from '../assets/pfp.png'

const ProfilePicture = () => {

    return (
            <img className="pfp"
                src={profileImage} 
                alt="profile"
                style={{
                    objectFit: 'contain',
                    borderRadius: '5%',
                    margin: '10px'
                }}
            />
    );
}

export default ProfilePicture;