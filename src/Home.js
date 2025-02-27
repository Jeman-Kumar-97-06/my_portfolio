import { useEffect } from 'react';

const Home = () => {
    useEffect(()=>{
        async function getLeetCodeStats(username) {
            const response = await fetch(`https://leetcode-api.vercel.app/api/profile/${username}`);
            const data = await response.json();
            const data_res = data.data;
            console.log(data_res)
            document.querySelector(".leetcode_progress").innerHTML = `
                <h3>Leetcode Progress.</h3>
                <p>👑 Ranking: ${data_res.matchedUser.profile.ranking}</p>
                <p>✅ Total Solved: ${data_res.matchedUser.submitStats.acSubmissionNum[0].count}</p>
                <p>💪 Easy: ${data_res.matchedUser.submitStats.acSubmissionNum[1].count} | Medium: ${data_res.matchedUser.submitStats.acSubmissionNum[2].count} | Hard: ${data_res.matchedUser.submitStats.acSubmissionNum[3].count}</p>
            `;
        }
        
        getLeetCodeStats("Jeman_Kumar_97");
    },[])
    return (
        <div className='home_page'>
            <div className='top_div'>
                <div className='text-container'>
                    <h3 className='name_mine'>Jeman Kumar.</h3>
                </div>
                <p>
                    <span style={{fontSize:"25px",fontWeight:"bold",fontStyle:"italic"}}>"</span>Aspiring <span className='fsd'>Full Stack Developer </span> with a strong <span className='mern-container'><span className='mern'>MERN</span></span> foundation, passionate about building responsive web apps. Enthusiastic problem-solver, always learning new frameworks to stay ahead. Eager to work as a part of a dynamic team.<span style={{fontSize:"25px",fontWeight:"bold",fontStyle:"italic"}}>"</span>
                </p>
            </div>
            <div className='skills'>
                <h3>Skills.</h3>
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
                    <img src={require('./images/docker.png')} alt='docker' width='50' height='50'/>
                </div>
            </div>
            <div className='portfolio_mern'>
                <h3>Projects.</h3>
                <div className='projects'>
                    <div className='project_each'>
                        <img src={require("./images/Wallpaper_App.png")} alt='Wallpaper App' style={{width:"100%"}}/>
                        <div className='content'>
                            <a href='https://resplendent-babka-6b85c1.netlify.app/' target='_blank' rel='noopener noreferrer'><h4>Wallpaper App <span class="material-symbols-outlined">link</span></h4></a>
                            <p>TailwindCSS | Masonry Layout | React | NodeJS | MongoDB | JWT</p>
                        </div>
                    </div>
                    <div className='project_each'>
                        <img src={require("./images/Book_store.png")} alt='Book Store App' style={{width:"100%"}}/>
                        <div className='content'>
                            <a href='https://book-store-06-03.netlify.app/' target='_blank' rel='noopener noreferrer'><h4>Book Store App <span class="material-symbols-outlined link_icon">link</span></h4></a>
                            <p>HTML | CSS | JS | React | NodeJS | MongoDB | JWT</p>
                        </div>
                    </div>
                    <div className='project_each'>
                        <img src={require("./images/Chat_App.png")} alt='Chat App' style={{width:"100%"}}/>
                        <div className='content'>
                            <a href='https://github.com/Jeman-Kumar-97-06/MY_Projects/tree/main/MERN_Stack_Apps/Chat_App' target='_blank' rel='noopener noreferrer'><h4>Chat App [Coming Soon]<span class="material-symbols-outlined">link</span></h4></a>
                            <p>TailwindCSS |React | NodeJS | SocketIO | MongoDB | JWT</p>
                        </div>
                    </div>
                    <div className='project_each'>
                        <img src={require("./images/To_Do_List.png")} alt='To_Do_List App' style={{width:"100%"}}/>
                        <div className='content'>
                            <a href='https://to-do-list-06-03.netlify.app' target='_blank' rel='noopener noreferrer'><h4>ToDoList App <span class="material-symbols-outlined">link</span></h4></a>
                            <p>HTML | CSS | JS | React | NodeJS | MongoDB | JWT</p>
                        </div>
                    </div>
                    <div className='project_each'>
                        <img src={require("./images/WorkoutTracker.png")} alt='Workout Tracker App' style={{width:"100%"}}/>
                        <div className='content'>
                            <a href='https://workout-tracker-06-03.netlify.app/' target='_blank' rel='noopener noreferrer'><h4>Workout Tracker App <span class="material-symbols-outlined">link</span></h4></a>
                            <p>HTML | CSS | JS | React | NodeJS | MongoDB | JWT</p>
                        </div>
                    </div>
                    <div className='project_each'>
                        <img src={require("./images/Notes_App.png")} alt='Notes App' style={{width:"100%"}}/>
                        <div className='content'>
                            <a href='https://notes-app-06-03.netlify.app/' target='_blank' rel='noopener noreferrer'><h4>Notes App <span class="material-symbols-outlined link_icon">link</span></h4></a>
                            <p>HTML | CSS | JS | React | NodeJS | MongoDB | JWT</p>
                        </div>
                    </div>                    
                </div>
            </div>
            
            <div className='links'>
                <h3>Certifications.</h3>
                <a href='https://www.udemy.com/certificate/UC-d0914537-adbb-40c6-81f5-f1f03898a7ed/' target='_blank' rel='noopener noreferrer'>Full Stack Web Development <span class="material-symbols-outlined">link</span></a>
                <a href='https://www.udemy.com/certificate/UC-a738e745-015c-4e5d-9d49-76795b637dfd/' target='_blank' rel='noopener noreferrer'>React Development Bootcamp <span class="material-symbols-outlined">link</span></a>
            </div>

            <div className='leetcode_progress'>

            </div>
            <div className='github_progress'>
                <h3>Github Stats.</h3>
                <img className='grade' alt='github status' src="https://github-readme-stats.vercel.app/api?username=Jeman-Kumar-97-06&show_icons=true&theme=dark" />
                <img className='grind' alt='github streak' src="https://github-readme-streak-stats.herokuapp.com/?user=Jeman-Kumar-97-06&theme=dark" />
                <img className='langs' alt='lang_mix'      src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jeman-Kumar-97-06&layout=compact&theme=dark" />
            </div>  
            
            <div className='links'>
                <h3>Links.</h3>
                <div className='links_div'>
                    <a href='mailto:jeman060397@gmail.com' target='_blank' rel='noopener noreferrer'><img src={require('./images/gmail.png')} alt='gmail' width="24" height="24"/></a>
                    <a href='https://github.com/Jeman-Kumar-97-06' target='_blank' rel='noopener noreferrer'><img src={require('./images/github.png')} alt='github' width="24" height="24"/></a>
                    <a href='https://leetcode.com/u/Jeman_Kumar_97/' target='_blank' rel='noopener noreferrer'><img src={require('./images/leet.png')} alt='github' width="24" height="24"/></a>
                </div>
            </div>
        </div>
    )
}

export default Home;