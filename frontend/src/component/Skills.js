import django from '../img/icon/django.svg'
import api from '../img/icon/api.svg'
import flask from '../img/icon/flask.svg'
import numpy from '../img/icon/numpy.svg'
import pandas from '../img/icon/pandas.svg'
import selenium from '../img/icon/selenium.svg'
import vs_code from '../img/icon/vs_code.svg'
import sql from '../img/icon/sql.svg'
import nosql from '../img/icon/nosql.svg'


function Skills() {
    return (
        <>
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">Programming Languages & Tools</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fa-brands fa-python"></i></li>
                        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                        <li class="list-inline-item"><i class="fab fa-react"></i></li>
                        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                        <li class="list-inline-item"><i class="fa-brands fa-docker"></i></li>
                        <li class="list-inline-item"><i class="fa-brands fa-aws"></i></li>
                        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                        <li class="list-inline-item"><i class="fa-brands fa-node"></i></li>
                        <li class="list-inline-item"><i class="fa-brands fa-gitlab"></i></li>
                        <li class="list-inline-item"><i class="fab fa-github"></i></li>
                        <li class="list-inline-item"><img src={api} style={{ width: "40px" }} alt="API Logo" /></li>
                        <li class="list-inline-item"><img src={django} style={{ width: "40px" }} alt="Django Logo" /></li>
                        <li class="list-inline-item"><img src={flask} style={{ width: "40px" }} alt="Flask Logo" /></li>
                        <li class="list-inline-item"><img src={numpy} style={{ width: "40px" }} alt="Numpy Logo" /></li>
                        <li class="list-inline-item"><img src={pandas} style={{ width: "40px" }} alt="Pandas Logo" /></li>
                        <li class="list-inline-item"><img src={selenium} style={{ width: "40px" }} alt="Selenium Logo" /></li>
                        <li class="list-inline-item"><img src={vs_code} style={{ width: "40px" }} alt="VS Code Logo" /></li>
                        <li class="list-inline-item"><img src={sql} style={{ width: "40px" }} alt="SQL Logo" /></li>
                        <li class="list-inline-item"><img src={nosql} style={{ width: "40px" }} alt="MongoDB Logo" /></li>
                    </ul>
                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Clean Code Practices & PEP 8 Standards
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            REST API Development with Django REST Framework
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Data Cleaning & Preprocessing Pipelines
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Unit Testing & Continuous Integration
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Version Control with Git & GitHub
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr class="m-0" />
        </>
    )
} export default Skills;