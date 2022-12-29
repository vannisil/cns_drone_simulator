import { useEffect, useState } from "react";
import Cu from "./components/Cu";
import { addCu, getAllCu, updateCu, deleteCu } from "./utils/HandleApi";


function CreatePath() {

  const [cu, setCu] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [CuId, setCuId] = useState("")

  useEffect(() => {
    getAllCu(setCu)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setCuId(_id)
  }

  return (
    <div className="App">

      <div className="container">

        <h1>Create Path</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add Cu..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateCu(CuId, text, setCu, setText, setIsUpdating)
              : () => addCu(text, setText, setCu)}>
            {isUpdating ? "Update" : "Add"}
          </div>

        </div>

        <div className="list">

          {cu.map((item) => <Cu 
          key={item._id} 
          text={item.text}
          updateMode = {() => updateMode(item._id, item.text)}
          deleteCu = {() => deleteCu(item._id, setCu)} />)}

        </div>

      </div>

    </div>
  );
}

export default CreatePath;