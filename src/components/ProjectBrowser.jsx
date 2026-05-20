import { useState } from 'react'
import projectJSON from '../assets/projects.json'
import DoublyLinkedList from '../utils/DoublyLinkedList'
import arrowImage from '../assets/arrow.png'

const jsonToArray = (jsonFile) => {
    let jsonArray = [];
    jsonFile.map(project => (jsonArray.push([project.name, project.description, project.link, project.id])))

    return jsonArray;
}

const beginning = -1;
const middle = 0;
const end = 1;

const ProjectBrowser = ({}) => {
    let jsonArray = jsonToArray(projectJSON);
    let list = DoublyLinkedList.FromArray(jsonArray);

    const [current, setCurrent] = useState(list.head);
    const [atEnd, setAtEnd] = useState(beginning); // -1 for at beginning, 0 for in the middle, 1 for at end
    const [direction, setDirection] = useState("");
    const [key, setKey] = useState(0);
        
    const ShowNextProject = () => {
        let next;
        if (!current.next) {
            next = current;
        } else {
            next = current.next;
        }
        
        setCurrent(next);

        if (!current.next) {
            setAtEnd(end);
        } else { setAtEnd(middle); }

        setDirection("next");
        setKey(prev => prev + 1);
    }

    const ShowPreviousProject = () => {
        let prev;
        if (!current.prev) {
            prev = current;
        } else {
            prev = current.prev;
        }
        
        setCurrent(prev);

        if (!current.prev) {
            setAtEnd(beginning);
        } else { setAtEnd(middle); }

        setDirection("prev");
        setKey(prev => prev + 1);
    }

    return (
        <div>
            <button className='arrowButton' id="prev" onClick={ShowPreviousProject} style={{backgroundImage: `url(${arrowImage})`, transform: 'rotate(180deg)'}}/>
            <button className='arrowButton' id="next" onClick={ShowNextProject} style={{backgroundImage: `url(${arrowImage})`}}/>
            <div key={key} className={`animate-${direction}${atEnd != middle ? "never mind lol" : ""}`} style={{ color: "#7ef97e" }}>
            {
                current && (
                    <>
                    <h2 className="project_browser_title" onClick={() => open(`${current.link}`)} style={{}}> {current.name} </h2>
                    <p>{current.description}</p>
                    <hr />
                    </>
                )
            }
            </div>   
        </div>
    );
};

export default ProjectBrowser;