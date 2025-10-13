import { useEffect } from 'react';
import { motion } from 'framer-motion';
import refurbished from './videos/refurbished.webm';
import notesapp from './videos/Notesapp.webm';
import imagegen from './videos/ImageGenApp.webm';
import To_Do_List from './images/To_Do_List.png';
import WorkoutTracker from './images/WorkoutTracker.png';
import html5 from './images/html-5.png';
import css3 from './images/css-3.png';
import javascript from './images/javascript.png';
import nodejs from './images/nodejs.png';
import react from './images/react.png';
import mongodb from './images/mongodb.png';
import express from './images/express.png';
import redis from './images/redis.png';
import linux from './images/linux.png';
import aws from './images/aws.png';
import graphql from './images/graphql-icon.png';
import docker from './images/docker.png';
import typescript from './images/typescript.png';
import python from './images/python.png';
import backgroundz from './videos/backgroundz.webm';

const Home = () => {
    //projects with video
    const vid_projects      = [
    {
        title : "RefurbStore [With a chatbot]",
        description : `<ul><li>This is an <u>E-Commerce app</u> to sell renewed smartphones.</li><li>It Uses <u>JWT Authentication</u> and <u> Google OAuth</u>.</li><li>It also has a <u>ChatBot</u> that uses <u>'@xenova/transformers'</u> to convert plain-text to vectors and <u>PineCone</u> to querying & storing vectors.</li></ul>`,
        video : refurbished,
        link  : '',
        gitlink : 'https://github.com/Jeman-Kumar-97-06/E-Commerce_App_Refurbished_Phones',
    },
    {
        title : "Backgroundz App",
        description : "<ul><li>Backgroundz is a full-stack wallpaper application that lets users upload, search, categorize, and download high-quality wallpapers.</li><li>Features user authentication via <u>JWT</u> and <u>Google OAuth</u></li><li>Stores images securely using <u>Cloudinary</u>.</li><li>Built with a modern UI using <u>Tailwind CSS</u></li><li>Includes dunamic search, category filters, and dowload support</li>",
        video: backgroundz,
        link  : 'https://capable-zuccutto-91acf1.netlify.app/',
        gitlink:'https://github.com/Jeman-Kumar-97-06/'
    },
    {
        title: "Image Generation App",
        description : "<ul><li>The Application uses the <u>ImagePig API</u> to generate images from user-provided prompts.</li><li><u>Cloudinary</u> is integrated for secure image storage.</li><li><u>Registered Users</u> can save their generated images.</li><li>Users can <u>access previously generated images anytime,</u> avoiding the need to regenerate them.</li></ul>",
        video : imagegen,
        link  : 'https://imagepiggen.vercel.app/',
        gitlink : 'https://github.com/Jeman-Kumar-97-06/Image_Generation_App'
    },
    {
        title : "Notes App",
        description : "<ul><li>A full-stack MERN bookstore app featuring <u>JWT authentication for secure user access</u>.</li><li>It includes a cart system for managing book purchases and a dynamic book listing page with Framer Motion animations for a smooth and interactive UI.</li></ul>",
        video: notesapp,
        link  : 'https://notes-app-06-03.netlify.app/',
        gitlink:'https://github.com/Jeman-Kumar-97-06/MY_Projects/tree/main/MERN_Stack_Apps/Notes_app'
    }
    ]
    //Projects with image:
    const projects_yo = [
        { title: "To-Do List App",
          description: "<ul><li>A simple and efficient to-do list application with <u>MongoDB for persistent storage</u>.</li><li>Users can add, edit, delete, and mark tasks as completed, ensuring easy task management.</li><li>Features JWT authentication for secure access.</li></ul>",
          image:To_Do_List,
          link:'https://to-do-list-06-03.netlify.app/',
          gitlink:'https://github.com/Jeman-Kumar-97-06/MY_Projects/tree/main/MERN_Stack_Apps/To_Do_List'},
        { title: "Workout Tracker App",
          description : "<ul><li>A fitness-focused CRUD application that helps users log, track, and manage workouts.</li><li>Users can add exercises, track progress, and update workout details, with <u>MongoDB</u> ensuring data persistence and <u>JWT authentication</u> for secure access.</li></ul>",
          image:WorkoutTracker,
          link:'',
          gitlink:'https://github.com/Jeman-Kumar-97-06/MY_Projects/tree/main/MERN_Stack_Apps/Workout_Tracker',}
      ];

    useEffect(()=>{
        async function getLeetCodeStats(username) {
            const response = await fetch(`https://leetcode-api.vercel.app/api/profile/${username}`);
            const data = await response.json();
            const data_res = data.data;
            document.querySelector(".leetcode_progress").innerHTML = `
                <h3>Leetcode Progress.</h3>
                <p>👑 Ranking: ${data_res.matchedUser.profile.ranking}</p>
                <p>✅ Total Solved: ${data_res.matchedUser.submitStats.acSubmissionNum[0].count}</p>
                <p>💪 Easy: ${data_res.matchedUser.submitStats.acSubmissionNum[1].count} | Medium: ${data_res.matchedUser.submitStats.acSubmissionNum[2].count} | Hard: ${data_res.matchedUser.submitStats.acSubmissionNum[3].count}</p>
            `;
        }
        
        getLeetCodeStats("Jeman_Kumar_97");
    },[])

    //Return Statement:
    return (
        <div className='home_page'>
            <div className='top_div'>
                <div className='text-container'>
                    <h3 className='name_mine'>Jeman Kumar.</h3>
                </div>
                <p style={{
                        fontFamily : 'Caviar',
                        fontSize: '16px', // Fits the height of h-32 (~128px) dynamically
                        lineHeight: '1',
                        // textShadow: '0 0 5px white, 0 0 15px white',
                    }}>
                    <span style={{fontSize:"25px",fontWeight:"bold",fontStyle:"italic"}}>"</span>Aspiring <span className='fsd'>Full Stack Developer </span> with a strong <span className='mern-container'><span className='mern'>MERN</span></span> foundation, passionate about building responsive web apps. Enthusiastic problem-solver, always learning new frameworks to stay ahead. Eager to work as a part of a dynamic team.<span style={{fontSize:"25px",fontWeight:"bold",fontStyle:"italic"}}>"</span>
                </p>
            </div>
            <div className='skills'>
                <h3>Skills.</h3>
                <div className='skill_list'>
                    <img src={html5} alt='html5' width="50" height="50"/>
                    <img src={css3} alt='css3' width="50" height="50"/>
                    <img src={javascript} alt='js' width="50" height="50"/>
                    <img src={typescript} alt='ts' width="50" height="50"/>
                    <img src={nodejs} alt='nodejs' width="50" height="50"/>
                    <img src={react} alt='reactjs' width="50" height="50"/>
                    <img src={mongodb} alt='mongodb' width="50" height="50"/>
                    <img src={express} alt='expressjs' width="50" height="50"/>
                    <img src={redis} alt='redis' width="50" height="50"/>
                    <img src={linux} alt='linux' width="50" height="50"/>
                    <img src={aws} alt='aws' width="50" height="50"/>
                    <img src={graphql} alt='graphql' width='50' height='50'/>
                    <img src={docker} alt='docker' width='50' height='50'/>
                    <img src={python} alt='python' width='50' height='50'/>
                </div>
            </div>

            

            <div className='portfolio_mern'>
                <h3>Projects.</h3>
                <div className='projects-container'>
                {vid_projects.map((refurb)=><div className='refurb_proj'>
                <motion.div
                    style={{
                        fontFamily : 'Caviar',
                        fontSize: '16px', // Fits the height of h-32 (~128px) dynamically
                        lineHeight: '1',
                        // textShadow: '0 0 5px white, 0 0 15px white',
                    }}
                    className="project-card spec"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="video-wrapper">
                        <video
                            src={refurb.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="project-video"
                            onClick={(e) => {
                                const video = e.currentTarget;
                                if (video.requestFullscreen) {
                                  video.requestFullscreen();
                                } else if (video.webkitRequestFullscreen) {
                                  video.webkitRequestFullscreen();
                                } else if (video.msRequestFullscreen) {
                                  video.msRequestFullscreen();
                                }
                              }}
                            />
                        <div className="tooltip" style={{'color':'red','marginTop':'10px'}}>Click anywhere on the video for fullscreen</div>
                    </div>
                    <h2 className="project-title">{refurb.title}</h2>
                    <p className="project-description"><strong dangerouslySetInnerHTML={{__html:refurb.description}} /></p>
                    <div class="project-links">
                            {refurb.link.length>1 ? <><a href={refurb.link} rel='noreferrer' target="_blank">🔗 Live</a> | </> : <span>{""}</span>}  
                            <a href={refurb.gitlink} rel='noreferrer' target="_blank">💻 Code</a>
                    </div>
                </motion.div>
                </div>)}
                </div>

                {/* All Projects: */}
                <div className="projects-container">                
                {projects_yo.map((project, index) => (
                    <motion.div
                        style={{
                        fontFamily : 'Caviar',
                        fontSize: '16px', // Fits the height of h-32 (~128px) dynamically
                        lineHeight: '1',
                        // textShadow: '0 0 5px white, 0 0 15px white',
                        }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h2>{project.title}</h2>
                        <p className="project-description"><strong dangerouslySetInnerHTML={{__html:project.description}} ></strong></p>
                        <div class="project-links">
                            {project.link.length>1 ? <><a href={project.link} rel='noreferrer' target="_blank">🔗 Live</a> | </> : <p>{"Not Deployed Yet"}</p>}  
                            <a href={project.gitlink} rel='noreferrer' target="_blank">💻 Code</a>
                        </div>
                        <div className="credentials">
                        {project.username ? <p><strong>Username:</strong> {project.username}</p> : ''}
                        {project.password ? <p><strong>Password:</strong> {project.password}</p> : ''}
                        </div>
                    </motion.div>
                ))}
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
                <img className='grind' alt='alt : github streak' src="https://github-readme-streak-stats.herokuapp.com/?user=Jeman-Kumar-97-06&theme=dark" />
                <img className='langs' alt='lang_mix'      src="https://github-readme-stats.vercel.app/api/top-langs/?username=Jeman-Kumar-97-06&layout=compact&theme=dark" />
            </div>  
            
            <div className='links'>
                <h3>Links.</h3>
                <div className='links_div'>
                    <a href='mailto:jeman060397@gmail.com' target='_blank' rel='noopener noreferrer'><img src={require('./images/gmail.png')} alt='gmail' width="24" height="24"/></a>
                    <a href='https://github.com/Jeman-Kumar-97-06' target='_blank' rel='noopener noreferrer'><img src={require('./images/github.png')} alt='github' width="24" height="24"/></a>
                    <a href='https://leetcode.com/u/Jeman_Kumar_97/' target='_blank' rel='noopener noreferrer'><img src={require('./images/leet.png')} alt='github' width="24" height="24"/></a>
                    <a href='https://www.linkedin.com/in/jeman-kumar-bb1025341/' target='_blank' rel='noopener noreferrer'><img src={require('./images/linkedin.png')} alt='linkedin' width='24' height='24'/></a>
                </div>
            </div>
        </div>
    )
}

export default Home;