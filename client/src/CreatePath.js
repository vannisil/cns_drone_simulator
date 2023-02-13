import { useEffect, useState } from "react";
import Cu from "./components/Cu";
import CuForPath from "./components/CuForPath";
import { getAllCu, addCu, updateCu, deleteCu } from "./utils/HandleApi";
import { getAllPath, addPath, updatePath, deletePath } from "./utils/HandleApi";
import { AiFillCloseCircle } from "react-icons/ai"


function CreatePath() {

  const [cu, setCu] = useState([])
  const [path, setPath] = useState([])
  const [text, setText] = useState("")
  const [nameCu, setNameCu] = useState("")
  const [name, setName] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [CuId, setCuId] = useState("")

  const [modal, setModal] = useState(false);
  const [popText, setPopText] = useState("")

  function getName(json) {
    var obj = JSON.parse(json);
    return obj.name
  }

  const toggleModal = (info) => {
    var obj = JSON.parse(info);
    setName(obj["name"])
    var popUpText = "latitude: ";
    for (var i = 0; i < cu.length; i++) {
      if (cu[i]["text"] === info) {
        popUpText += JSON.parse(info)["latitude"] + "\n";
        popUpText += "longitude: " + JSON.parse(info)["longitude"];
      }
    }
    setPopText(popUpText)
    setModal(!modal);
  };

  const toggleModalExit = () => {
    setModal(!modal);
  };

  const aggiungi = (text, setText, setCu) => {
    // addCu(text, setText, setCu);
    document.getElementById("aggiungi").style.display = "none"
    document.getElementById("elimina").style.display = "inline"
  }

  const elimina = (item, setCu) => {
    //deleteCu(item._id, setCu);
    document.getElementById("aggiungi").style.display = "inline"
    document.getElementById("elimina").style.display = "none"
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

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
        <h1>Create Path</h1>
        <br></br>
        <p>Insert the name of the path and choose the steps</p>
        <input
          type="text"
          placeholder="Path name"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div
        className="add"
        onClick={isUpdating ?
          () => updateCu(CuId, text, setCu, setText, setIsUpdating)
          : () => addCu(text, setText, setCu)}>
        {isUpdating ? "Update" : "Add"}
      </div>
      <div className="cuCentered">
        <div className="list">
          {cu.map((item) => <CuForPath
            key={item._id}
            text={getName(item.text)}
            getInfo={() => toggleModal(item.text)}
            deleteCu={() => elimina(item, setCu)}
            addCu={() => aggiungi(text, setText, setCu)} />)}
        </div>
      </div>
      <div className="cuCentered">
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
              <h2>{name}</h2>
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

export default CreatePath;