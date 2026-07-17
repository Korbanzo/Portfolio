import SkillBubble from "./SkillBubble"

const ProjectCard = ({ project }) => {

    return (
    <>
    {
        project && (
            <>
            <div style={{height: 'fit-content', width: 'fit-content', justifySelf: 'center', padding: '10px', borderRadius: '10px', backgroundColor: 'rgb(0,0,0)'}}>
                <h2 className="project_browser_title" onClick={() => open(`${project.link}`)}>{project.name}</h2>
                <p className="project_browser_description">{project.description}</p>
                <div className="project_browser_skills">
                { project.tech_stack.map((skill) => ( <SkillBubble key={skill}>{skill}</SkillBubble> ))}                    
                </div>
            </div>
            </>
        )
    }
    </>
    );
}

export default ProjectCard;