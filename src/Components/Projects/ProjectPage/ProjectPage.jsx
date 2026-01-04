import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiReact, SiRedux, SiSass, SiAxios, SiVite, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import projectsData from "../../../Data/ProjectsData.json";
import Button from "@/Components/UI/Button/Button";
import "./SProjectPage.scss";

export default function ProjectPage() {
    const toolIcons = {
        React: <SiReact color="#61DAFB" />,
        "React 19": <SiReact color="#61DAFB" />,
        "Redux Toolkit": <SiRedux color="#764ABC" />,
        "Sass (SCSS)": <SiSass color="#CD6799" />,
        Sass: <SiSass color="#CD6799" />,
        Axios: <SiAxios color="#5A29E4" />,
        Vite: <SiVite color="#646CFF" />,
        JavaScript: <SiJavascript color="#F0DB4F" />,
        HTML: <SiHtml5 color="#E44D26" />,
        CSS: <SiCss3 color="#264de4" />,
        "React Router DOM v7": <SiReact color="#61DAFB" />,
        "React Router DOM": <SiReact color="#61DAFB" />,
        Swiper: <SiVite color="#646CFF" />,
        "Swiper.js": <SiVite color="#646CFF" />,
        Context: <SiReact color="#61DAFB" />,
        "Framer Motion": <SiVite color="#646CFF" />,
        "React Icons": <SiReact color="#61DAFB" />,
    };

    const getToolIcon = (tool) => toolIcons[tool] || <span>&lt;/&gt;</span>;

    const { id } = useParams();
    const project = projectsData.projects.find((proj) => proj.id === parseInt(id));

    const [lightbox, setLightbox] = useState({ open: false, img: "" });

    if (!project) return <p>Project not found.</p>;

    return (
        <motion.div
            className="project-page"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div className="project-header" whileHover={{ scale: 1.02 }}>
                <h1>{project.name}</h1>
                <p>{project.desc}</p>
                <div className="project-buttons">
                    {project.github && <Button  className="btn-project-link" name="GitHub" Icon={FaGithub} url={project.github} />}
                    {project.netlify && <Button className="btn-project-link"  name="Netlify" Icon={FaExternalLinkAlt} url={project.netlify} />}
                </div>
            </motion.div>

            <div className="project-details">
                <motion.div className="project-section" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <h2>Features</h2>
                    <ul>{project.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                </motion.div>

                <motion.div className="project-section tools-section" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <h2>Tools & Libraries</h2>
                    <div className="tools-grid">
                        {project.tools_and_libraries.map((tool, i) => (
                            <motion.div
                                key={i}
                                className="tool-card"
                                whileHover={{ scale: 1.05, boxShadow: "0 6px 12px rgba(228,0,55,0.5)" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="tool-icon">{getToolIcon(tool)}</div>
                                <p>{tool}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div className="project-section" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                    <h2>Goal</h2>
                    <p>{project.goal}</p>
                </motion.div>

                {project.video && (
                    <div className="project-video">
                        <video 
                            src={project.video} 
                            autoPlay 
                            loop 
                            muted 
                            playsInline 
                            controls
                            onError={(e) => console.error('Video failed to load:', project.video)}
                            onLoad={() => console.log('Video loaded successfully:', project.video)}
                        />
                    </div>
                )}

                <h2>Images</h2>
                <div className="project-images">
                    {project.images.map((img) => (
                        <motion.img
                            key={img.id}
                            src={img.img}
                            alt={`${project.name} screenshot`}
                            whileHover={{ scale: 1.05, boxShadow: "0 6px 10px rgba(228,0,55,0.6)" }}
                            transition={{ type: "spring", stiffness: 300 }}
                            onClick={() => setLightbox({ open: true, img: img.img })}
                            onError={(e) => {
                                console.error('Image failed to load:', img.img);
                                e.target.style.display = 'none';
                            }}
                            onLoad={() => console.log('Image loaded successfully:', img.img)}
                        />
                    ))}
                </div>
            </div>

            {lightbox.open && (
                <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox({ open: false, img: "" })}>
                    <motion.img src={lightbox.img} alt="full view" initial={{ scale: 0.8 }} animate={{ scale: 1 }} />
                    <button className="close-btn" onClick={() => setLightbox({ open: false, img: "" })}>
                        X
                    </button>
                </motion.div>
            )}
        </motion.div>
    );
}
