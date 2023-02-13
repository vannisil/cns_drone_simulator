import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
import {AiFillCloseCircle} from "react-icons/ai"
import {AiFillInfoCircle} from "react-icons/ai"
import {AiFillPlusCircle} from "react-icons/ai"

const CuForPath = ({text, getInfo, deleteCu, addCu}) => {

    return (
        <div className="cu">
            <div className="text">{text}</div>
            <div className="icons">
                <AiFillInfoCircle className='icon' onClick={getInfo} />
                <AiFillPlusCircle id="aggiungi" className='icon' onClick={addCu}  />
                <AiFillCloseCircle id="elimina" className='icon' onClick={deleteCu} display="none" />
            </div>
        </div>
    )
}

export default CuForPath