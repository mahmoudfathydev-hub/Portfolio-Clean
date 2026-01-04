import ProjectsPage from '@/Components/Projects/Projects'
import React, { useState, useEffect } from 'react'
import Skeleton from '@/Components/UI/Skeleton/Skeleton'
import './Projects.scss'

export default function Projects() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (loading) {
        return (
            <div className="projects-page">
                <div className="projects-page__header">
                    <Skeleton width="200px" height="40px" />
                </div>
                <div className="skeleton-container">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <Skeleton 
                            key={item} 
                            variant="project-card" 
                            className="skeleton-item"
                        />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="projects-page">
            <ProjectsPage />
        </div>
    )
}
