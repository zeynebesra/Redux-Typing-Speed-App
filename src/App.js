import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Timer from "./components/Timer";
import UserInput from "./components/UserInput";
import Word from "./components/Word";

function App() {
  const status = useSelector((state) => state.typing.status);
  return (
    <div className="App">
      <div className="container">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="word-section">
          <Word />
        </div>
        <div className="timer-section">
          <Timer />
        </div>
        <div className="input-section">
          <UserInput />
        </div>
        {status === "finished" && (
          <div className="result-section">
            {status === "finished" && <Result />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
