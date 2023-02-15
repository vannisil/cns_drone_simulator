import React from 'react'
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
import {AiFillCloseCircle} from "react-icons/ai"
import {AiFillInfoCircle} from "react-icons/ai"
import {AiFillPlusCircle} from "react-icons/ai"

const CuForPath = ({id, text, getInfo, deleteCu, addCu, index}) => {

    return (
        <div className="cu" id={id}>
            <div className="text">{text}</div>
            <input className="input" type="date" id={"date" + index}></input>
            <input className="input" type="time" id={"time" + index}></input>
            <div className="icons">
                <AiFillInfoCircle className='icon' onClick={getInfo} />
                <AiFillPlusCircle id={"aggiungi" + index} className='icon' onClick={addCu}  />
                <AiFillCloseCircle id={"elimina" + index} className='icon' onClick={deleteCu} display="none" />
            </div>
        </div>
    )
}

export default CuForPath