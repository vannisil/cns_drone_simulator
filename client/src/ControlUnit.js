import { useEffect, useState } from "react";
import Cu from "./components/Cu";
import { getAllCu, addCu, updateCu, deleteCu } from "./utils/HandleApi";

function ControlUnit() {

  const [cu, setCu] = useState([])
  const [name, setName] = useState("")
  const [long, setLong] = useState("")
  const [lat, setLat] = useState("")
  const [json, setJson] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [CuId, setCuId] = useState("")

  useEffect(() => {
    getAllCu(setCu)
  }, [])

  const updateMode = (_id, name) => {
    setIsUpdating(true)
    setName(name)
    setCuId(_id)
  }

  var cuJson = new Object();
  var jsonString = "";

  const buildCu = (name, lat, long, setJson, setCu) => {
    cuJson.name = name;
    cuJson.latitude = lat;
    cuJson.longitude = long;
    jsonString = JSON.stringify(cuJson);
    setJson(jsonString);
    addCu(jsonString, setJson, setCu)
    setName("");
    setLat("")
    setLong("");
  }
  

  function getName(json){
    var obj = JSON.parse(json);
    return obj.name
  }

  return (
    <div className="App">
      <div className="centered">
        <h1>Control Unit</h1>
        <input
          type="text"
          placeholder="Name of Control Unit"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Latitudine"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
        />
        <input
          type="text"
          placeholder="Longitudine"
          value={long}
          onChange={(e) => setLong(e.target.value)}
        />
      </div>
      <div
        className="add"
        onClick={isUpdating ?
          () => updateCu(CuId, name, setCu, setName, setIsUpdating)
          : () => buildCu(name, lat, long, setJson, setCu)}>
        {isUpdating ? "Update" : "Add"}
      </div>
      <div className="cuCentered">
        <div className="list">
          {cu.map((item) => <Cu
            key={item._id}
            text={getName(item.text)}
            updateMode={() => updateMode(item._id, item.text)}
            deleteCu={() => deleteCu(item._id, setCu)} />)}
        </div>
      </div>
    </div>
  );
}

export default ControlUnit;