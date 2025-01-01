import leetcode from '../img/icon/leetcode.svg'

function About() {
    return (
        <>
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Nan
                        <span className="text-primary">Hpauyu</span>
                    </h1>
                    <div className="subheading mb-5">
                        3542 Berry Street&ensp;·&ensp;Cheyenne Wells, CO 80810&ensp;·&ensp;(641) 819-1480&ensp;·&ensp;
                        <a href="mailto:name@email.com">nan.hpauyu@yahoo.com</a>
                    </div>
                    <p className="lead mb-5">I am motivated software developer with three years of experience developing and maintaining enterprise applications in the IT, Blockchain, and Ecommerce industries. Experienced in building projects from scratch and adding new efficient features for legacy ones. Skilled in working with Python, Django, Web Scraping, Numpy, Pandas and RESTful APIs</p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/nanhpauyu/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/nanhpauyu" target="_blank"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="https://www.hackerrank.com/profile/hpauyunanshawng" target="_blank"><i className="fa-brands fa-hackerrank"></i></a>
                        <a className="social-icon" href="https://leetcode.com/u/hpauyu/" target="_blank"><img src={leetcode} style={{ height: "24px", width: "24px" }} alt="Leetcode Logo" /></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
        </>
    )
} export default About;