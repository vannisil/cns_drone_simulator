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

  const [pathString, setPathString] = useState("[")

  var pathJson = new Object();
  var jsonPathString = "[";

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

  const aggiungi = (cu, id) => {
    var obj = JSON.parse(cu)
    var cuj = new Object;
    cuj.namepath = text;
    cuj.name = obj["name"]
    cuj.latitude = obj["latitude"]
    cuj.longitudine = obj["longitude"]
    cuj.time = document.getElementById("time" + id).value
    cuj.date = document.getElementById("date" + id).value
    cu = JSON.stringify(cuj)
    jsonPathString = pathString;
    jsonPathString += cu + ",";
    setPathString(jsonPathString)
    console.log(jsonPathString)
    document.getElementById("aggiungi" + id).style.display = "none"
    document.getElementById("elimina" + id).style.display = "inline"
  }

  const elimina = (cu, id) => {
    jsonPathString = pathString.replace(cu + ",", '');
    setPathString(jsonPathString);
    console.log(jsonPathString)
    document.getElementById("aggiungi" + id).style.display = "inline"
    document.getElementById("elimina" + id).style.display = "none"
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

  const buildPath = () => {

    if (text === "") {
      document.getElementById('error').style.display = "inline"
    } else {
      document.getElementById('error').style.display = "none"
      var string = pathString + "]"
      string = string.replace(",]", "]")
      var obj = JSON.parse(string)
      console.log(string)
      console.log(obj)
      addPath(string, setText, setPath)
    }
    
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
        <div>
          <p id="error" className="error">Please, enter the path name</p>
        </div>
      </div>
      <div
        className="add"
        onClick={isUpdating ?
          () => updateCu(CuId, text, setCu, setText, setIsUpdating)
          : () => buildPath()}>
        {isUpdating ? "Update" : "Add"}
      </div>
      <div className="cuCentered">
        <div className="list">
          {cu.map((item) => <CuForPath
            key={item._id}
            text={getName(item.text)}
            getInfo={() => toggleModal(item.text)}
            deleteCu={() => elimina(item.text, item._id)}
            addCu={() => aggiungi(item.text, item._id)}
            index={item._id} />)}
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