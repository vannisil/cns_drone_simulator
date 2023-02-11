import { useEffect, useState } from "react";
import Cu from "./components/Cu";
import { getAllCu, addCu, updateCu, deleteCu } from "./utils/HandleApi";
import { getAllPath, addPath, updatePath, deletePath } from "./utils/HandleApi";


function CreatePath() {

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

      <div className="container">
        <div className="split left">
        <h1>Add your control unit</h1>
          <div className="top">
            <input
              type="text"
              placeholder="Name of Control Unit"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          
            <div
              className="add"
              onClick={isUpdating ?
                () => updateCu(CuId, text, setCu, setText, setIsUpdating)
                : () => buildCu()}>
              {isUpdating ? "Update" : "Add"}
            </div>
          </div>
          <h1>Choose the CUs for your path</h1>
          <h2>Here you can choose the steps of your path</h2>
          <div className="list">
            {cu.map((item) => <Cu
              key={item._id}
              text={item.text}
            />)}

          </div>
        </div>
        <div className="split right">
          <h1>Create your path</h1>
          <h2>After that you've added the control units, give the name to the path and start it</h2>
          <div className="list">
            {cu.map((item) => <Cu
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteCu={() => deleteCu(item._id, setCu)} />)}
          </div>

          <div className="top">
            <input
              type="text"
              placeholder="Enter the path Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div
              className="add"
              onClick={isUpdating ?
                () => updatePath(CuId, text, setCu, setText, setIsUpdating)
                : () => addPath(text, setText, setCu)}>
              {isUpdating ? "Update" : "Add"}
            </div>
          </div>
          <div className="list">
            {path.map((item) => <Cu
              key={item._id}
              text={item.text}
            />)}

          </div>
        </div>
      </div>

    </div>
  );
}

export default CreatePath;