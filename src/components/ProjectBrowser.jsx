import projects from '../assets/projects.json'


const ProjectBrowser = ({}) => {
    // Needs buttons on top left and top right of the container
    // Linkedlist for project line

    return (
        <>
        {
            projects.map(post => (
                <div key={post.id}>
                    <h2>{post.name}</h2>
                    <p>{post.description}</p>
                    <hr />
                </div>
            ))
        }
        </>
    );


}

export default ProjectBrowser;