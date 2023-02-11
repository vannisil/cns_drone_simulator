
import CreatePath from "./CreatePath";
import controlUnit from "./ControlUnit";
import Home from "./Home";
import Sidebar from "./components/Sidebar";

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/path":
      Component = CreatePath
    case "/controlUnit":
      Component = controlUnit
  }

  return (
    <>
      <Sidebar />
      <Component />
    </>
  );
}

export default App;