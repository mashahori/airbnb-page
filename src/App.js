import { Experiences, Best, Header } from "./components";
import "./App.css";
import mock from "./mock/index.js";

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="handler">
        <Best items={mock.best} />
        <Experiences items={mock.items} />
      </div>
    </div>
  );
};

export default App;
