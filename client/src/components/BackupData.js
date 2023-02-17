import React from 'react'
import {BsCloudDownloadFill} from "react-icons/bs"

const BackupData = ({text, download}) => {
    return (
        <div className="cu">
            <div className="text">{text}</div>
            <div className="icons">
                <BsCloudDownloadFill className='icon' onClick={download} />
            </div>
        </div>
    )
}

export default BackupData