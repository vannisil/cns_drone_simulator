
import CreatePath from "./CreatePath";
import Home from "./Home";


function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/path":
      Component = CreatePath
  }

  return (
    <Component />
  );
}

export default App;