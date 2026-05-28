const SkillBubble = ({children}) => {

    return (
        <div className="animate-rainbow" style={{
            width: 'fit-content',
            padding: '.5rem',
            borderRadius: '50%',
            fontSize: '1.2rem',
        }}>

            {children}
        </div>
    );

}

export default SkillBubble;