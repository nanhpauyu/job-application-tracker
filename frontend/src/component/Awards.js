import { awardData } from "../data/awardData";
function Awards() {
    const data = awardData;
    return (
        <>
            <section class="resume-section" id="awards">
                <div class="resume-section-content">
                    <h2 class="mb-5">Awards & Certifications</h2>
                    <ul class="fa-ul mb-0">
                        {
                            data.map(e => {
                                return (
                                    <li>
                                        <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                                        <a href={e.link}  style ={{textDecoration:'none'}}>{e.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
        </>
    )
} export default Awards;