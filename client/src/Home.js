import { useEffect, useState } from "react";
import Path from "./components/Path";
import {getAllCu} from "./utils/HandleApi";


function Home() {
    const [cu, setCu] = useState([])

    useEffect(() => {
        getAllCu(setCu)
      }, [])

    
    return (
        <div className="Home">
            <h1>Home</h1>
            <div className="split left">
                <div className="centered">
                    <a href="/path">CREA NUOVA CU</a>
                    <br></br>
                    <a href="/path">CREA PERCORSO</a>
                </div>
            </div>
            <div className="split right">
                <div className="centered">
                    <div className="list">
                        {cu.map((item) => <Path
                            key={item._id}
                            text={item.text}
                         />)}

                    </div>
                </div>
            </div>
        </div>
    );

}

export default Home