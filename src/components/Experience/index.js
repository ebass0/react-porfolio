import ExperienceList from '../ExperienceList';
import './Experience.css';

const Experience = () => {
    return (
        <div className='Container'>
            <a className='Experience-container' href='https://lbv.org/' target='_blank' rel='noreferrer'>
                <div className='Experience-header'>
                    2019 — Present
                </div>
                <div className='Experience-title'>
                    <div>
                        <h3>
                            Support Technician · LBV
                            <div className='title-sub'>
                                HelpDesk
                            </div>
                            <div className='title-sub'>
                                Quality Inspector
                            </div>
                        </h3>
                    </div>
                    <div className='Experience-text'>
                        <p>
                            Provide comprehensive support as a Jira administrator, adept at creating and configuring a diverse range of projects within Jira for different departments such as Development, HR, Radio and TV, Social Services, and more. Drive improvements and innovative ideas within the scope of responsibility, contributing to access management, bug tracking, website creation using Sharepoint, and manipulating workflows across projects.
                        </p>
                    </div>
                    <div className='Experience-skills'>
                        <ul className='skills-list'>
                            <ExperienceList item="Jira" />
                            <ExperienceList item="Office 365" />
                            <ExperienceList item="Crowd" />
                            <ExperienceList item="Groovy" />
                            <ExperienceList item="Confluence" />
                            <ExperienceList item="Bitbucket" />
                            <ExperienceList item="BI" />
                            <ExperienceList item="Genesys" />
                            <ExperienceList item="HTML" />
                            <ExperienceList item="CSS" />
                        </ul>
                    </div>
                </div>
            </a>
        </div>
    );
}

export default Experience;