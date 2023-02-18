import { useEffect, useState } from "react";
import Cu from "./components/Cu";
import BackupData from "./components/BackupData";
import { getAllCu, addCu, updateCu, deleteCu } from "./utils/HandleApi";
import { getAllPath, addPath, updatePath, deletePath } from "./utils/HandleApi";


function Backup() {

    const [cu, setCu] = useState([])
    const [path, setPath] = useState([])
    const [text, setText] = useState("")
    const [nameCu, setNameCu] = useState("")
    const [name, setName] = useState("")
    const [isUpdating, setIsUpdating] = useState(false)
    const [PathId, setPathId] = useState("")

    useEffect(() => {
        getAllPath(setPath)
        getAllCu(setCu)
    }, [])

    const downloadCu = () => {
        const element = document.createElement("a");
        const textFile = new Blob([JSON.stringify(cu)], { type: 'text/plain' }); //pass data from localStorage API to blob
        element.href = URL.createObjectURL(textFile);
        element.download = "cu_collection.json";
        document.body.appendChild(element);
        element.click();
    }

    const downloadPaths = () => {
        const element = document.createElement("a");
        const textFile = new Blob([JSON.stringify(path)], { type: 'text/plain' }); //pass data from localStorage API to blob
        element.href = URL.createObjectURL(textFile);
        element.download = "paths_collection.json";
        document.body.appendChild(element);
        element.click();
    }

    return (
        <div className="App">
            <div className="centered">
                <h1>Backup</h1>
                <br></br>
                <h3>Get your collection's json file</h3>
                <br></br>
                <p>Here you can find all the collections of the database as a file in json format.</p>
                <p>In this way you can easily import it in your local database</p>
            </div>
            <div className="cuCentered">
                <div className="list">
                    <BackupData
                        text="Paths"
                        download={downloadPaths} />
                    <BackupData
                        text="Cotrol Units"
                        download={downloadCu} />
                </div>
            </div>
        </div>
    );
}

export default Backup;