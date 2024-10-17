const Home = () => {
    return (
        <div className='home_page'>
            <div className='top_div'>
                <h2>Jeman Kumar</h2>
                <p>I'm an aspiring <span className='fsd'>Full Stack Developer</span> with strong foundations in <span className='m'>M</span><span className='e'>E</span><span className='r'>R</span><span className='n'>N</span> stack development. I love working on new and exciting technologies.</p>
            </div>
            <div className='skills'>
                <h2>My Skills</h2>
                <div className='skill_list'>
                    <img src={require('./images/html-5.png')} alt='html5' width="50" height="50"/>
                    <img src={require('./images/css-3.png')} alt='css3' width="50" height="50"/>
                    <img src={require('./images/javascript.png')} alt='js' width="50" height="50"/>
                    <img src={require('./images/nodejs.png')} alt='nodejs' width="50" height="50"/>
                    <img src={require('./images/react.png')} alt='reactjs' width="50" height="50"/>
                    <img src={require('./images/mongodb.png')} alt='mongodb' width="50" height="50"/>
                    <img src={require('./images/express.png')} alt='expressjs' width="50" height="50"/>
                    <img src={require('./images/redis.png')} alt='redis' width="50" height="50"/>
                    <img src={require('./images/linux.png')} alt='linux' width="50" height="50"/>
                </div>
            </div>
            <div className='portfolio_mern'>
                <h2>MERN Stack Projects</h2>
                <div className='projects'>
                    <div className='project_each'>
                        <img alt='AI_Prompt_App'/>
                        <p>An AI Prompt app that generates responses to user prompts. This uses GEMINI Api to generate responses</p>
                    </div>
                    <div className='project_each'>
                        <img alt='Notes_App'/>
                        <p>A Personalized Notes app that used MERN stack technologies and JWT authentication</p>
                    </div>
                    <div className='project_each'>
                        <img alt='Workout_Tracker'/>
                        <p>A Personalized Workout Tracker app that used MERN stack technologies and JWT authentication</p>
                    </div>
                    <div className='project_each'>
                        <imp alt='To_Do_List'/>
                        <p>A Tasks App to maintain, check and uncheck daily list of tasks.</p>
                    </div>
                </div>
            </div>
            
            <div className='links'>
                <h2>Certifications</h2>
                <a href='https://www.udemy.com/certificate/UC-d0914537-adbb-40c6-81f5-f1f03898a7ed/'>Full Stack Web Development</a>
            </div>

            <div className='links'>
                <h2>Contact</h2>
                <a href='www.gmail.com'>mail</a>
                <p>Phone : 9553925079</p>
            </div>
        </div>
    )
}

export default Home;