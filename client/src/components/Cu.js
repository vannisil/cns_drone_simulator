import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const Cu = ({text, updateMode, deleteCu}) => {
    return (
        <div className="cu">
            <div className="text">{text}</div>
            <div className="icons">
                {/* <BiEdit className='icon' onClick={updateMode} /> */}
                <AiFillDelete className='icon' onClick={deleteCu} />
            </div>
        </div>
    )
}

export default Cu