import { Experiences, Best } from "./components";
import "./App.css";
import mock from "./mock/index.js";

const App = () => {
  return (
    <div className="app">
      <Best items={mock.best} />
      <Experiences items={mock.items} />
    </div>
  );
};

export default App;
