import { educationData } from "../data/educationData";
function Education() {
    const data = educationData;
    return (
        <>
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    {
                        data.map(e => {
                            return (
                                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div class="flex-grow-1">
                                        <h3 class="mb-0">{e.school}  -  <span style={{fontWeight: '300', fontSize: '1.5rem'}}>{e.location}</span></h3>
                                        <div class="subheading mb-3">{e.degree}</div>
                                        {e.note ?? <div>{e.note}</div>}
                                        <div>
                                            Courses&ensp;=&ensp;{">"} 
                                                {
                                                    e.course.map(e => {
                                                        return (
                                                            <>&ensp;{e}&ensp;|</>
                                                        )
                                                    })
                                                }
                                        </div>
                                        <div>
                                            GPA: {e.gpa}
                                        </div>
                                    </div>
                                    <div class="flex-shrink-0"><span class="text-primary">{e.start} - {e.end}</span></div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <hr class="m-0" />
        </>
    )
} export default Education;