import { useEffect, useState } from "react";
import {getAllCu} from "./utils/HandleApi";


function Simulator() {
    const [cu, setCu] = useState([])

    useEffect(() => {
        getAllCu(setCu)
      }, [])

    
    return (
        <div className="Home">
            <div className="centered">
            <h1>Simulator</h1>
            </div>
        </div>
    );

}

export default Simulator