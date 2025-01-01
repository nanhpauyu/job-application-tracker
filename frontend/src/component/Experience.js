import { experienceData } from '../data/experienceData.js'
function Experience() {
    const data = experienceData
    console.log(data.length)
    return (
        <>
            <section class="resume-section" id="experience">
                <div class="resume-section-content">
                    <h2 class="mb-5">Experience</h2>
                    {
                        data.map((e) => {
                            return (
                                <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                                    <div class="flex-grow-1">
                                        <h3 class="mb-0">{e.title}</h3>
                                        <div class="subheading">{e.company}&emsp;-&emsp;{e.location}</div>
                                        <div className="subheading mb-3" style={{ fontWeight: '300', fontSize: '1.5rem' }}>{e.project}</div>
                                        <ul>
                                            {
                                                e.jd.map(e => {
                                                    return (
                                                        <li>{e}</li>
                                                    )
                                                })
                                            }
                                        </ul>
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
} export default Experience;