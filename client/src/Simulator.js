import { useEffect, useState } from "react";
import { getAllCu } from "./utils/HandleApi";


const url = 'http://localhost:5000';

function Simulator() {
    const [cu, setCu] = useState([])
    const [latitude, setLatitude] = useState("")

    useEffect(() => {
        getAllCu(setCu)
    }, [])


    const get = async () => {
        fetch(url + '/getPosition')
            .then((response) => response.json())
            .then((position) => setLatitude(position.latitude))
            .then((position) => console.log("latitude:" + position.latitude))
    }

    const ok = () => {
        console.log(latitude)
    }

    return (
        <div className="Home">
            <div className="centered">
                <h1>Simulator</h1>
                <button onClick={ok}>
                    ok
                </button>
            </div>

            <div
                className="addCu"
                onClick={get}>
            </div>
        </div>
    );

}

export default Simulator