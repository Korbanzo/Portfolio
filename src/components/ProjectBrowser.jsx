import { useState } from 'react'
import projectJSON from '../assets/projects.json'
import DoublyLinkedList from '../utils/DoublyLinkedList'
import SkillBubble from './SkillBubble'


const jsonToArray = (jsonFile) => {
    let jsonArray = [];
    jsonFile.map(project => (jsonArray.push([project.name, project.description, project.link, project.tech_stack, project.id])))

    return jsonArray;
}

const beginning = -1;
const middle = 0;
const end = 1;

const ProjectBrowser = ({}) => {
    let jsonArray = jsonToArray(projectJSON);
    let list = DoublyLinkedList.FromArray(jsonArray);

    const [current, setCurrent] = useState(list.head);
    const [atEnd, setAtEnd] = useState(beginning);
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
        <div style={{ width: '100%' }}>
            <div className="arrow-controls">
                <button className='arrowButton' id="prev" onClick={ShowPreviousProject} style={{backgroundImage: `url(/arrow-left.svg)`}}/>
                <button className='arrowButton' id="next" onClick={ShowNextProject} style={{backgroundImage: `url(/arrow-right.svg)`}}/>
            </div>
            <div key={key} className={`animate-${direction}${atEnd != middle ? "never mind lol" : ""}`} style={{ color: "#7ef97e" }}>
            {
                current && (
                    <>
                    <h2 className="project_browser_title" onClick={() => open(`${current.link}`)}>{current.name}</h2>
                    <p className="project_browser_description">{current.description}</p>
                    <div className="project_browser_skills">
                    { current.tech_stack.map((skill) => (
                        <SkillBubble key={skill}>{skill}</SkillBubble>
                    ))}                    
                    </div>
                    </>
                )
            }
            </div>   
        </div>
    );
};

export default ProjectBrowser;