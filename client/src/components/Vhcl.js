import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const Vhcl = ({text, deletVehicle}) => {
    return (
        <div className="cu">
            <div className="text">{text}</div>
            <div className="icons">
                <AiFillDelete className='icon' onClick={deletVehicle} />
            </div>
        </div>
    )
}

export default Vhcl