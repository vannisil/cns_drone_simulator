import { useEffect, useState } from "react";
import Cu from "./components/Cu";
import { getAllCu, addCu, updateCu, deleteCu } from "./utils/HandleApi";
import { getAllPath, addPath, updatePath, deletePath } from "./utils/HandleApi";


function History() {

  const [cu, setCu] = useState([])
  const [path, setPath] = useState([])
  const [text, setText] = useState("")
  const [nameCu, setNameCu] = useState("")
  const [name, setName] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [CuId, setCuId] = useState("")

  useEffect(() => {
    getAllCu(setCu)
    getAllPath(setPath)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setCuId(_id)
  }

  var cuJson = new Object();
  var jsonString = "";

  function buildCu() {
    cuJson.name = { nameCu };
    cuJson.coordinates = { text };
    jsonString = JSON.stringify(cuJson);
    setText(jsonString);
    addCu(text, setText, setCu)
  }

  return (
    <div className="App">
      <div className="centered">
      <h1>History</h1>
      <br></br>
      <p>All the path created</p>
      </div>
      <div className="cuCentered">
        <div className="list">
          {path.map((item) => <Cu
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteCu={() => deleteCu(item._id, setCu)} />)}
        </div>
      </div>
    </div>
  );
}

export default History;