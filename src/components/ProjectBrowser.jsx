import { useState } from 'react'
import projectJSON from '../assets/projects.json'
import DoublyLinkedList from '../utils/DoublyLinkedList';

const jsonToArray = (jsonFile) => {
    let jsonArray = [];
    jsonFile.map(project => (jsonArray.push([project.name, project.description, project.id])))

    return jsonArray;
}

const ProjectBrowser = ({}) => {
    let jsonArray = jsonToArray(projectJSON);
    let list = DoublyLinkedList.FromArray(jsonArray);

    const [current, setCurrent] = useState(list.head);
        
    const ShowNextProject = () => {
        if (!current) return;
        const next = current.next ?? current;
        setCurrent(next);
    }

    const ShowPreviousProject = () => {
        if (!current) return;
        const prev = current.prev ?? current;
        setCurrent(prev);
    }

    return (
        <div>
        <button onClick={ShowPreviousProject} style={{}}></button> <button onClick={ShowNextProject} style={{}}></button>
        {
            current && (
                <div key={current.id}>
                    <h2>{current.name}</h2>
                    <p>{current.description}</p>
                    <hr />
                </div>
            )}
        </div>
    );
};

export default ProjectBrowser;