import { div } from "three/tsl";

const ToolBar = () => {



    return (
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly', backgroundColor: 'rgb(0, 0, 0, 0.5)', height: '30px'}}>

            <button className="tool_bar_btn" onClick={() => {window.location.href = "#project_browser"}}>Projects</button>
            <button className="tool_bar_btn" onClick={() => {window.location.href = "/contact/contact.html"}}>That one</button>
            <button className="tool_bar_btn">Other one</button>
        </div>
    );
}

export default ToolBar;