let start = document.getElementById('start')

start.addEventListener('click', async () => {

    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })


    chrome.scripting.executeScript(
        {
            target:
            {
                tabId: tab.id
            },
            func: startScrape,
        }
    );

    function startScrape() {
        currentDomain = location.origin
        let jobTitle
        let jobLocation
        let compensation
        let remote
        let jd
        let companyName
        let companyLink
        if (currentDomain == 'https://www.linkedin.com') {
            jobTitle = document.getElementsByClassName('job-details-jobs-unified-top-card__job-title')[0].textContent
            jobLocation = document.getElementsByClassName('job-details-jobs-unified-top-card__primary-description-container')[0].children[0].children[0].textContent
            compensation = document.getElementsByClassName('job-details-preferences-and-skills')[0].children[0].textContent
            remote = document.getElementsByClassName('job-details-preferences-and-skills')[0].children[1].textContent
            jd = document.getElementsByClassName('jobs-description')[0].textContent
            companyName = document.getElementsByClassName('artdeco-entity-lockup__title ember-view t-20')[0].getElementsByTagName('a')[0].textContent
            companyLink = document.getElementsByClassName('artdeco-entity-lockup__title ember-view t-20')[0].getElementsByTagName('a')[0].href
        } else if (currentDomain == 'https://www.ziprecruiter.com') {
            jobTitle = document.getElementsByClassName('job_title')[0].textContent
            jobLocation = document.getElementsByClassName('hiring_location')[0].textContent
            compensation = document.getElementsByClassName('t_compensation')[0].textContent
            if (document.getElementsByClassName('remote_tag').length == 1) {
                remote = 'Remote'
            }
            jd = document.getElementsByClassName('job_description')[0].textContent
            companyName = document.getElementsByClassName('hiring_company')[0].textContent
            companyLink = document.getElementsByClassName('hiring_company')[0].href
        } else if (currentDomain == 'https://www.indeed.com') {
            jobInfo = document.querySelector('[data-testid="jobsearch-CompanyInfoContainer"]').getElementsByClassName('css-39gvaf eu4oa1w0')[0].children
            jobTitle = document.getElementsByClassName('jobsearch-JobInfoHeader-title')[0].textContent
            jobLocation = jobInfo[1].textContent
            if ((document.getElementById('salaryInfoAndJobType').textContent) !== 'Full-time') {
                compensation = document.getElementById('salaryInfoAndJobType').textContent
            }
            remote = jobInfo[2].textContent
            jd = document.getElementsByClassName('jobsearch-JobComponent-description')[1].textContent
            companyName = jobInfo[0].children[0].textContent
            companyLink = jobInfo[0].getElementsByTagName('a')[0].href
        } else if (currentDomain == 'https://www.glassdoor.com') {
            jobTitle = document.getElementsByClassName('JobDetails_jobDetailsHeader__Hd9M3')[0].getElementsByTagName('h1')[0].textContent
            jobLocation = document.getElementsByClassName('JobDetails_jobDetailsHeader__Hd9M3')[0].querySelector('[data-test="location"]').textContent
            if (document.getElementsByClassName('SalaryEstimate_salaryRange__brHFy')[0] !== undefined) {
                compensation = document.getElementsByClassName('SalaryEstimate_salaryRange__brHFy')[0].textContent
            }
            jd = document.getElementsByClassName('JobDetails_jobDescriptionWrapper___tqxc JobDetails_jobDetailsSectionContainer__o_x6Z')[0].textContent
            if (document.getElementsByClassName('JobDetails_jobDetailsHeader__Hd9M3')[0].getElementsByTagName('a')[0] !== undefined) {
                companyLink = document.getElementsByClassName('JobDetails_jobDetailsHeader__Hd9M3')[0].getElementsByTagName('a')[0].href
            }
            companyName = document.getElementsByClassName('JobDetails_jobDetailsHeader__Hd9M3')[0].getElementsByTagName('h4')[0].textContent
        } else if (currentDomain.includes('wd5.myworkdayjobs.com')) {
            jobTitle = document.querySelector('[data-automation-id="jobPostingHeader"]').textContent
            jobLocation = document.querySelector('[data-automation-id="locations"]').children[1].children[1].textContent
            jd = document.querySelector('[data-automation-id="jobPostingDescription"]').textContent
            companyName = currentDomain.substring(8, currentDomain.indexOf('wd5.myworkdayjobs.com') - 1)
            companyLink = currentDomain

        }
        jobTitle = jobTitle === undefined ? 'undefined' : jobTitle
        jobLocation = jobLocation === undefined ? 'undefined' : jobLocation
        compensation = compensation === undefined ? 'undefined' : compensation
        remote = remote === undefined ? 'undefined' : remote
        companyLink = companyLink === undefined ? 'undefined' : companyLink
        companyName = companyName === undefined ? 'undefined' : companyName
        // console.log(jobTitle)
        // console.log(jobLocation)
        // console.log(remote)
        const fetchData = async () => {
            const reponse = await fetch(
                'http://127.0.0.1:8000/student/add_post',
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(
                        {
                            jobTitle: jobTitle,
                            jobLocation: jobLocation,
                            compensation: compensation,
                            remote: remote,
                            jd: jd,
                            companyLink: companyLink,
                            companyName: companyName,
                            platform: currentDomain,
                        }
                    )
                }
            )
                .catch((e) => {
                    console.log(e)
                })
            console.log(reponse)
        }
        const response = fetchData()
    }
})

