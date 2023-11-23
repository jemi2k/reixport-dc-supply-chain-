// import "./App.css";
import AssignRoles from "./AssignRoles";
import Home from "./Home";
import AddMed from "./AddMed";
import Supply from "./Supply";
import Track from "./Track";
import Layout from "./Components/Layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index exact element={<Home />} />
            <Route path="/roles" element={<AssignRoles />} />
            <Route path="/addmed" element={<AddMed />} />
            <Route path="/supply" element={<Supply />} />
            <Route path="/track" element={<Track />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
