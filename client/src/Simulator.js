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

    var step;

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
                if(date1 === currentDate){
                    console.log("il drone si trova nello step " + (i + 1) + "perchè " + time + " " + currentTime + " " + time1 + " ad oggi")
                }
                else if (date1 > currentDate){
                    console.log("non è nello step " + (i + 1) + "perchè " + date + " " + currentDate + " " + date1)
                }
            }
            else if (date === currentDate && date1 === currentDate) {
                if (time < currentTime || currentTime > time1) {
                    console.log("non è nello step " + (i + 1) + "perchè " + time + " " + currentTime + " " + time1 )
                } else if (time < currentTime && currentTime <= time1) {
                    console.log("il drone si trova nello step " + (i + 1) + "perchè " + time + " " + currentTime + " " + time1 + " ad oggi")
                }
            }
            else if (date < currentDate && date1 === currentDate) {
                if (currentTime <= time1) {
                    console.log("il drone si trova nello step " + (i + 1) + "perchè " + time + " " + currentTime + " " + time1 + " ad oggi")
                } else console.log("non è nello step " + (i + 1) + "perchè " + time + " " + currentTime + " " + time1 + " ad oggi")
            }
            else if (date < currentDate && date1 > currentDate) {
                if (time < currentTime || currentTime > time1) {
                    console.log("non è nello step " + (i + 1) + "perchè " + time + " " + currentTime + " " + time1 + "tra " + date + " " + date1)
                } else if (time < currentTime && currentTime <= time1) {
                    console.log("il drone si trova nello step " + (i + 1) + "perchè " + time + " " + currentTime + " " + time1 + "tra " + date + " " + date1)
                }
            }
        }
        var time = (obj[0].time)
        var time1 = (obj[1].time)
        console.log(time + " " + currentTime + " " + time1)
        if (time < currentTime) {
            console.log("funziona")
        }
        // var lt = parseInt(obj[0].latitude)
        // var lg = parseInt(obj[0].longitude)
        // var date = (obj[0].date)
        // var currentDate = ((new Date).toISOString().split('T')[0]);
        // console.log(currentDate)
        // console.log(date)
        // if (currentDate < date) {
        //     console.log(true)
        // }
    }

    var obj;

    function getName(json) {
        console.log(obj)
        obj = JSON.parse(json);
        return obj[0].namepath
    }

    function getStep(json) {
        var lenght = obj.lenght;
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