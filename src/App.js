import Header from "./Header/index.jsx";
import "./App.css";
import Introduction from "./Introduction/index.jsx";
import Display from "./Display/index.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Display />
      <Introduction />
    </div>
  );
}

export default App;
