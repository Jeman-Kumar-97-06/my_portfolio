const Home = () => {
    return (
        <div className='home_page'>
            <div className='top_div'>
                <h3>JEMAN KUMAR.</h3>
                <p>I'm an aspiring <span className='fsd'>Full Stack Developer</span> with strong foundations in <span className='m'>M</span><span className='e'>E</span><span className='r'>R</span><span className='n'>N</span> stack development. I love working on new and exciting technologies.</p>
            </div>
            <div className='skills'>
                <h3>Skills</h3>
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
                    <img src={require('./images/aws.png')} alt='aws' width="50" height="50"/>
                    <img src={require('./images/graphql-icon.png')} alt='graphql' width='50' height='50'/>
                    {/* <img src={require('./images/next-js.256x256.png')} alt='nextjs' width="50" height="50"/> */}
                </div>
            </div>
            <div className='portfolio_mern'>
                <h3>Projects</h3>
                <div className='projects'>
                    <div className='project_each'>
                        <img src={require("./images/Wallpaper_App.png")} alt='Wallpaper App' style={{width:"100%"}}/>
                        <div className='content'>
                            <a href='#'><h4>Wallpaper App</h4></a>
                            <p>HTML+CSS+JS+React+NodeJS+MongoDB+JWT</p>
                        </div>
                    </div>
                    <div className='project_each'>
                        <img src={require("./images/To_Do_List.png")} alt='To_Do_List App' style={{width:"100%"}}/>
                        <div className='content'>
                            <a href='#'><h4>ToDoList App</h4></a>
                            <p>HTML+CSS+JS+React+NodeJS+MongoDB+JWT</p>
                        </div>
                    </div>
                    <div className='project_each'>
                        <img src={require("./images/WorkoutTracker.png")} alt='WOrkout Tracker App' style={{width:"100%"}}/>
                        <div className='content'>
                            <a href='#'><h4>Workout Tracker App</h4></a>
                            <p>HTML+CSS+JS+React+NodeJS+MongoDB+JWT</p>
                        </div>
                    </div>
                    <div className='project_each'>
                        <img src={require("./images/Notes_App.png")} alt='Notes App' style={{width:"100%"}}/>
                        <div className='content'>
                            <a href='#'><h4>Notes App</h4></a>
                            <p>HTML+CSS+JS+React+NodeJS+MongoDB+JWT</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='links'>
                <h3>Certifications</h3>
                <a href='https://www.udemy.com/certificate/UC-d0914537-adbb-40c6-81f5-f1f03898a7ed/'>Full Stack Web Development</a>
            </div>

            <div className='links'>
                <h3>Links</h3>
                <div className='links_div'>
                    <a href='mailto:jeman060397@gmail.com'><img src={require('./images/gmail.png')} alt='gmail' width="24" height="24"/></a>
                    <a href='https://github.com/Jeman-Kumar-97-06'><img src={require('./images/github.png')} alt='github' width="24" height="24"/></a>
                </div>
            </div>
        </div>
    )
}

export default Home;