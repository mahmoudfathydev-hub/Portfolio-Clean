import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./ProjectsSection.scss";
import projectsData from "../../../Data/ProjectsData.json";
import Button from "@/Components/UI/Button/Button";

export default function ProjectsSection() {
    const navigate = useNavigate();
    const firstImage = project.images[0].img;

    return (
        <div className="projects-section">
            <div className="section-title">
                <p>My <span>Projects</span></p>
            </div>

            <div className="container">
                {projectsData.projects.map((project) => {
                    const firstImage = project.images[0].img;

                    return (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(`/course/${project.id}`)} 
                        >
                            <div className="project-image-wrapper">
                                <img
                                    src={`${import.meta.env.BASE_URL}${firstImage}`}
                                    alt={project.name}
                                    onError={(e) => {
                                        console.error('Image failed to load:', firstImage);
                                        e.target.style.display = 'none';
                                    }}
                                    onLoad={() => console.log('Image loaded successfully:', firstImage)}
                                />
                            </div>

                            <div className="project-info">
                                <h2>{project.name}</h2>
                                <p>{project.desc}</p>
                            </div>

                            <div
                                className="project-links"
                                onClick={(e) => e.stopPropagation()} 
                            >
                                {project.github && (
                                    <Button
                                        name="GitHub"
                                        Icon={FaGithub}
                                        url={project.github}
                                    />
                                )}
                                {project.netlify && (
                                    <Button
                                        name="Netlify"
                                        Icon={FaExternalLinkAlt}
                                        url={project.netlify}
                                    />
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
