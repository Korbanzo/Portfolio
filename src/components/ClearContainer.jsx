const ClearContainer = ({ children }) => {

    return (
        <>
            <div style={{  
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: 'rgba(31, 31, 31, 0.5)',
                borderRadius: '2%',
                width: '90vw',
                boxShadow: '0px 0px 15px green',
                color: '#7ef97e',
                margin: '10px auto',
                alignSelf: 'center'
            }}>

                {children}
                
            </div>
        </>
    );
}

export default ClearContainer;