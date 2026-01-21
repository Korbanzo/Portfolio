import { useState } from 'react'
import projectJSON from '../assets/projects.json'
import DoublyLinkedList from '../utils/DoublyLinkedList'

const jsonToArray = (jsonFile) => {
    let jsonArray = [];
    jsonFile.map(project => (jsonArray.push([project.name, project.description, project.id])))

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
            <button id="prev" onClick={ShowPreviousProject} style={{}}></button> <button id="next" onClick={ShowNextProject} style={{}}></button>
            <div key={key} className={`description_wrapper animate-${direction}${atEnd != middle ? "never mind lol" : ""}`}> 
            {
                current && (
                    <>
                    <h2>{current.name}</h2>
                    <p>{current.description}</p>
                    <hr />
                    </>
                )}
            </div>   
        </div>
    );
};

export default ProjectBrowser;