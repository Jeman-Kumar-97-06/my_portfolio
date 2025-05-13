import { useEffect } from 'react';
import { motion } from 'framer-motion';
import refurbished from './videos/refurbished.webm';
import bookapp from './videos/bookApp.webm';
import codeapp from './videos/CodeAApp.webm';
import notesapp from './videos/Notesapp.webm';
import imagegen from './videos/ImageGenapp.webm';
import wallpaperapp from './videos/wallpaperapp.webm';
import Chat_App from './images/Chat_App.png';
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

const Home = () => {
    //projects with video
    const vid_projects      = [
    {
        title : "RefurbStore [With a chatbot]",
        description : `<ul><li>This is an <strong>E-Commerce app</strong> to sell renewed smartphones.</li><li>It Uses <strong>JWT Authentication</strong> and <strong> Google OAuth</strong>.</li><li>It also has a <strong>ChatBot</strong> that uses <strong>'@xenova/transformers'</strong> to convert plain-text to vectors and <strong>PineCone</strong> to querying & storing vectors.</li></ul>`,
        video : refurbished,
        link  : '',
        gitlink : 'https://github.com/Jeman-Kumar-97-06/E-Commerce_App_Refurbished_Phones',
    },
    {
        title: "Image Generation App",
        description : "<ul><li>The Application uses the <strong>ImagePig API</strong> to generate images from user-provided prompts.</li><li><strong>Cloudinary</strong> is integrated for secure image storage.</li><li><strong>Registered Users</strong> can save their generated images.</li><li>Users can <strong>access previously generated images anytime,</strong> avoiding the need to regenerate them.</li></ul>",
        video : imagegen,
        link  : 'https://imagepiggen.vercel.app/',
        gitlink : 'https://github.com/Jeman-Kumar-97-06/Image_Generation_App'
    },
    {
        title : "Wallpaper App",
        description : "<ul><li>A MERN stack wallpaper application that allows users to upload, store, and manage wallpapers using <strong>Cloudinary</strong> for image hosting.</li><li>It features <strong>JWT authentication</strong> for secure access, ensuring that users can save and organize their favorite wallpapers while maintaining privacy.</li></ul>",
        video:wallpaperapp,
        link  : 'https://resplendent-babka-6b85c1.netlify.app/',
        gitlink:'https://github.com/Jeman-Kumar-97-06/MY_Projects/tree/main/MERN_Stack_Apps/WallpaperApp'
    },
    {
        title : "Code Analyser App",
        description : "<ul><li>A powerful web-based tool that analyzes code for errors, inefficiencies, and optimizations using <strong>Gemini AI</strong>.</li><li>It features a separate tab where users can paste coding problems and request AI-generated solutions.</li><li>The app provides real-time feedback, making it an essential tool for developers looking to improve code quality and solve programming challenges efficiently.</li></ul>",
        video : codeapp,
        link  : 'https://67c49b7bbd18d6a041249fef--stupendous-centaur-979a4d.netlify.app/',
        gitlink:'https://github.com/Jeman-Kumar-97-06/MY_Projects/tree/main/MERN_Stack_Apps/CodeAnalyzer'
    },
    {
        title : "Book Store App",
        description : "<ul><li>A full-stack MERN bookstore app featuring JWT authentication for secure user access.</li><li>It includes a cart system for managing book purchases and a dynamic book listing page with Framer Motion animations for a smooth and interactive UI.</li></ul>",
        video: bookapp,
        link  : 'https://book-store-06-03.netlify.app/',
        gitlink:'https://github.com/Jeman-Kumar-97-06/MY_Projects/tree/main/MERN_Stack_Apps/E-Commerce'
    },
    {
        title : "Notes App",
        description : "<ul><li>A full-stack MERN bookstore app featuring <strong>JWT authentication for secure user access</strong>.</li><li>It includes a cart system for managing book purchases and a dynamic book listing page with Framer Motion animations for a smooth and interactive UI.</li></ul>",
        video: notesapp,
        link  : 'https://notes-app-06-03.netlify.app/',
        gitlink:'https://github.com/Jeman-Kumar-97-06/MY_Projects/tree/main/MERN_Stack_Apps/Notes_app'
    }   
    ]
    //Projects with image:
    const projects_yo = [
        { title: "To-Do List App",
          description: "<ul><li>A simple and efficient to-do list application with <strong>MongoDB for persistent storage</strong>.</li><li>Users can add, edit, delete, and mark tasks as completed, ensuring easy task management.</li><li>Features JWT authentication for secure access.</li></ul>",
          image:To_Do_List,
          link:'https://to-do-list-06-03.netlify.app/',
          gitlink:'https://github.com/Jeman-Kumar-97-06/MY_Projects/tree/main/MERN_Stack_Apps/To_Do_List'},
        { title: "Chat App", 
          description: "<ul><li>This application utilizes <strong>Socket.io</strong> to establish a real-time, two-way connection for seamless message transmission.</li><li>It integrates <strong>MongoDB</strong> to efficiently store and manage messages, ensuring registered users can access their chat history anytime.</li></ul>",
          image:Chat_App,
          link:'',
          gitlink:'https://github.com/Jeman-Kumar-97-06/MY_Projects/tree/main/MERN_Stack_Apps/Chat_App',},
        { title: "Workout Tracker App",
          description : "<ul><li>A fitness-focused CRUD application that helps users log, track, and manage workouts.</li><li>Users can add exercises, track progress, and update workout details, with <strong>MongoDB</strong> ensuring data persistence and <strong>JWT authentication</strong> for secure access.</li></ul>",
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
                        <div className="tooltip" style={{'color':'red'}}>Click anywhere on the video for fullscreen</div>
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