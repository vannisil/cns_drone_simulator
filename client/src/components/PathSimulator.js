import React from 'react'
import {BsFillPlayCircleFill} from "react-icons/bs"

const PathSimulator = ({text, startPath}) => {
    return (
        <div className="cu">
            <div className="text">{text}</div>
            <div className="icons">
                <BsFillPlayCircleFill className='icon' onClick={startPath} />
            </div>
        </div>
    )
}

export default PathSimulator