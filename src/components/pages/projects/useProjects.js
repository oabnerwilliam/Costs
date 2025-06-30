import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useProjects = () => {
    const [projects, setProjects] = useState([])
    const [projectMessage, setProjectMessage] = useState('')
    const [searchText, setSearchText] = useState('')
    const [filteredProjects, setFilteredProjects] = useState([])
    const [loading, setLoading] = useState(true)

    let message = ""
    const location = useLocation()
    if(location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(async ()=>{
            try {
                const resp = await fetch("http://localhost:5000/projects", {
                        method: "GET",
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                )

                if (!resp.ok) throw new Error

                const data = await resp.json()
                
                setProjects(data)
                setLoading(false)
            } catch (err) {
                console.log(err)
            }
        }, 1000)
    }, [])

    useEffect(()=>{
        setFilteredProjects(projects)
    }, [projects])

    projects.sort((a, b)=>b.id-a.id)

    const removeProject = async (id) => {
        try {
            const resp = await fetch(`http://localhost:5000/projects/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (!resp.ok) throw new Error

            const data = await resp.json()

            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        } catch (err) {
            console.log(err)
        }
    }
    
    return {
        projects,
        setSearchText,
        searchText,
        filteredProjects,
        setFilteredProjects,
        message,
        projectMessage,
        loading,
        removeProject
    }
}

export default useProjects
