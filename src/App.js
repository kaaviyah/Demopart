import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Dash from "./Components/Dash";
import Login from "./Pages/Login";
import Mainpage from "./Dash/Mainpage";
// import Pageone from "./Dash/Pageone";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />}></Route> */}
          <Route path="/" element={<Login />}></Route>
          <Route path="/Mainpage" element={<Mainpage />}></Route>
        </Routes>
      </Router>
      {/* <Dash /> */}
    </div>
  );
}

export default App;
