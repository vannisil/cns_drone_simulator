import { useEffect, useState } from "react";
import Path from "./components/Path";
import { getAllCu } from "./utils/HandleApi";
import logo from "./components/logotext.png"
import cuVideo from "./components/Cu.mp4"
import mapVideo from "./components/Maps.mp4"
import pathVideo from "./components/Path.mp4"
import simulVideo from "./components/Simulator.mp4"
import mongoVideo from "./components/MongoDB.mp4"
import backVideo from "./components/Backup.mp4"
import historypng from "./components/history.png"

function Home() {
    const [cu, setCu] = useState([])

    useEffect(() => {
        getAllCu(setCu)
    }, [])


    return (
        <div className="Home">
            <div className="centeredH">
                <div className="centeredH">
                    <img src={logo} alt="Logo" className="logoH" />
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <p>The main purpose of the AVNET application is to create and manage routes for aircraft.</p>
                <br></br>
                <p>Specifically, as a result of entering a name and a set of coordinates, a path can be generated and consequently loaded into a database.</p>
                <br></br>
                <p>As far as the latter is concerned, our choice fell on MongoDB (a nonrelational database) in which we perform the saving of JSON files that contain within them the information on all the various aircraft routes.
                    This then allows us to manage, within the application, an entire section dedicated to route simulation.
                    In fact, based on the information in the database, it goes to check the progress of the vehicle to see if it is flying over the predetermined ECUs.</p>

                <br></br><br></br>
                <h1>Control Units</h1>
                <br></br>
                <p>allows you to enter the coordinates of the ECUs (latitude and longitude) and give them a name</p>
                <br></br>
                <video src={mapVideo} width="800px" loop autoPlay muted/>
                <video src={cuVideo} width="800px" loop autoPlay muted/>
                <br></br><br></br>
                <h1>Path</h1>
                <br></br>
                <p>allows a path to be generated by defining several steps, each of which contains the coordinates of one of the previously stored ECUs</p>
                <br></br>
                <video src={pathVideo} width="800px" loop autoPlay muted/>
                <br></br><br></br>
                <h1>History</h1>
                <br></br>
                <p>contains a history of all the routes created so that, in case you want to re-execute a route that has already been saved, you only have to go back to the name under which it was stored</p>
                <br></br>
                <img src={historypng} width="800px"/>
                <br></br><br></br>
                <h1>Simulator</h1>
                <br></br>
                <p>this simulation allows you to run a path going to evaluate the progress of the aircraft in real time</p>
                <br></br>
                <video src={simulVideo} width="800px" loop autoPlay muted/>
                <br></br><br></br>
                <h1>Backup</h1>
                <br></br>
                <p>manages the saving of all JSON files containing the paths or coordinates of individual ECUs</p>
                <br></br>
                <video src={backVideo} width="800px" loop autoPlay muted/>
                <video src={mongoVideo} width="800px" loop autoPlay muted/>
                <br></br><br></br>
            </div>
        </div>
    );

}

export default Home