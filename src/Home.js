import { useEffect } from 'react';
import { motion } from 'framer-motion';
import image_gen from './images/image_gen.png';
import Wallpaper_App from './images/Wallpaper_App.png';
import Notes_App from './images/Notes_App.png';
import Book_store from './images/Book_store.png';
import CodeAnalyser from './images/CodeAnalyser.png';
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

const Home = () => {
    const projects_yo = [
        { title: "Image Generation App", description: "This application leverages the ImagePig API to generate images based on user-provided prompts. It seamlessly integrates Cloudinary for secure storage, allowing registered users to save and access their generated images anytime—eliminating the need for repeated generation.",image:image_gen,link:'https://imagegen0603-egt0qv5yn-jemans-projects.vercel.app/',username:'Jeman06',password:'Jeman123@'},
        { title: "Wallpaper App", description: "A MERN stack wallpaper application that allows users to upload, store, and manage wallpapers using Cloudinary for image hosting. It features JWT authentication for secure access, ensuring that users can save and organize their favorite wallpapers while maintaining privacy.",image:Wallpaper_App,link:'https://resplendent-babka-6b85c1.netlify.app/'},
        { title: "Notes App", description: "A full-stack MERN bookstore app featuring JWT authentication for secure user access. It includes a cart system for managing book purchases and a dynamic book listing page with Framer Motion animations for a smooth and interactive UI.",image:Notes_App,link:'https://notes-app-06-03.netlify.app/'},
        { title: "Book Store App", description: "A full-stack MERN bookstore app featuring JWT authentication for secure user access. It includes a cart system for managing book purchases and a dynamic book listing page with Framer Motion animations for a smooth and interactive UI.",image:Book_store,link:'https://book-store-06-03.netlify.app/'},
        { title: "Code Analyzer App", description: "A powerful web-based tool that analyzes code for errors, inefficiencies, and optimizations using Gemini AI. It features a separate tab where users can paste coding problems and request AI-generated solutions. The app provides real-time feedback, making it an essential tool for developers looking to improve code quality and solve programming challenges efficiently.",image:CodeAnalyser,link:'https://67c49b7bbd18d6a041249fef--stupendous-centaur-979a4d.netlify.app/'},
        { title: "To-Do List App",description: "A simple and efficient to-do list application with MongoDB for persistent storage. Users can add, edit, delete, and mark tasks as completed, ensuring easy task management. Features JWT authentication for secure access.",image:To_Do_List,link:'https://to-do-list-06-03.netlify.app/'},
        { title: "Chat App [github link]", description: "This application utilizes Socket.io to establish a real-time, two-way connection for seamless message transmission. It integrates MongoDB to efficiently store and manage messages, ensuring registered users can access their chat history anytime.",image:Chat_App,link:'https://github.com/Jeman-Kumar-97-06/MY_Projects/tree/main/MERN_Stack_Apps/Chat_App'},
        { title: "Workout Tracker App [github link]",description : "A fitness-focused CRUD application that helps users log, track, and manage workouts. Users can add exercises, track progress, and update workout details, with MongoDB ensuring data persistence and JWT authentication for secure access.",image:WorkoutTracker,link:'https://github.com/Jeman-Kumar-97-06/MY_Projects/tree/main/MERN_Stack_Apps/Workout_Tracker'}
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
                    <img src={nodejs} alt='nodejs' width="50" height="50"/>
                    <img src={react} alt='reactjs' width="50" height="50"/>
                    <img src={mongodb} alt='mongodb' width="50" height="50"/>
                    <img src={express} alt='expressjs' width="50" height="50"/>
                    <img src={redis} alt='redis' width="50" height="50"/>
                    <img src={linux} alt='linux' width="50" height="50"/>
                    <img src={aws} alt='aws' width="50" height="50"/>
                    <img src={graphql} alt='graphql' width='50' height='50'/>
                    <img src={docker} alt='docker' width='50' height='50'/>
                </div>
            </div>

            

            <div className='portfolio_mern'>
                <h3>Projects.</h3>
                <div className="projects-container">
                {projects_yo.map((project, index) => (
                    <motion.div
                        key={index}
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
                        <p>{project.description}</p>
                        <div className="credentials">
                        {project.username ? <p><strong>Username:</strong> {project.username}</p> : ''}
                        {project.password ? <p><strong>Password:</strong> {project.password}</p> : ''}
                        </div>
                    </motion.div>
                ))}
                {projects_i.map((project, index) => (
                    <motion.div
                        key={index}
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
                        <p>{project.description}</p>
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
                <img className='grind' alt='github streak' src="https://github-readme-streak-stats.herokuapp.com/?user=Jeman-Kumar-97-06&theme=dark" />
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