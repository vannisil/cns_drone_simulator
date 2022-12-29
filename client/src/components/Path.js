import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai"

const Path = ({text}) => {
    return (
        <div className="cu">
            <div className="text">{text}</div>
            <div className="icons">
                <AiFillCheckCircle className='icon'/>
            </div>
        </div>
    )
}

export default Path