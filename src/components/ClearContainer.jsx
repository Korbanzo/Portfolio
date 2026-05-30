const ClearContainer = ({ children }) => {

    return (
        <>
            <div style={{  
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'rgba(31, 31, 31, 0.5)',
                minHeight: '100%',
                minWidth: '50vw',
                maxWidth: '50vw',
                borderRadius: '2%',
                boxShadow: '0px 0px 15px green',
                color: '#7ef97e',
                padding: '3rem 2rem',
                marginTop: '10px'
            }}>

                {children}
                
            </div>
        </>
    );
}

export default ClearContainer;