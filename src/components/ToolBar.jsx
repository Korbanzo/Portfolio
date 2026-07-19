import ClearContainer from "./ClearContainer";

const ToolBar = () => {
    
    return (
        <ClearContainer style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <button className="tool_bar_btn" onClick={() => {window.location.href = "#project_browser"}}>Projects</button>
            <button className="tool_bar_btn" onClick={() => {open(`mailto:Brooks.M.Korbin@gmail.com`)}}>Contact</button>
        </ClearContainer>
    );
}

export default ToolBar;