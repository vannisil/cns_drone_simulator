import { useEffect, useState } from "react";
import PathSimulator from "./components/PathSimulator";
import { getAllPath, addPath, updatePath, deletePath } from "./utils/HandleApi";
import { AiFillCloseCircle } from "react-icons/ai"
import * as serviceWorker from './serviceWorker';


const url = 'http://localhost:5000'

function Simulator() {
    const [path, setPath] = useState([])
    const [modal, setModal] = useState(false);
    const [popText, setPopText] = useState("");

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

        fetch(url + '/getPosition')
            .then((response) => response.json())
            .then((position) => longitude = position.longitude)

        document.getElementById('list').style.display = 'inline';

    }

    var step = 0;
    var isInPath;
    var step1;
    var step2;
    var longitude1;
    var longitude2;
    var latitude1;
    var latitude2;

    const get = () => {
        console.log("latitude:" + latitude + "\n longitude:" + longitude)
        var currentDate = ((new Date).toISOString().split('T')[0]);
        var currentTime = new Date().toLocaleTimeString();
        console.log(Date.parse(obj[0].date))
        console.log(currentDate)
        console.log(obj)
        var size = Object.keys(obj).length;
        for (var i = 0; i < size - 1; i++) {
            var date = obj[i].date
            var date1 = obj[i + 1].date
            var time = (obj[i].time)
            var time1 = (obj[i + 1].time)
            if (date < currentDate) {
                if (date1 < currentDate) {
                } else if (date1 >= currentDate) {
                    if (time1 >= currentTime) {
                        step = i + 1;
                    }
                }
            }
            else if (date === currentDate) {
                if (date1 === currentDate) {
                    if (time1 >= currentTime && time < currentTime) {
                        step = i + 1;
                    }
                }
            }
        }
        if (step === 0) {
            isInPath = false;
            console.log(step)
        }
        else {

            latitude1 = obj[(step - 1)].latitude;
            latitude2 = obj[step].latitude;
            longitude1 = obj[step - 1].longitude;
            longitude2 = obj[step].longitude;


            if (latitude1 < latitude && latitude2 >= latitude) {
                isInPath = true;
            } else isInPath = false;


            if (longitude1 < longitude && longitude2 >= longitude) {
                isInPath = true;
            } else isInPath = false;

            step1 = obj[step - 1].name;
            step2 = obj[step].name;
            console.log(step)
            console.log(isInPath)
            console.log(obj[step].latitude)
        }
        toggleModal()
    }

    var obj;

    function getName(json) {
        console.log(obj)
        obj = JSON.parse(json);
        return obj[0].namepath
    }

    var popUpText;

    const toggleModal = () => {
        if (isInPath) {
            popUpText = "your vehicle is between " + step1 + " and " + step2;
        } else popUpText = "is not in path"
        setPopText(popUpText)
        setModal(!modal);
    };

    const toggleModalExit = () => {
        setModal(!modal);
    };

    return (
        <div className="Home">
            <div className="centeredS">
                <h1>Simulator</h1>
                <button onClick={getMyData} className="getButton">
                    Retrive the vehicle's coordinates
                </button>
            </div>
            <div className="cuCenteredS" id="list">
                <div className="list">
                    {path.map((item) => <PathSimulator
                        key={item._id}
                        text={getName(item.text)}
                        startPath={get} />)}
                </div>
            </div>
            <div className="cuCentered">
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <br></br>
                            <p>
                                {popText}
                            </p>
                            <br></br>
                            <AiFillCloseCircle className='close-modal' onClick={toggleModalExit} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );

}
serviceWorker.unregister();
export default Simulator