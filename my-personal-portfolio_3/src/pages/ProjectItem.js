import React from 'react'

const ProjectItem = ({name, image}) => {
  return (
        <div className='projectItem'>
            <div style={{ backgroundImage: `url(${image})`}} className="bgImage">                
            </div>
            <h1>{name}</h1>        
        </div>
    )
}

export default ProjectItem
