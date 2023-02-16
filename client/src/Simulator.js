import { useEffect, useState } from "react";
import PathSimulator from "./components/PathSimulator";
import { getAllPath, addPath, updatePath, deletePath } from "./utils/HandleApi";
import { getAllCu } from "./utils/HandleApi";


const url = 'http://localhost:5000';

function Simulator() {
    const [cu, setCu] = useState([])
    const [path, setPath] = useState([])

    useEffect(() => {
        getAllPath(setPath)
    }, [])

    const refreshPage = () => {
        window.location.reload();
    }

    var latitude;
    var longitude;

    function getMyData() {
        fetch(url + '/getPosition')
            .then((response) => response.json())
            .then((position) => latitude = position.latitude)
        // .then(() => console.log("latitude:" + latitude))

        fetch(url + '/getPosition')
            .then((response) => response.json())
            .then((position) => longitude = position.longitude)
        // .then(() => console.log("longitude:" + longitude))

    }

    const get = () => {
        console.log("latitude:" + latitude + "\n longitude:" + longitude)
    }

    function getName(json) {
        console.log(obj)
        var obj = JSON.parse(json);
        return obj[0].namepath
      }

    return (
        <div className="Home">
            <div className="centeredS">
                <h1>Simulator</h1>
                <button onClick={getMyData}>
                    ok
                </button>
            </div>
            <div className="cuCentered">
                <div className="list">
                    {path.map((item) => <PathSimulator
                        key={item._id}
                        text={getName(item.text)} />)}
                </div>
            </div>
            <div
                className="addCu"
                onClick={get}>
            </div>
        </div>
    );

}

export default Simulator