import { useEffect, useState } from "react";
import Cu from "./components/Cu";
import Path from "./components/Path";
import { getAllCu, addCu, updateCu, deleteCu } from "./utils/HandleApi";
import { getAllPath, addPath, updatePath, deletePath } from "./utils/HandleApi";


function History() {

  const [cu, setCu] = useState([])
  const [path, setPath] = useState([])
  const [text, setText] = useState("")
  const [nameCu, setNameCu] = useState("")
  const [name, setName] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [PathId, setPathId] = useState("")

  useEffect(() => {
    getAllPath(setPath)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setPathId(_id)
  }

  function getName(json) {
    console.log(obj)
    var obj = JSON.parse(json);
    return obj[0].namepath
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
      <div className="centeredS">
      <h1>History</h1>
      <br></br>
      <p>Here you cand find all the paths created to delete them</p>
      </div>
      <div className="cuCentered">
        <div className="list">
          {path.map((item) => <Path
            key={item._id}
            text={getName(item.text)}
            updateMode={() => updateMode(item._id, item.text)}
            deletePath={() => deletePath(item._id, setPath)} />)}
        </div>
      </div>
    </div>
  );
}

export default History;