import { useEffect, useState } from "react";
import Cu from "./components/Cu";
import { getAllVehicle, addVehicle, updateVehicle, deleteVehicle } from "./utils/HandleApi";


function Vehicle() {

  const [cu, setCu] = useState([])
  const [vehicle, setVehicle] = useState([])
  const [text, setText] = useState("")
  const [nameCu, setNameCu] = useState("")
  const [name, setName] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [VehicleId, setVehicleId] = useState("")

  useEffect(() => {
    getAllVehicle(setVehicle)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setVehicleId(_id)
  }

  var cuJson = new Object();
  var jsonString = "";

  // function buildCu() {
  //   cuJson.name = { nameCu };
  //   cuJson.coordinates = { text };
  //   jsonString = JSON.stringify(cuJson);
  //   setText(jsonString);
  //   addCu(text, setText, setCu)
  // }

  return (
    <div className="App">
      <div className="centered">
        <h1>Create a new Veichle</h1>
        <br></br>
        <p>Insert the name and choose the type of the vehicle</p>
        <input
          type="text"
          placeholder="name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div
        className="add"
        onClick={isUpdating ?
          () => updateVehicle(VehicleId, text, setVehicle, setText, setIsUpdating)
          : () => addVehicle(text, setText, setVehicle)}>
        {isUpdating ? "Update" : "Add"}
      </div>
      <div className="cuCentered">
        <div className="list">
          {vehicle.map((item) => <Cu
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteVehicle={() => deleteVehicle(item._id, setVehicle)} />)}
        </div>
      </div>
    </div>
  );
}

export default Vehicle;