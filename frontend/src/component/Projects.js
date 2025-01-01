import { projectData } from "../data/projectData"

function Projects() {
    const data = projectData
    return (
        <>
            <section class="resume-section" id="projects">
                <div class="resume-section-content">
                    <h2 class="mb-5">Projects</h2>
                    {
                        data.map(e => {
                            return (
                                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div class="flex-grow-1">
                                        <h3 class="mb-0">{e.name}</h3>
                                        <p>{e.description}</p>
                                        <div>
                                            Techology&ensp;=&ensp;{">"}
                                            {
                                                e.tech.map(e => {
                                                    return (
                                                        <>&ensp;{e}&ensp;|</>
                                                    )
                                                })
                                            }
                                        </div>
                                        <a className="social-icon" href={e.github} target="_blank"><i className="fab fa-github"></i></a>
                                    </div>
                                    <div class="flex-shrink-0"><span class="text-primary">{e.time}</span></div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <hr class="m-0" />
        </>
    )
} export default Projects