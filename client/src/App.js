
import CreatePath from "./CreatePath";
import controlUnit from "./ControlUnit";
import Home from "./Home";
import Sidebar from "./components/Sidebar";
import Vehicle from "./Vehicle";
import History from "./History";
import Simulator from "./Simulator";
import Backup from "./Backup";

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/path":
      Component = CreatePath
      break
    case "/controlUnit":
      Component = controlUnit
      break
    case "/vehicle":
      Component = Vehicle
      break
    case "/history":
      Component = History
      break
    case "/simulator":
      Component = Simulator
      break
    case "/backup":
      Component = Backup
  }

  return (
    <>
      <Sidebar />
      <Component />
    </>
  );
}

export default App;